import React from 'react'
import EducationInfo from './profile-education'

export default function EducationContainer () {
    return (
        <div className="education-container">
            <div className="education-container__item first">
        <EducationInfo  educationFacult={"Main Academy (course)"} 
                        educationDate={"Sep 2018 — Jun 2018"}
                        educationName={"Java-Script development"}/>
            </div>
            <div className="education-container__item">
        <EducationInfo  educationFacult={"Computer engineering"} 
                        educationDate={"Sep 2014 — Jun 2018"}
                        educationName={"Ternopil National Economic University"}/>
            </div>
            <div className="education-container__item">
        <EducationInfo  educationFacult={"Software development"} 
                        educationDate={"Sep 2010 — Jun 2014"}
                        educationName={"Kamianets-Podilskyi Industrial College"}/>
            </div>
        </div>
        
    )
}

