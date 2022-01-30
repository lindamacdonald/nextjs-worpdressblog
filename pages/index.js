import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Jamstack site with next.js, Tailwindcss and Fuse.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <ProductGrid />
      

    
    </div>
  )
}
