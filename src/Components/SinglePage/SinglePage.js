import React from 'react';
import './SinglePage.css';
import './MainSection.css';
import Group5 from './Group5.png';
import FaceIcon from './image/FaceIcon.png';
import Cards from './image/Cards.png';
import mail from './image/mail.png';
import Live from './image/Live.jpg';
const SinglePage = () => {
    return (
        <div>
            <div className="spa-section">
             <div className="left-card-photo-wrapper"><img src={Cards} alt="card img" /></div>
                <div className="right-photo-wrapper">
                    <a href=""><img src={FaceIcon} alt="right img" /></a>
                    <img src={Group5} alt="right img" />
                </div>
                <div className="container card-photo">
                    <nav className='navigation-bar d-flex justify-content-start ms-5'>
                        <div className="nav-item-box">
                            <div className="btn-group pt-4" role="group" aria-label="Basic example">
                                <button type="button" className="btn border rounded-pill border-3 animate-hover text-white px-5 py-0 me-4 fw-bold">HOROSCOPES</button>
                                <button type="button" className="btn border rounded-pill border-3 animate-hover text-white px-5 py-0 me-4 fw-bold">KNOWLEDGE</button>
                                <button type="button" className="btn border rounded-pill border-3 animate-hover text-white px-5 py-0 me-4 fw-bold">FORUM</button>
                                <a href=''  className="mail-icon-link text-decoration-none"><img src={mail} alt="" /></a>
                            </div>
                        </div>                       
                    </nav>
                    <main>
                        <div class="grid-container">
                            <div class="item1"></div>
                            <div class="item2"></div>
                            <div class="item3">
                                <div className="btngrp">
                                    <div className="btn rounded-pill border border-white px-md-5 px-sm-3 py-sm-1 py-md-3 me-2 tc-btn fw-bold fs-5 icon-bfr">How it work</div>
                                    <div className="btn rounded-pill border border-white px-md-5 px-sm-3 py-sm-1 py-md-3 tc-btn fw-bold fs-5 magic-bfr">Magic Tricks?</div>
                                </div>
                            </div>  
                            <div class="item4">
                                <div className="live-img">
                                    <img src={Live} alt="" />
                                    <div className="live-btn-con">
                                        <button className="btn btn-dark liv-btn-ab">Live</button>
                                    </div>
                                </div>
                            </div> 
                        </div>                        
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;