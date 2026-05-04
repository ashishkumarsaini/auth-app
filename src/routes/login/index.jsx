import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useForm } from '../../hooks/use-form';
import { loginUser } from '../../services/auth';
import { useAuth } from '../../hooks/useAuth';


const Login = () => {
  const navigateTo = useNavigate();
  const { setUser } = useAuth()

  const validateData = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required'
    }
    if (!formData.password) {
      errors.password = 'Password is required'
    }
    return errors;
  }

  const initialData = {
    email: '',
    password: ''
  };

  const { formData, formError, handleSubmitData, handleChangeFormData, isLoading, success, submitMessage } = useForm(loginUser, initialData, validateData, (data) => {
    setUser(data.user);

    localStorage.setItem('access_token', data.accessToken);
    localStorage.setItem('refresh_token', data.refreshToken);

    navigateTo({ to: '/profile' })
  })

  return (
    <section className="mx-auto grid w-full max-w-4xl overflow-hidden rounded-2xl border border-[#A77F60]/25 bg-white shadow-sm lg:grid-cols-[0.85fr_1fr]">
      <div className="bg-[#8A5F41] p-8 text-white">
        <p className="text-sm font-bold uppercase tracking-widest text-[#CCD67F]">
          Welcome back
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight">
          Sign in to your account.
        </h1>
        <p className="mt-4 leading-7 text-[#F3E4C9]">
          A simple login page styled with your custom color palette.
        </p>
      </div>

      <form className="grid gap-5 p-8" onSubmit={handleSubmitData}>
        <div>
          <h2 className="text-2xl font-bold text-[#2b211a]">Login</h2>
          <p className="mt-1 text-sm text-[#A77F60]">Enter your details below.</p>
        </div>

        <div>
          <label className="text-sm font-semibold text-[#8A5F41]" htmlFor="email">
            Email
          </label>
          <input
            className="mt-2 w-full rounded-lg border border-[#A77F60]/30 bg-white px-4 py-3 text-[#2b211a] outline-none transition placeholder:text-[#A77F60]/60 focus:border-[#8A5F41] focus:ring-4 focus:ring-[#CCD67F]/25"
            id="email"
            placeholder="you@example.com"
            type="email"
            value={formData.email}
            onChange={handleChangeFormData('email')}
          />
          {formError.email && <small className="text-red-500 mt-2">{formError.email}</small>}
        </div>

        <div>
          <label className="text-sm font-semibold text-[#8A5F41]" htmlFor="password">
            Password
          </label>
          <input
            className="mt-2 w-full rounded-lg border border-[#A77F60]/30 bg-white px-4 py-3 text-[#2b211a] outline-none transition placeholder:text-[#A77F60]/60 focus:border-[#8A5F41] focus:ring-4 focus:ring-[#CCD67F]/25"
            id="password"
            placeholder="Enter your password"
            type="password"
            value={formData.password}
            onChange={handleChangeFormData('password')}
          />
          {formError.password && <small className="text-red-500 mt-2">{formError.password}</small>}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 font-medium text-[#8A5F41]">
            <input className="h-4 w-4 accent-[#CCD67F]" type="checkbox" />
            Remember me
          </label>
          <Link className="font-semibold text-[#8A5F41] hover:text-[#A77F60]" to="/">
            Forgot password?
          </Link>
        </div>

        {isLoading ? (
          <button
            className="rounded-lg bg-[#8A5F41] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A77F60]"
            type="submit"
            disabled
          >
            Loading...
          </button>
        ) : (
          <button
            className="rounded-lg bg-[#8A5F41] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A77F60]"
            type="submit"
          >
            Login Account
          </button>
        )}

        {
          submitMessage && (
            <p className={`text-sm ${success ? 'text-[#2b211a]' : 'text-red-500'}`}>
              {submitMessage}
            </p>
          )
        }
      </form>
    </section>
  )
}

export const Route = createFileRoute('/login/')({
  component: Login,
});
