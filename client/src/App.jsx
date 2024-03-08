import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './ui/AppLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider } from '@chakra-ui/react'
import GamePages from './pages/Game Pages/GamePages'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
    }
  }
})

const ProviderWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ChakraProvider>{children}</ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default function App() {
  return (
    <ProviderWrapper>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="games" />} />
          <Route path="games" element={<Homepage />} />
          <Route path="games/:slug" element={<GamePages />} />
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </ProviderWrapper>
  )
}
