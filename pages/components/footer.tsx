import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'semantic-ui-react';

const footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <div className="footer-col-1">
                                    <h3>Téléchargez mon CV </h3>
                                    <Button>
                                        <a href='/yanis-cv.pdf' download>Télécharger mon CV</a>
                                    </Button>
                                    <div className="app-logo">
                                        <Image className='logo-about' src="/play-store.png" width={130} height={40} alt={''} />
                                        <Image className='logo-about' src="/app-store.png" width={130} height={40} alt={''} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="footer-col-2">
                                    <ul className="social list-unstyled">
                                        <li>
                                            <Link href="https://www.facebook.com/yanis.harrat.7" >
                                                <Image src="/insta.svg" width={130} height={40} alt={''} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/yanix_921/" >
                                                <Image src="/fb.svg" width={130} height={40} alt={''} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://github.com/yanix2445?tab=repositories" >
                                                <Image src="/github.png" width={40} height={40} alt={''} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}





export default footer;