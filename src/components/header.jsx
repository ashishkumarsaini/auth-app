import { useLocation } from '@tanstack/react-router'

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigation = [
    { href: '/', label: 'Home' },
    { href: '/profile', label: 'Profile' },
  ];

  const authNavigation = [
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
  ];


  return (
    <header className="border-b border-[#A77F60]/20 bg-[#F3E4C9]/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          className="text-lg font-bold tracking-tight text-[#8A5F41]"
          href="/"
        >
          AuthFlow
        </a>

        <div className="flex items-center gap-1 rounded-xl bg-white/55 p-1">
          {navigation.map((item) => {
            const isActive = currentPath === item.href

            return (
              <a
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive
                  ? 'bg-[#8A5F41] text-white shadow-sm'
                  : 'text-[#8A5F41] hover:bg-white'
                  }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default Header