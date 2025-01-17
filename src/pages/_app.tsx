import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { ThemeProvider } from '@/components/theme-provider';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { fetcher } from '@/lib/fetcher';
import MainLayout from '@/components/layout/main-layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <SWRConfig 
        value={{
          fetcher,
          revalidateOnFocus: false,
          shouldRetryOnError: false
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </SWRConfig>
    </ErrorBoundary>
  );
}