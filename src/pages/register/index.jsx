const Register = () => (
  <main className="mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl items-center px-6 py-14">
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

      <form className="grid gap-5 p-8">
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
          />
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
          />
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
          />
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

        <button
          className="rounded-lg bg-[#8A5F41] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A77F60]"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </section>
  </main>
)

export default Register
