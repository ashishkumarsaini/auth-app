import { useLocation } from '@tanstack/react-router'
import { useAuth } from '../hooks/useAuth';
import { logoutUser } from '../services/auth';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log({ currentPath });

  const { user } = useAuth();

  const mainNaivigation = [
    { href: '/', label: 'Home' },
    { href: '/profile', label: 'Profile' },
  ];

  const authNavigation = [
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
  ];

  const navigation = user ? mainNaivigation : [...mainNaivigation, ...authNavigation];

  const handleLogout = async () => {
    await logoutUser();
  }

  return (
    <header className="border-b border-[#A77F60]/20 bg-[#F3E4C9]/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          className="text-lg font-bold tracking-tight text-[#8A5F41]"
          href="/"
        >
          AuthFlow
        </a>

        <div className="flex items-center gap-2 p-1">
          <div className='rounded-xl bg-white/55 flex p-1 gap-1'>
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
          {user &&
            <div className='p-1'>
              <button onClick={handleLogout}
                className="rounded-lg px-3 py-2 text-sm font-semibold transition bg-[#8A5F41] text-white shadow-sm cursor-pointer"
              >
                Logout
              </button>
            </div>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header