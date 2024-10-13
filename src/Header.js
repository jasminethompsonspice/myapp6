import React from "react";
import classes from "./App.module.css";
import promiximg from "../src/logo-green 1 (3).png";
import frame1 from "../src/Frame 50.png";
import softline from "../src/Vector 11.png";
import manimag1 from "../src/Group 427322620.png";
import sctinimg from "../src/sctnimg.png";
import imgplse from "../src/smartakant.png";
import misvis from "../src/misionvision.png";
import phone from '../src/phone.png';
import Accordion from 'react-bootstrap/Accordion';
import tick from '../src/tick-circle.png'
import footerSend from '../src/footer-send.svg'
import priccing from '../src/pricing.png'




function Header() {
    return (
        <div className={classes.body}>
            <div className={classes.hero}>
                <div className={classes.topheader}>
                    <div>
                        <img className={classes.promiximg} src={promiximg} />
                    </div>
                    <div className={classes.promixtextdiv}>
                        <p className={classes.promixtext}>Home</p>

                        <p className={classes.promixtext}>Features</p>

                        <p className={classes.promixtext}>Pricing</p>

                        <p className={classes.promixtext}>FAQs</p>
                    </div>

                    <div className={classes.promixbuttondiv}>
                        <button className={classes.loginbutton}>
                            <p className={classes.loginbuttontext}>Log In</p>
                        </button>

                        <button className={classes.signupbutton}>
                            <p className={classes.signupbuttontext}>Sign Up</p>
                        </button>
                    </div>
                </div>

                <div>
                    <div className={classes.frame1content}>
                        <div className={classes.content1}>
                            <div className={classes.seamlesstextdiv}>
                                <h1 className={classes.seamlesstext}>Seamless Accounting Software for SMEs</h1>

                                <img className={classes.softline} src={softline} />
                            </div>

                            <div className={classes.smallseamlesstextdiv}>
                                <p className={classes.smallseamlesstext}>Automate your accounting management system today. Oursoftware solutions will help streamline account management</p>
                            </div>

                            <div className={classes.buttonandtext}>
                                <button className={classes.startedbutton}>
                                    <p className={classes.startedbuttontext}>Get started</p>
                                </button>

                                <p className={classes.howitworkstext}>See How it works</p>
                            </div>

                            <div className={classes.busandcost}>
                                <div className={classes.businesstextdiv}>
                                    <p className={classes.hundred}>10k</p>
                                    <p className={classes.businesstext}>Businesses</p>
                                </div>

                                <div className={classes.customertextdiv}>
                                    <p className={classes.hundred}>100k</p>
                                    <p className={classes.businesstext}>Customers</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.content2}>
                            <img className={classes.manimag1} src={manimag1} />
                        </div>
                    </div>
                </div>

            </div>

            <div className={classes.sectionfirst}>
                <div className={classes.allsctntxt}>
                    <p className={classes.sctontxt}>Automate <br />
                        Your Accounting
                        System And Reap
                        the Rewards</p>
                    <p className={classes.nxttxt}>Whether you are a small business, a non profit or a more medium size
                        enterprise, we’ll help you find the perfect accounting solution. Run
                        multiple companies? We can help with that too by centralizing
                        accounting for all your businesses.</p>
                    <p>Our accounting software is designed to make your business life easier.
                        It automates processes like pay-slips and tax calculations, so you don’t
                        have to worry about pay-slip errors ever again. Pay your employees the
                        right amount on time, every time with an efficient, intuitive accounting
                        solution.</p>

                    <button className={classes.brtn}>
                        Try it now
                    </button>
                </div>
                <div>
                    <img src={sctinimg} className={classes.sctnimg} />
                </div>

            </div>
            <div className={classes.sectionb} >
                <div className={classes.divlofttxt}>
                    <p className={classes.lofttxt}>Why smart accounting software makes good business sense</p>
                    <p className={classes.lofttxt2}>Whether you are a small business, a non profit or a more medium size business, we’ll help you find the perfect accounting solution. Run multiple companies?
                        We can help with that too by centralizing accounting for all your businesses.</p>
                </div>
                <div>
                    <img src={imgplse} className={classes.imgbscton} />
                </div>
            </div>
            <div className={classes.sectionc} >
                <div>
                    <p className={classes.lofttxtcopy}>Discover the benefits of our accounting solutions</p>
                </div>
                <div>
                    <img src={misvis} className={classes.misvis} />
                </div>
            </div>

            <div className={classes.wrapper}>
                <div className={classes.container}>

                    {/* <div style={{ display: 'flex' }}> */}
                    <div className={classes.howItWorks}>
                        <div>
                            <div className={classes.howItWorksCont}>
                                <h1 className={classes.howItWorksTxt}>How it works</h1>
                                <p className={classes.underhowItWorksTxt}>
                                    Automate your accounting management system today.
                                    Our software solutions will help streamline accounting management
                                </p>
                            </div>

                            <div className={classes.options}>
                                <div className={classes.optsdeg}>
                                    <div className={classes.number}>1</div>
                                    <p className={classes.si}>Sign up</p>
                                    <p className={classes.underSi}>Choose the favorite pricing and<br />
                                        sign up</p>
                                </div>

                                <div className={classes.optsdeg2}>
                                    <div className={classes.number}>2</div>
                                    <p className={classes.si2}>Pricing</p>
                                    <p className={classes.underSi2}>Choose the favorite pricing and sign up</p>
                                </div>

                            </div>

                            <div className={classes.options}>

                                <div className={classes.optsdeg3}>
                                    <div className={classes.number}>3</div>
                                    <p className={classes.si2}>Link Accounts</p>
                                    <p className={classes.underSi2}>Choose the favorite pricing and<br />sign up
                                        sign up</p>
                                </div>

                                <div className={classes.optsdeg23}>
                                    <div className={classes.number}>4</div>
                                    <p className={classes.si2}>Add Employee's<br />
                                        Info</p>
                                    <p className={classes.underSi2}>Choose the favorite pricing and<br />
                                        sign up</p>
                                </div>

                            </div>

                            <div className={classes.options}>

                                <div className={classes.optsdeg3}>
                                    <div className={classes.number}>5</div>
                                    <p className={classes.si2}>Sign up</p>
                                    <p className={classes.underSi2}>Choose the favorite pricing and<br />
                                        sign up</p>
                                </div>

                                <div className={classes.optsdeg23}>
                                    <div className={classes.number}>6</div>
                                    <p className={classes.si2}>Sign up</p>
                                    <p className={classes.underSi2}>Choose the favorite pricing and<br />
                                        sign up</p>
                                </div>

                            </div>
                        </div>
                        <div className={classes.mobile}>
                            <img src={phone} className={classes.imgs} />
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>

            <div className={`${classes.wrapper} ${classes.bgColor}`}>
                <div className={classes.container}>
                    <div className={classes.pricingSection}>
                        <div className={classes.pricingSectionCont}>
                            <h3 className={classes.pricingTxt}>Pricing</h3>
                            <p className={classes.under_pricingTxt}>Choose the pricing that works for you and align to your business</p>
                        </div>
                        <div className={classes.pricingOpts}>

                            <div className={classes.containerForPricing}>

                                {/* <div className={classes.pricingDesg} style={{ backgroundColor: '#fff' }}>
                                    <div className={classes.pricingPad} >
                                        <h4 className={classes.freePlan} style={{ color: '#343A40' }}>

                                        </h4>
                                        <p className={classes.amount} style={{ color: '#6C757D' }}>


                                            <span className={classes.amountSpan}>

                                            </span>

                                        </p>
                                        <p className={classes.useFor} style={{ color: '#6C757D' }}></p>
                                        <div className={classes.lists} >

                                            <div className={classes.subLists}>
                                                <img src={tick} className={classes.tick} />
                                                <p style={{ color: '#6C757D' }}></p>
                                            </div>

                                        </div>
                                        <button

                                            className={classes.pricingBtns}
                                            style={{
                                                backgroundColor: '#2D995F',
                                                color: 'white',
                                            }}
                                        >


                                        </button>
                                    </div>
                                </div> */}

<img src={priccing} className={classes.pricing} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.wrapper}>
                <div className={`${classes.container} ${classes.faqcont}`}>
                    <div className={classes.faqsHead}>
                        <h1 className={classes.faqsHeader}>FAQs</h1>
                        <p className={classes.happeningText}>See answers to some frequently asked questions here</p>
                    </div>
                    <div className={classes.accordionContainer}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header >Is there a free trial available?</Accordion.Header>
                                <Accordion.Body >
                                    Yes, you can try us for free for 30days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className={classes.accordionSpace} eventKey="1">
                                <Accordion.Header>Can I change my plan later?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, you can change your plan at anytime
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className={classes.accordionSpace} eventKey="2">
                                <Accordion.Header>What is your Cancellation Policy?</Accordion.Header>
                                <Accordion.Body className={classes.accordCont}>

                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>
                </div>
            </div>

            <div className={classes.footerHero}>
                <p className={classes.footerHeroText}>Discover the benefits of our<br />accounting solutions</p>
                <button className={classes.btns}>
                    Sign Up now
                </button>
            </div>
            <div className={classes.wrapper}>
                <div className={`${classes.container} ${classes.mainFooter}`}>

                    <div>
                        <p className={classes.copy}>Copyright © 2023 Promix<br />All rights reserved</p>
                    </div>

                    <div className={classes.footerConts}>
                        <h5 className={classes.name}>Product</h5>
                        <div>
                            <p>Individual</p>
                            <p>Business</p>
                            <p>Request Demo</p>
                            <p>Pricing</p>
                        </div>
                    </div>

                    <div className={classes.footerConts}>
                        <h5 className={classes.name}>Legal</h5>
                        <div>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>

                    <div className={classes.footerConts}>
                        <h5 className={classes.name}>Resources</h5>
                        <div>
                            <p>FAQs</p>
                            <p>Blog</p>
                            <p>Career</p>
                            <p>Customer Stories</p>
                        </div>
                    </div>

                    <div className={classes.footerConts}>
                        <h5 className={classes.name}>Contact Us</h5>
                        <div>
                            <p>info@brookessoftware.com</p>
                            <p>+234 816 124 1827 , +234 806 020 2011</p>
                            <div className={classes.footerInput}>
                                <input
                                    className={classes.contact}
                                    placeholder="Your email address"
                                    Type="email"
                                />
                                <img src={footerSend} alt="send" />
                            </div>
                        </div>
                    </div>

                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}
export default Header;