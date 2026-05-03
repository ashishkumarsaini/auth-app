import { createFileRoute } from '@tanstack/react-router'
import { registerUser } from '../../services/auth';
import { useForm } from '../../hooks/use-form';

const Register = () => {
  const validateData = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required'
    }
    if (!formData.password) {
      errors.password = 'Password is required'
    }
    if (!formData.username) {
      errors.username = 'Username is required'
    }
    return errors;
  }

  const initialData = {
    email: '',
    password: '',
    username: '',
    role: 'USER'
  }

  const { formData, formError, handleSubmitData, handleChangeFormData, isLoading, success, submitMessage } = useForm(registerUser, initialData, validateData)

  return (
    <section className="mx-auto grid w-full max-w-4xl overflow-hidden rounded-2xl border border-[#A77F60]/25 bg-white shadow-sm lg:grid-cols-[0.85fr_1fr]">
      <div className="bg-[#8A5F41] p-8 text-white">
        <p className="text-sm font-bold uppercase tracking-widest text-[#CCD67F]">
          Welcome to Auth
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight">
          Create an account to access full features.
        </h1>
        <p className="mt-4 leading-7 text-[#F3E4C9]">
          Start journey with us.
        </p>
      </div>

      <form className="grid gap-5 p-8" onSubmit={handleSubmitData}>
        <div>
          <h2 className="text-2xl font-bold text-[#2b211a]">Register</h2>
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
            onChange={handleChangeFormData('password')}
          />
          {formError.password && <small className="text-red-500 mt-2">{formError.password}</small>}
        </div>

        <div>
          <label className="text-sm font-semibold text-[#8A5F41]" htmlFor="username">
            Username
          </label>
          <input
            className="mt-2 w-full rounded-lg border border-[#A77F60]/30 bg-white px-4 py-3 text-[#2b211a] outline-none transition placeholder:text-[#A77F60]/60 focus:border-[#8A5F41] focus:ring-4 focus:ring-[#CCD67F]/25"
            id="username"
            placeholder="Enter your username"
            type="text"
            onChange={handleChangeFormData('username')}
          />
          {formError.username && <small className="text-red-500 mt-2">{formError.username}</small>}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <label className="flex items-center gap-2 font-medium text-[#8A5F41]">
            <input className="h-4 w-4 accent-[#CCD67F]" type="checkbox" />
            Remember me
          </label>
          <a className="font-semibold text-[#8A5F41] hover:text-[#A77F60]" href="/">
            Already have an account? Login here
          </a>
        </div>

        {isloading ? (
          <button
            className="rounded-lg bg-[#8A5F41] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A77F60]"
            type="submit"
            disabled
          >
            Register Account
          </button>
        ) : (
          <button
            className="rounded-lg bg-[#8A5F41] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A77F60]"
            type="submit"
          >
            Register Account
          </button>
        )}

        {
          submitMessage && (
            <p className={`text-sm ${success ? 'text-green-500' : 'text-red-500'}`}>
              {submitMessage}
            </p>
          )
        }
      </form>
    </section>
  )
}

export const Route = createFileRoute('/register/')({
  component: Register,
})
