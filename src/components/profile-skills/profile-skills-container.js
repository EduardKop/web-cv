import React from 'react'
import Skills from './profile-skills';
import DetailSkills from './profile-skillsDetail.js';
export default function SkillsContainer () {
    return (
        <div className="skills-container">
        <Skills progress={90} skill={"JavaScript"}/>
        <Skills progress={70} skill={"React.js"}/>
        <Skills progress={40} skill={"Node.js"}/>
        <Skills progress={80} skill={"HTML, CSS, Bootstrap"}/>
        <Skills progress={60} skill={"GIT, Webpack, Gulp"}/>
<div className="detail-wrapper">
        
        <DetailSkills skillDetail={'React.js, Telegraf.js'}/>  
        <DetailSkills skillDetail={'SASS, SCSS, LESS'}/>
        <DetailSkills skillDetail={'Node.js, Ajax'}/>
        <DetailSkills skillDetail={'Photoshop, Illustrator'}/>

        </div>
        </div>
    )
}