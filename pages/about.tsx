import React from 'react';
import Head from 'next/head';
import Navbar from './components/navbar';
import Image from 'next/image';
import Footer from './components/footer';

const about = () => {
    return (
        <div>
            <Head>
                <title>YANIS HARRAT</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <header>
                <Navbar />
            </header>

            <main>
                <div className="container-about">
                    <div className="row-about">
                        <div className="col-2">
                            <div className="left-about">
                                <h1 className="cool-title">Salut, je suis Yanis</h1>
                                <h2 className="cool-subtitle">Dev full-stack </h2>
                                <p>
                                    Je suis un développeur passionné qui aime créer des projets cools sur internet. Je maîtrise React, Node.js et autres technologies pour vous offrir des projets qui déchirent. En dehors de coder
                                </p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="right-about">
                                <Image className='logo-about' src="/CodeDevelopment_Two Color.svg" width={500} height={500} alt={'gqweg'} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
          
        </div>

    )
}

 export default about;