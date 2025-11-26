import '../styles/globals.css'

function MyApp({ Component, pageProps }: { Component: React.ComponentType, pageProps: Record<string, unknown> }) {
  return <Component {...pageProps} />
}

export default MyApp