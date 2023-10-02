import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const AboutOld = () => {
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <span className='tag-h1'>ELEVE PADRÕES</span>
                                    <h2 className="title mt--10 title-three">Qualidade, excelência, bom gosto, sofisticação.</h2>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p>Estamos prestes a elevar o padrão do aluguel de roupas de ski O maior Rent Place de qualidade está chegando, e você vai adorar cada minuto.</p>
                                </ScrollAnimation>
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <div className="read-more-btn mt--40 center-btn">
                                        <a className="btn-default btn-icon" href="https://wa.me/message/TEJUZ4GJYQJOO1" target="_blank" rel="noreferrer">Contate-nos <i className="icon"><FiArrowRight /></i></a>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="thumbnail2">
                            <img className="w-100 banner-sky" src="./images/icespice/banner/banner2.jpg" alt="About Images" />
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutOld;
