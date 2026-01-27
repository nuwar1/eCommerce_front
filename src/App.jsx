import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './route'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import LanguageManager from './utils/LanguageManager'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import useThemeStore from './store/useThemeStore'
import getTheme from './themes/theme'

export default function App() {
  const queryClient = new QueryClient()
  const mode = useThemeStore((state)=>state.mode);
  const theme = getTheme(mode);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageManager />
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
