import React from 'react';
import style from './Skill.module.css'
import {SkillType} from "../Skills";

type PropsType = {
    skills: SkillType[]
}

const Skill = (props: PropsType) => {
return(
    <div className={style.areaSkills}>

   {props.skills.map(el =>
                <div className={style.skill}>
                    <div className={style.icon}>icon</div>
                    <h2 className={style.title}>{el.name}</h2>
                    <span className={style.description}>{el.description}</span>
                </div>)
         }
    </div>
)
};

export default Skill;