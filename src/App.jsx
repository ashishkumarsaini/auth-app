import { useEffect, useMemo, useState } from 'react'
import Header from './components/header'

const pageModules = import.meta.glob('./pages/**/*.jsx', {
  eager: true,
  import: 'default',
})

const normalizePath = (path) => {
  if (path === './pages/index.jsx') {
    return '/'
  }

  return path
    .replace('./pages', '')
    .replace(/\/index\.jsx$/, '')
    .replace(/\.jsx$/, '')
}

const routes = Object.entries(pageModules).map(([path, Component]) => ({
  path: normalizePath(path),
  Component,
}))



const NotFound = () => (
  <main className="min-h-screen bg-[#F3E4C9] px-6 py-10 text-[#2b211a]">
    <div className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-[#A77F60]/25 bg-white p-10 text-center shadow-sm">
      <p className="text-sm font-bold uppercase tracking-widest text-[#8A5F41]">404</p>
      <h1 className="mt-3 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 max-w-xl text-[#8A5F41]">
        The page you are looking for does not exist in the file-based routes yet.
      </p>
      <a
        className="mt-8 rounded-lg bg-[#8A5F41] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A77F60]"
        href="/"
      >
        Back to home
      </a>
    </div>
  </main>
)

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname)

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const ActivePage = useMemo(
    () => routes.find((route) => route.path === currentPath)?.Component,
    [currentPath],
  )

  return (
    <div className="min-h-screen bg-[#F3E4C9] text-[#2b211a]">
      <Header currentPath={currentPath}/>

      {ActivePage ? <ActivePage /> : <NotFound />}
    </div>
  )
}

export default App
