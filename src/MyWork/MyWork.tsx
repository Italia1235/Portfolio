import React from 'react';
import style from './MyWork.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import {OneWork} from "./OneWork/OneWork";
export type MyWorkType = {
    name:string
    description:string
}

const myWork:MyWorkType[] = [{name:"Todolist",description:"sd yarn create rect-app my-app --template typescript yarndf123123123 2131231231 23 123 12 312 312 312sdfsd"},
    {name:"Social Network",description:"sdfsdfsdfsdfsd"},

]


const MyWork = () => {
    return (
        <div className={style.myWork}>
            <div className={`${styleContainer.container} ${style.workContainer}`}>
            <h2 className={style.title}>My Work</h2>
                <div className={style.work}>
               < OneWork myWork={myWork}/>
                </div>
            </div>
        </div>
    );
};

export default MyWork;