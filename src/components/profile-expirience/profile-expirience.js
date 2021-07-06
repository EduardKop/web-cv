import React from "react";

function Expirience ({name,stack,img,link,linkName,web,webName}) {

    return (
        <div className='expirience-container'>
            <div className='expirience-container__item'>
            <img src={img} alt="exp" alt="lorem"></img>
            <div className='container__item-nameContainer'>
                <span>Name:</span> {name} 
                </div>
                <div className='container__item-stackContainer'>
                <span>Stack:</span> {stack} 
                </div>
           <div className="container__item-linkContainer">
           <span>Github:</span><a rel="shortcut icon" href={link}>{linkName}</a>
            </div>
            <div className="container__item-webContainer">
            <span>{webName}</span> <br></br><a rel="shortcut icon" href={web}>{web}</a>
            </div>
            

            </div>

        </div>
    )
}
export default Expirience;