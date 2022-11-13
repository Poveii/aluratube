import { CSSReset } from "../src/components/CSSReset"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CSSReset />
      <Component {...pageProps} />
    </>
  )
}
