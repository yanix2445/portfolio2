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
                                    
                                    <form name="contact" method="POST" data-netlify="true">
                                        <p>
                                            <label>Your Name: <input type="text" name="name" /></label>
                                        </p>
                                        <p>
                                            <label>Your Email: <input type="email" name="email" /></label>
                                        </p>
                                        <p>
                                            <label>Your Role: <select name="role[]" multiple>
                                                <option value="leader">Leader</option>
                                                <option value="follower">Follower</option>
                                            </select></label>
                                        </p>
                                        <p>
                                            <label>Message: <textarea name="message"></textarea></label>
                                        </p>
                                        <p>
                                            <button type="submit">Send</button>
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
};

export default contact;