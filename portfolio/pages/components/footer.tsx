import React from 'react';
import Image from 'next/image';

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
                                    <button>
                                        <a href='/yanis-cv.pdf' download>Télécharger mon CV</a>
                                    </button>
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
                                            <a href="https://www.facebook.com/yanis.harrat.7" target="_blank">
                                            <Image  src="/insta.svg" width={130} height={40} alt={''} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/yanix_921/" target="_blank">
                                            <Image  src="/fb.svg" width={130} height={40} alt={''} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/yanix2445?tab=repositories" target="_blank">
                                            <Image  src="/github.png" width={40} height={40} alt={''} />
                                            </a>
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