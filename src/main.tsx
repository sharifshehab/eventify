import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ProviderContext from './contexts/ProviderContext'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProviderContext>
      <RouterProvider router={router}></RouterProvider>
      </ProviderContext>
    </QueryClientProvider>
  </StrictMode>,
)
