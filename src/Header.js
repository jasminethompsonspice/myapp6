import React from "react"
import classes from './App.module.css';
import backgroundimg from './assets/backgroundimg.png'
import whiteline from './assets/whiteline.png'
import Ogunlogo from './assets/Ogun Logo.png'
import arrowimg from './assets/arrow-right.png'


function Header() {
    return (
        <div className={classes.FirstHeader}>

            <div>
                <img className={classes.backgroundimg} src={backgroundimg} />
            </div>

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
                        <p className={classes.headermidbuttontext}>Ogun state MDAs</p>

                        <img className={classes.arrowimg} src={arrowimg} />
                    </button>
                </div>
            </div>

            <div className={classes.headerdowndiv}>
                <div className={classes.gatewaytextdiv}>
                    <h1 className={classes.gatewaytext}>The</h1>
                    <h1 className={classes.gatewaytextt}>Gateway State</h1>
                </div>
            </div>

            <div>
                <p className={classes.frenchtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br/>
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
            </div>

            <div>
                <button className={classes.headerdownbutton}>
                    <p className={classes.headerdownbuttontext}>Ogun state MDAs</p>
                </button>
            </div>


































        </div>


    );
}

export default Header;