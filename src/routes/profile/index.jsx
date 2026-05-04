import { createFileRoute, redirect } from '@tanstack/react-router';
import { useAuth } from '../../hooks/useAuth';

const stats = [
  ['12', 'Active sessions'],
  ['98%', 'Security score'],
  ['4', 'Linked devices'],
]

const Profile = () => {
  const { user } = useAuth();

  const { username, email, role, loginType, isEmailVerified, createdAt, updatedAt } = user;

  const createdAtDate = new Date(createdAt);
  const updatedAtDate = new Date(updatedAt);

  return (
    <section className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
      <aside className="rounded-2xl bg-[#8A5F41] p-6 text-white shadow-sm">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[#CCD67F] text-2xl font-bold text-[#2b211a]">
            {username.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{username}</h1>
            <p className="mt-1 text-sm text-[#F3E4C9]">{email}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          {stats.map(([value, label]) => (
            <div className="rounded-xl bg-white/10 p-4" key={label}>
              <p className="text-2xl font-bold text-[#CCD67F]">{value}</p>
              <p className="mt-1 text-sm text-[#F3E4C9]">{label}</p>
            </div>
          ))}
        </div>
      </aside>

      <section className="rounded-2xl border border-[#A77F60]/25 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-widest text-[#8A5F41]">
          Profile
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#2b211a]">
          Account overview
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-[#8A5F41]">
          Keep personal details and login status easy to scan.
        </p>

        <div className="mt-8 grid gap-3">
          {[
            ['Username', username],
            ['Role', role],
            ['Authentication', loginType],
            ['Email Verified', isEmailVerified ? 'Verified' : 'Not Verified'],
            ['Created At', createdAtDate.toDateString()],
            ['Updated At', updatedAtDate.toDateString()]
          ].map(([label, value]) => (
            <div
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#F3E4C9]/65 px-4 py-3"
              key={label}
            >
              <span className="text-sm font-medium text-[#A77F60]">{label}</span>
              <span className="text-sm font-bold text-[#2b211a]">{value}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export const Route = createFileRoute('/profile/')({
  beforeLoad: ({ context }) => {
    if (!context.auth.user) {
      throw redirect({
        to: '/login'
      })
    }
  },
  component: Profile,
})
