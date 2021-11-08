import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import FooterCvadrat from "./kvadrat/FooterCvadrat";

const Footer = () => {
    return (
        <div className={style.hair}>
            <div className={`${styleContainer.container} ${style.hairCont}`}>
                <h2 className={style.title}>Ruslan Rasulov</h2>
                <div className={style.something}>
<FooterCvadrat/>
                    <FooterCvadrat/>
                    <FooterCvadrat/>
                    <FooterCvadrat/>

                </div>
                <span>All rights reserved, 2021</span>
            </div>
        </div>
    );
};

export default Footer;