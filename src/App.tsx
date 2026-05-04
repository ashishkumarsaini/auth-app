import { createRouter, RouterProvider } from "@tanstack/react-router";
// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { useAuth } from "./hooks/useAuth";

// Create a new router instance
const router = createRouter({ routeTree, context: { auth: undefined } })

export const App = () => {
  const auth = useAuth();
  return (
    <RouterProvider router={router} context={{ auth }} />
  )
}