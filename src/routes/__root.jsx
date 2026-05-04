import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '../components/header';
import '../index.css';
import { AuthProvider } from '../providers/auth-providers';

const RootLayout = () => (
  <AuthProvider>
    <Header />
    <main className="mx-auto min-h-[calc(100vh-77px)] max-w-6xl px-6 py-14">
      <Outlet />
    </main>
  </AuthProvider>
)

export const Route = createRootRoute({ component: RootLayout })