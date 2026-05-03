const Home = () => (
  <main className="mx-auto min-h-[calc(100vh-65px)] max-w-6xl px-6 py-14">
    <section className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-[#8A5F41]">
          Secure auth starter
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-[#2b211a] sm:text-5xl">
          Simple file-based routing for your Vite app.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-[#8A5F41]">
          Home, login, and profile pages are loaded from files inside <span className="font-bold">src/pages</span>.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-lg bg-[#8A5F41] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A77F60]"
            href="/login"
          >
            Go to login
          </a>
          <a
            className="rounded-lg border border-[#A77F60]/35 bg-white px-5 py-3 text-sm font-bold text-[#8A5F41] transition hover:border-[#8A5F41]"
            href="/profile"
          >
            View profile
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-[#A77F60]/25 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-[#2b211a]">Available routes</h2>
        <div className="mt-5 grid gap-3">
          {[
            ['/', 'Home', 'src/pages/index.jsx'],
            ['/login', 'Login', 'src/pages/login.jsx'],
            ['/profile', 'Profile', 'src/pages/profile.jsx'],
          ].map(([path, title, file]) => (
            <a
              className="rounded-xl bg-[#F3E4C9]/65 p-4 transition hover:bg-[#CCD67F]/40"
              href={path}
              key={path}
            >
              <p className="text-sm font-bold text-[#8A5F41]">{path}</p>
              <p className="mt-1 font-semibold text-[#2b211a]">{title}</p>
              <p className="mt-1 text-sm text-[#A77F60]">{file}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  </main>
)

export default Home
