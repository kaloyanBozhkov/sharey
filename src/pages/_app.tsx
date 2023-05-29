import { ClerkProvider } from '@clerk/nextjs'
import { MantineProvider } from '@mantine/core'

import { type AppType } from 'next/app'

import { useTheme } from '@/stores/Theme.store'

import ErrorBoundary from '@/components/organisms/ErrorBoundary/ErrorBoundary.organism'

import { trpcNext } from '@/utils/trpcNext'

import '@/scss/globals.scss'

const MyApp: AppType = ({ Component, pageProps }) => {
  const theme = useTheme(({ theme }) => theme)

  return (
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS theme={theme}>
      <ErrorBoundary>
        <ClerkProvider {...pageProps}>
          <Component {...pageProps} />
        </ClerkProvider>
      </ErrorBoundary>
    </MantineProvider>
  )
}

export default trpcNext.withTRPC(MyApp)
