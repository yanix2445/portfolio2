import React from 'react';
import Head from 'next/head';
import Navbar from '../pages/components/navbar';


const contact = () => {
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
                <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <input type="text" placeholder="Sujet" />
                    <textarea name="message"></textarea>
                </form>
                <div className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-1">
                                <div className="left">
                                    <h1>CONTACT</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                                    </p>
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="right">
                                    <form
                                        name="CONTACT"
                                        method='post'
                                        className='contact1'
                                        datat-netlify='true'
                                        onSubmit="submit">

                                        <input type="hidden" name="form-name" value="CONTACT" />

                                        <label htmlFor="name">Nom</label>
                                        <input type="text" placeholder="Nom" />

                                        <label htmlFor="email">Email</label>
                                        <input type="email" placeholder="Email" />

                                        <label htmlFor="subject">Sujet</label>
                                        <input type="text" placeholder="Sujet" />

                                        <label htmlFor="message">Message</label>
                                        <textarea name="" id="" cols={30} rows={10} placeholder="Message" />

                                        <button type="submit">Envoyer</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default contact;