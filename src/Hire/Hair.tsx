import React from 'react';
import style from './Hair.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
const Hair = () => {
    return (
        <div className={style.hair}>
            <div className={`${styleContainer.container} ${style.hairCont}`}>
                <h2 className={style.title}>Considering options for remote work</h2>
                <button>Hair me</button>
            </div>
        </div>
    );
};

export default Hair;