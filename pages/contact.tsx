/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import Navbar from '../pages/components/navbar';



const contact = () => {

  return (
    <>
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
        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-1">
                <div className="left">
                  <h1>CONTACT</h1>               
                  <p>
                    Pour toute demande de renseignement, n'hésitez pas à me contacter
                  </p>
                </div>
              </div>
              <div className="col-1">
                <div className="right">

                  <form name="contact" method="POST" data-netlify="true">
                    <p>
                      <label>Name <input type="text" name="name" /></label>
                    </p>
                    <p>
                      <label>Email <input type="email" name="email" /></label>
                    </p>
                    <p>
                      <label>Message <textarea name="message"></textarea></label>
                    </p>
                    <p>
                      <button className='btn' type="submit">Envoyer</button>
                    </p>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default contact;
