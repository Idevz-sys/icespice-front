import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const AboutThree = () => {
    return (
        <div className="rwt-about-area about-style-2 rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail4">
                            {/* <img className="w-100" src="./images/about/about-1.png" alt="About Images" /> */}
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h2 className="title mt--10 title4">Esta em construção o maior Rent Place do Brasil, o Ice Spice.</h2>
                                </ScrollAnimation>

                                <div className='description-card'>
                                    <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                        <p>O seu aluguel de roupas de ski nunca mais será o mesmo! Em breve, você irá redefinir o padrão de excelência, no melhor lugar de todos: A ICE SPICE!</p>
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
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default AboutThree;
