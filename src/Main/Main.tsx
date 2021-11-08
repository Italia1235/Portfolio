import React from 'react';
import style from './Main.module.css'
import styleContainer from '../../src/Common/Styles/Container.module.css'
const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.greetings}>
                <span>Hi There</span>
                <h1>I am Ruslan Rasulov</h1>
                <p>React developer</p>
            </div>
            <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;