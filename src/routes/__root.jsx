import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '../components/header';
import '../index.css';

const RootLayout = () => (
  <>
    <Header />
    <main>

    <Outlet />
    </main>
  </>
)

export const Route = createRootRoute({ component: RootLayout })