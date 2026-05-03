import { createFileRoute } from '@tanstack/react-router';

const stats = [
  ['12', 'Active sessions'],
  ['98%', 'Security score'],
  ['4', 'Linked devices'],
]

const Profile = () => (
  <main className="mx-auto min-h-[calc(100vh-65px)] max-w-6xl px-6 py-14">
    <section className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
      <aside className="rounded-2xl bg-[#8A5F41] p-6 text-white shadow-sm">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-[#CCD67F] text-2xl font-bold text-[#2b211a]">
            AS
          </div>
          <div>
            <h1 className="text-2xl font-bold">Ashish Saini</h1>
            <p className="mt-1 text-sm text-[#F3E4C9]">ashish@example.com</p>
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
            ['Full name', 'Ashish Saini'],
            ['Role', 'Product engineer'],
            ['Authentication', 'Password and session based'],
            ['Last login', 'Today at 10:42 AM'],
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
  </main>
)

export const Route = createFileRoute('/profile/')({
  component: Profile,
})
