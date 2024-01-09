import { Footer, Navbar } from '@/components';
import { AmsProvider } from '@/context/AMS';
import '@/styles/globals.css'
export default function App({ Component, pageProps }) {

  return( <> 
        <AmsProvider>
          <Navbar/>

        <Component {...pageProps} />
        
        </AmsProvider>
      <Footer/>
   </> 
  )
}
