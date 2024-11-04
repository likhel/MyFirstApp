import React from 'react'
import MyRoutes from './MyRoutes'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client = {queryClient}>
      <MyRoutes/>
    </QueryClientProvider>
  )
}

export default App
