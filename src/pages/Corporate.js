import React from 'react';

import SEO from "../common/SEO";
import { FiArrowRight } from "react-icons/fi";

import Copyright from '../common/footer/Copyright';
import FooterOne from '../common/footer/FooterOne';

import AboutTwo from "../elements/about/AboutTwo";
import AboutOld from "../elements/about/AboutOld";
import AboutThree from '../elements/about/AboutThree';
import { Border } from '../components/Border/Border';

const Corporate = () => {
    return (
        <>
            <SEO />
            <main className="page-wrapper">
                <div className="logo-nova">
                    <img src='./images/icespice/logo.png' alt='Logo da empresa'/>
                </div>

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 height-950 bg_image" data-black-overlay="2" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/icespice/banner/embreveBanner.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-start">
                                    <div className='embreve'>
                                        <img src="./images/icespice/emBreve.svg" alt="About Images" />
                                    </div>
                                    <ul className="list-icon">
                                        <li style={{ color: 'white' }}>A sua próxima snow trip será inesquecível! Esteja pronto para escolher as suas roupas de ski em um closet chique e fashion.</li>
                                    </ul>
                                    <div className="button-group mt--40 mt_sm--20 center-btn">
                                        <button className="btn-default btn-icon" target="_blank" href="#">Já quer Alugar? Clique aqui <i className="icon"><FiArrowRight /></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}

                {/* About */}
                <AboutTwo />
                <Border/>
                <AboutOld/>
                <Border/>
                <AboutThree/>
                <Border/>

                <div className='video-spice'>
                    <video controls name="media">
                        <source src="./images/icespice/videos/video-spice.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <FooterOne />
                <Copyright />
            </main>
        </>
    )
}

export default Corporate
