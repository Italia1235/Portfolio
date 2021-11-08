import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../src/Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";

export type SkillType = {
    name:string
    description:string
}

const skills:SkillType[] = [{name:"html",description:"sd yarn create react-app my-app --scriptfsdfsdf123123123 2131231231 23 123 12 312 312 312sdfsd"},
    {name:"react",description:"sdfsdfsdfsdfsd"},
    {name:"css",description:"sdfsdfsdfsdfsd"},

    {name:"css",description:"sdfsdfsdfsdfsd"},
]

const Skills = () => {
    return (
        <div className={style.skillBlock}>
<div className={`${styleContainer.container} `}>
    <h2 className={style.title}>Skills</h2>
    <div className={style.skills}>
        <Skill skills={skills}/>
    </div>
</div>
        </div>
    );
};

export default Skills;