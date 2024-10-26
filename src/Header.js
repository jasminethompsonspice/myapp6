import React, { useState, useEffect } from "react";
import classes from './App.module.css';
import backgroundimg from './assets/backgroundimg.png'
import { Carousel } from 'react-bootstrap';
import whiteline from './assets/whiteline.png'
import Ogunlogo from './assets/Ogun Logo.png'
import arrowimg from './assets/arrow-right.png'
import bgimg01 from './assets/bgimg01.png'
import bgimg1 from './assets/bgimg1.png'
import bgimg2 from './assets/bgimg2.png'
import bgimg3 from './assets/bgimg3.png'
// import { popperGenerator } from '@popperjs/core/lib/popper';
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";








function Header() {

    const [active, setActive] = useState(false);


    const landingPage = [
        { id: 1, img: bgimg01, headerText: "The Gateway State", text: 'Ogun State was created on the 3rd of February, 1976.  It was carved out of the old Western State of Nigeria and named after the Ogun River which runs across it from North to South.' },
        { id: 2, img: bgimg1, headerText: "Our Culture", text: 'Some of the well known festivals are:Egungun, Agemo, Igunnuko, Ogun, Orisa-Oko, Gelede, Eyo, Oro, Ifa, Sango, Obatala, Osun and Akoogun.', },
        { id: 3, img: bgimg2, headerText: "Our Heritage", text: 'Ogun State is predominantly Yoruba, with the Yoruba language serving as the lingua franca of the state. The dominant religions in Ogun State are Islam and Christianity although a certain amount of traditional religion is still practiced. Ogun State is noted for being the almost exclusive site of Ofada rice production.', },
        { id: 4, img: bgimg3, headerText: "Our People", text: 'It is people predominantly by the Egbas, Ijebus, Yewas, Remos and Aworis; - who belong to the main Yoruba ethnic group.  It also has sub-groups, namely, Ketu, Ikale, Ilaje, Ohori, Anago and Egun. There are also significant numbers of Nigerians from other parts of the country as well as foreign nationals resident in the State.', },
    ];

    landingPage.forEach(item => {
        const words = item.headerText.split(' ');
        item.headerText = `${words[0]}<br>${words.slice(1).join(' ')}`;
    });


    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(`.${classes.sectionEight}`);
            if (section) {
                // const sectionTop = section.offsetTop;
                // const sectionHeight = section.offsetHeight;
                // const windowHeight = window.innerHeight;
                // const scrollY = window.scrollY || window.pageYOffset;
                // const isVisible = scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight;

                // if (isVisible) {
                //     setActive(true);
                //     window.removeEventListener('scroll', handleScroll);
                // }

                const sectionTop = section.offsetTop;
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY || window.pageYOffset;
                if (scrollY + windowHeight > sectionTop) {
                    setActive(true);
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        };

        //     window.addEventListener('scroll', handleScroll);
        //     handleScroll(); // Check on initial render

        //     return () => {
        //         window.removeEventListener('scroll', handleScroll);
        //     };
        // }, []);

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);





    return (
        <div className={classes.FirstHeader}>


<div className={classes.headernavitm}>
            <div className={classes.headertopdiv}>
                <div className={classes.Mailusdiv}>
                    <p className={classes.Mailandcalltext}>Mail us at: </p>
                    <p className={classes.infoandnumbertext}>info@ogunstate.gov.ng</p>
                </div>

                <div className={classes.Callusdiv}>
                    <p className={classes.Mailandcalltext}>call us at: </p>
                    <p className={classes.infoandnumbertext}>+23400000000000  +23401110000222</p>
                </div>
            </div>

            <div>
                <img className={classes.line} src={whiteline} />
            </div>

            <div className={classes.headermiddlediv}>
                <div className={classes.ogunlogoandtext}>
                    <img className={classes.Ogunlogo} src={Ogunlogo} />

                    <p className={classes.Ogunlogotext}> Ogun State <br />Government</p>
                </div>

                <div className={classes.headermidtextdiv}>
                    <p className={classes.headermidtext1}>Home</p>
                    <p className={classes.headermidtext}>Events</p>
                    <p className={classes.headermidtext}>Blog</p>
                    <p className={classes.headermidtext}>News</p>
                    <p className={classes.headermidtext}>Archives</p>
                    <p className={classes.headermidtext}>Executives</p>

                    <div className={classes.legendstext}>
                        <p className={classes.headermidtext}>Legends</p>
                        <select className={classes.selecticon}></select>
                    </div>
                </div>

                <div>
                    <button className={classes.greenbuttonheader}>
                        <div className={classes.mdashi}>
                            <p className={classes.headermidbuttontext}>Ogun state MDAs</p>
                        <img className={classes.arrowimg} src={arrowimg} />
                        </div>
                        
                    </button>
                </div>
            </div>
</div>
            <div className={classes.wrapper}>
                <Carousel interval={5000} ride="carousel" pause="hover" slide indicators={false} style={{ position: 'relative' }} controls={false} className={classes.heroslider}>
                    {landingPage.map(item => (
                        <Carousel.Item key={item.id} style={{ textAlign: 'center', position: 'relative' }}>
                            <img
                                src={item.img}
                                alt={item.text}
                                style={{ objectFit: 'cover', width: "100%", height: "100%" }}
                            />
                            <div style={{ position: 'absolute', top: "60%", left: "37%", transform: 'translate(-50%, -50%)', textAlign: "left" }}>
                                <h4 dangerouslySetInnerHTML={{ __html: item.headerText }} style={{ color: "#fff", fontSize: 96, fontWeight: 900, margin: 0 }}></h4>
                                <h2 style={{ color: "#fff", fontSize: 20, marginTop: 10 }}>{item.text}</h2>
                                <Button className={classes.heroBtns}>Ogun State MDAs</Button>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className={classes.mobileHeroCont}>
                    <img src={bgimg01} className={`${classes.herobg} ${classes.absolute}`} />
                    <div className={classes.mobileHeroContText}>
                        <h4>The Gateway State</h4>
                        <h2>Ogun State was created on the 3rd of February, 1976.  It was carved out of the old Western State of Nigeria and named after the Ogun River which runs across it from North to South.</h2>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default Header;