import Head from 'next/head'
import Navbar from '../pages/components/navbar'
import Image from 'next/image'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      
      <main>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <div className="left">
                <h1>YANIS HARRAT</h1>
                <h2>DEVLOPPER FULL-STACK </h2>
                <p>
                  Avect u oeil sur le design et une passion pour le code, je
                  suis un développeur full-stack. J'aime créer des sites web
                  modernes et efficaces. J'ai une expérience de 2 ans dans
                </p>
              </div>
            </div>
            <div className="col-1">
              <div className="right">
                <Image src="/photopro.jpg" width={500} height={500} alt={''} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
    </>
  )
}
