import React from "react"
import classes from './App.module.css';
import boximg from './assets/boximg.png'
import bagicon from './assets/bagicon.png'
import backgroundimg2 from './assets/backgroundimg2.png'
import spannerimg from './assets/spannerimg.png'
import tickcircle from './assets/tick-circle.png'
import landimg from './assets/landimg.png'

function Services() {
    return (
        <div className={classes.section1}>
            <div>
                <h2 className={classes.exploretext}>EXPLORE OUR E-SERVICESS</h2>
            </div>

            <div>
                <p className={classes.exploretext2}>Do business with Ogun State at the comfort of your homes and offices with peace of mind</p>
            </div>

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






    );
}

export default Services;