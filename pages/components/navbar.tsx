import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';


const navbar = () => {
    return (
        <>
            <Script src="https://kit.fontawesome.com/d6d6ec5bf7.js" crossOrigin="anonymous"></Script>

            <nav className="navbar">
                <div className="toogle">

                    <Link href="/" className='logo'>
                        <Image src="/toogle2.png" width={25} height={25} alt={''} />
                        MENU
                    </Link>

                </div>

                <div className="nav-link">

                    <ul>
                        <li className='active'>
                            <Link href="/"> YANIS <span>Harrat</span></Link>
                        </li>
                        <li>
                            <Link href="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link href="/services">SERVICES</Link>
                        </li>

                        <li>
                            <Link href="/portfolio">PORTFOLIO</Link>
                        </li>

                        <li>
                            <Link href="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <ul className='social-link'>
                        <li>
                            <Link href="https://www.facebook.com/yanis.harrat.7" target="_blank" rel="noreferrer">
                                <Image src="/insta.svg" width={40} height={40} alt={''} />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/yanix_921/" target="_blank" rel="noreferrer">
                                <Image src="/fb.svg" width={40} height={40} alt={''} />
                            </Link>
                        </li>                        <li>
                            <Link href="https://github.com/yanix2445?tab=repositories" target="_blank" rel="noreferrer">
                                <Image src="/github.png" width={40} height={40} alt={''} />
                            </Link>
                        </li>
                         <li>
                            <Link href="https://www.linkedin.com/in/yanis-harrat-09b172253/?originalSubdomain=frhttps://github.com/yanix2445?tab=repositories" target="_blank" rel="noreferrer">
                                <Image src="/linkedin.png" width={40} height={40} alt={''} />
                            </Link>
                        </li>
                    </ul>
                </div>






            </nav>








































            {/*<nav className="navbar-menu">
                <ul>

                    <li>
                        <Link href="/projects">projects</Link>
                    </li>
                    <li>
                        <Link href="/services">services</Link>
                    </li>
                    <li>
                        <Link href="/about">about</Link>
                    </li>
                    <li>
                        <Link href="/client">client</Link>
                    </li>
                    <li>
                        <Link href="/blog">blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">contact</Link>
                    </li>
                </ul>
          </nav>*/}
        </>
    );
};

export default navbar;