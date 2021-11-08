import React from 'react';
import {MyWorkType} from "../MyWork";
import style from './OneWork.module.css'
export const OneWork = (props:{myWork:MyWorkType[]}) => {
    return (
        <div className={style.areaOfWork}>
            {props.myWork.map(el =>
                <div className={style.oneWork}>
                    <div className={style.pic}>pic</div>
                    <h2 className={style.title}>{el.name}</h2>
                    <span className={style.description}>{el.description}</span>
                </div>)
            }

        </div>
    );
};