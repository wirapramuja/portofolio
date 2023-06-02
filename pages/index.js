import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Kemampuan from '@/components/Kemampuan'
import Navigasi from '@/components/Navigasi'
import Projects from '@/components/Projects'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Wira Pramuja | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigasi />
      <Hero />
      <About />
      <Kemampuan />
      <Projects />
      <Contact />







    </>
  )
}
