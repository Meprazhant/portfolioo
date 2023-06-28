import Navbar from '@/components/navbar'
import '../styles/globals.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
    var router = useRouter()


    return (
        <div theme-data='light'>
            <Navbar />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp