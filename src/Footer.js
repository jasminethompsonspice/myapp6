import React, { useState, useEffect } from "react";
import classes from './App.module.css';
import footerLogo from "./assets/Footer-logo.svg";






function Footer() {

 
  return (
    <div>
  <div className={`${classes.wrapper} ${classes.sectionEleven}`}>
    <div className={classes.ogunMap}>
      <h2 className={classes.omoOgun}>OMO OGUN - ISEYA</h2>
    </div>
  </div>

  <div className={`${classes.wrapper} ${classes.FooterBg}`}>
      <div className={`${classes.container} ${classes.mainFooter}`}>
        {/* <div className={classes.finalDiv}> */}
        <div  className={classes.footerLogoCont}>
          <div className={classes.footerLogo}>
            <img src={footerLogo} alt="Ogun Logo" />
          </div>
          <p style={{ color: 'white' }} >
          It is peopled predominantly by the Egbas, Ijebus, Yewas, Remos and Aworis; - who belong to the main Yoruba ethnic group.  It also has sub-groups, namely, Ketu, Ikale, Ilaje, Ohori, Anago and Egun. There are also significant numbers of Nigerians from other parts of the country as well as foreign nationals resident in the State.

            Ogun State welcomes you!
          </p>
        </div>

        <div className={`${classes.footerConts} ${classes.footerContsnav}`}>
          <h5 className={classes.name}>Link</h5>
          <p>
         
          <p>Home</p>
         
             <p>News</p>
         <p>Open Government</p>
         <p>MDAs</p>
          <p>Executives</p>
         
          </p>
        </div>

        <div className={classes.footerConts}>
          <h5 className={classes.name}>MDAs</h5>
          <div>
            <p>Bureau of Public service reforms</p>
            <p>Ministry of Education, Science and Technology</p>
            <p>Ministry of Budget and Planning</p>
            <p>Ministry of Political Affairs and Administration</p>
          </div>
        </div>
        <div className={classes.footerConts}>
          <h5 className={classes.name}>Contact Us</h5>
          <div>
            <p>Government House complex, Oke-Mosan, Abeokuta, Ogun State</p>
            <p>info@ogunstate.gov.ng</p>
          </div>
        </div>


      </div>
    </div>
    <div className={classes.footerText}>
      <p className={classes.subFooter}>© OGUN STATE GOVERNMENT </p>
      <p className={classes.subFooter1}>All Rights Reserved. Terms of Use and Privacy Policy</p>
    </div>
  </div>
)
}

export default Footer;
