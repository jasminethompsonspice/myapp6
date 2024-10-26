import React, { useState, useEffect } from "react";
import classes from './App.module.css';
import boximg from './assets/boximg.png'
import bagicon from './assets/bagicon.png'
import { useNavigate } from "react-router-dom";
import backgroundimg2 from './assets/backgroundimg2.png'
import Picture1 from './assets/picture1.png'
import Picture1mble from './assets/picture1mble.png'
import Picture2 from './assets/picture2.png'
import Picture3 from './assets/picture3.png'
import Picture4 from './assets/picture4.png'
import Picture5 from './assets/picture5.png'
import Picture6 from './assets/picture6.png'
import NewsIcon from './assets/olumo.png'
import News from './assets/nws.png'
import Dapo from './assets/dapoo.png'
import spannerimg from './assets/spannerimg.png'
import { Carousel} from "react-bootstrap";
import { Button, Spinner } from "react-bootstrap";
import tickcircle from './assets/tick-circle.png'
import landimg from './assets/landimg.png'






function Services() {

    const [active, setActive] = useState(false);

    const carouselItems = [
        { id: 1, img: Picture1, text: 'OGUN STATE', },
        { id: 2, img: Picture2, text: 'OGUN STATE', },
        { id: 3, img: Picture3, text: 'OGUN STATE', },
        { id: 4, img: Picture4, text: 'OGUN STATE', },
        { id: 5, img: Picture5, text: 'OGUN STATE', },
        { id: 6, img: Picture6, text: 'OGUN STATE', },
      ];
    
     
    
    
    
    
      useEffect(() => {
        const handleScroll = () => {
          const section = document.querySelector(`.${classes.sectionEight}`);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY || window.pageYOffset;
            const isVisible = scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight;
    
            if (isVisible) {
              setActive(true);
              window.removeEventListener('scroll', handleScroll);
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial render
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <div className={classes.section1}>
            <div>
                <h2 className={classes.exploretext}>EXPLORE OUR E-SERVICESS</h2>
            </div>

            <div>
                <p className={classes.exploretext2}>Do business with Ogun State at the comfort of your homes and offices with peace of mind</p>
            </div>


            <div className={classes.boxs}>
                <div>
                    <img className={classes.backgroundimg2} src={backgroundimg2} />
                </div>


                <div className={classes.section1boxes}>
                    
                    <div className={classes.section1box1}>
                        <div>
                            <img className={classes.boxing} src={boximg} />
                        </div>

                        <div>
                            <h2 className={classes.box1bigtext}>Pay<br />Your Tax</h2>
                        </div>

                        <div>
                            <p className={classes.box1smalltext}>Pay your Tax</p>
                            <p className={classes.box1smalltext}>Pay your Tax</p>
                            <p className={classes.box1smalltext}>Pay your Tax</p>

                        </div>
                    </div>


                    <div className={classes.section2boxes}>
                        <div className={classes.section2box2}>
                            <div>
                                <img className={classes.bagicon} src={bagicon} />
                            </div>

                            <div>
                                <h2 className={classes.box2bigtext}>Ease of<br />doing Business</h2>
                            </div>

                            <div>
                                <div className={classes.boxsmalltextdiv}>
                                    <img src={tickcircle} />
                                    <p className={classes.box2smalltext}>Ease of doing business</p>
                                </div>

                                <div className={classes.boxsmalltextdiv}>
                                    <img src={tickcircle} />
                                    <p className={classes.box2smalltext}>Ease of doing business</p>
                                </div>

                                <div className={classes.boxsmalltextdiv}>
                                    <img src={tickcircle} />
                                    <p className={classes.box2smalltext}>Ease of doing business</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={classes.section3boxes}>
                        <div className={classes.section3box3}>
                            <div>
                                <img className={classes.spannerimg} src={spannerimg} />
                            </div>

                            <div>
                                <h2 className={classes.box3bigtext}>Register<br />as a contractor</h2>
                            </div>

                            <div>
                                <div className={classes.boxsmalltextdiv}>
                                    <img src={tickcircle} />
                                    <p className={classes.box3smalltext}>Register as a contractor</p>
                                </div>

                                <div className={classes.boxsmalltextdiv}>
                                    <img src={tickcircle} />
                                    <p className={classes.box3smalltext}>Register as a contractor</p>
                                </div>

                                <div className={classes.boxsmalltextdiv}>
                                    <img src={tickcircle} />
                                    <p className={classes.box3smalltext}>Register as a contractor</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={classes.section4boxes}>
                        <div className={classes.section4box4}>
                            <div>
                                <img className={classes.landimg} src={landimg} />
                            </div>

                            <div>
                                <h2 className={classes.box4bigtext}>Land<br />Administration</h2>
                            </div>

                            <div>
                                <div className={classes.boxsmalltextdiv}>
                                    <img src={tickcircle} />
                                    <p className={classes.box4smalltext}>land Administration</p>
                                </div>

                                <div className={classes.boxsmalltextdiv}>
                                    <img src={tickcircle} />
                                    <p className={classes.box4smalltext}>land Administration</p>
                                </div>

                                <div className={classes.boxsmalltextdiv}>
                                    <img src={tickcircle} />
                                    <p className={classes.box4smalltext}>land Administration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.wrapper} ${classes.sectionThree}`}>
          <div className={classes.container}>

          </div>
        </div>


        <div className={`${classes.wrapper} ${classes.sectionFour}`}>
          <div className={classes.container}>
          </div>
        </div>





        <div className={`${classes.wrapper} ${classes.bgcol}`}>
          <div className={classes.container}>
            <div className={classes.automateCont}>
             
              <div className={classes.cont}>
                <div className={classes.thickgreen}></div>
                <h1 className={classes.firstText}>
                  GOVERNOR<br /> DAPO ABIODUN
                </h1>
                <p className={classes.secoundText}>
                  Prince Adedapo Oluseun Abiodun, <small>MFR,</small> Governor of Ogun State, Nigeria, was born on Sunday, 29th May, 1960 into the family of Dr. Emmanuel and Mrs. Victoria Abiodun of Iperu-Remo, in Ikenne Local Government of Ogun State.  Both parents were teachers.<br /><br />

                  He had his primary and secondary education in Nigeria and a tertiary education that started at the prestigious University of Ife (now Obafemi Awolowo University), Ile-Ife, Osun State, and later continued at the Kennesaw State University in Atlanta, Georgia, United States, where he graduated with a BBA in Accounting in 1986.
                  <br /><br />
                  Dapo began his career with Glock Inc. USA, where he worked as Cost Accountant between 1989-1991.  Thereafter, he returned to Nigeria and immediately embarked on entrepreneurship voyage. He was Chairman of a number of successful businesses, which include Crestar Hydrocarbons Limited, OMS-Heyden Exploration and Production Limited, Heyden Petroleum Limited, Alarmnet and Innovative Ventures Limited, and First Power Limited.
                </p>
    

              </div>

             
              <div className={classes.automateImg}>
                <img src={Dapo} alt="img" className={classes.imgs} />
               
              </div>
            </div>
          </div>
        </div>

       


        <div className={`${classes.wrapper} ${classes.sectionSeven}`}>
          <div className={classes.container}>
            <h5 className={classes.investBanner}>INVEST</h5>
            <h5 className={classes.investBanner1}>IN OGUN STATE</h5>
            <div className={classes.sectionText}>

              <Button className={`${classes.heroBtns} ${classes.sectionButton}`}>Invest in Ogun State</Button>
            </div>
          </div>
        </div>

        <div className={`${classes.wrapper} ${classes.sectionEight} ${active ? classes.active : ''}`}>
          <div className={`${classes.container} ${classes.sectionEightFlex}`}>
            <div className={classes.div}>
              <h6>OGUN STATE</h6>
              <h2>EMERGENCY NUMBERS</h2>
            </div>
            <div className={classes.div}>
              <h6>FIRE SERVICE</h6>
              <small style={{color: "#6C757D"}}>ONIKOKO</small>
              <p style={{color: "#6C757D"}}>08035692904</p>
              <small style={{color: "#6C757D"}}>IJEMO STATION</small>
              <p style={{color: "#6C757D"}}>08035596945</p>
              <small style={{color: "#6C757D"}}>OTA STATION</small>
              <p style={{color: "#6C757D"}}>08032262208</p>
              <small style={{color: "#6C757D"}}>SAGAMU STATION</small>
              <p style={{color: "#6C757D"}}>08065226846</p>
            </div>
            <div className={classes.div}>
              <small style={{color: "#6C757D"}}>PPRO</small>
              <p style={{color: "#6C757D"}}>09159578888</p>
              <small style={{color: "#6C757D"}}>CONTROL ROOM</small>
              <p style={{color: "#6C757D"}}>09062837609</p>
              {/* <small>OTA STATION</small> */}
              <p style={{color: "#6C757D"}}>09120141706</p>
              {/* <small>SAGAMU STATION</small> */}
              <p style={{color: "#6C757D"}}>09151027369</p>
              <p style={{color: "#6C757D"}}>07084972994</p>
            </div>
          </div>
        </div>

        <div className={classes.viewgallery}>
          <Carousel slide indicators={false}>
            {carouselItems.map(item => (
              <Carousel.Item key={item.id} style={{ textAlign: 'center' }}>
                <img
                  className="d-block w-100"
                  src={item.img}
                  alt={item.text}
                  style={{ objectFit: 'cover' }}
                />
                <div className={classes.sectionNineCont} style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <h4>{item.text}</h4>
                  <h2> Events and <br />Projects In Pictures</h2>
                  <Button variant="light" className={classes.heroBtns}>View Gallery</Button>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

        </div>

        <div className={classes.viewgallerymble}>
          <div className={classes.viewgallerymbleImgBox}>
            <img src={Picture1mble} className={classes.picturemble1} />
          </div>

          <div className={classes.sectionNineCont2} style={{}}>
            {/* <h4>OGUN STATE</h4> */}
            {/* <h2> Events and <br />Projects In Pictures</h2> */}
            <Button variant="light" className={classes.heroBtnsmble}>View Gallery</Button>
          </div>
        </div>


        <div className={classes.newsSection}>
          <h3>NEWS</h3>
          <div className={classes.newsGroup}>
            <div className={classes.newsContainer}>
              <img
                className="d-block w-100"
                src={NewsIcon}
                alt="News"
                style={{ objectFit: 'cover', height: 420, borderRadius: 8, padding: 10 }}
              />
              
              <p>Catch up with news and events happening in and around Ogun State. </p>
            </div>

            <div className={classes.newsData1}>
              

<img
                className={classes.nws}
                src={News}
                alt="News"

              />


            </div>
          </div>



          <Button className={classes.readmore}>Read more</Button>
        </div>

        
            </div>





        </div>






    );
}

export default Services;