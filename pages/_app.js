
import { ChakraProvider } from '@chakra-ui/react'
import Font from '../components/Font/font'
import Layout from '../components/Layout'
import '../styles/globals.css'
import theme from './theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Font />
      <ChakraProvider theme={theme} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
