import React from 'react';
import avatar from '../../img/avatar.png';
import Navbar from "../wrapper-menu";

function ProfileName() {
    let firsDivItem = "<div>"
    let secondDivItem = "</div>"

return (
  <>
<div className='profile-container'> 
<div className='profile-info'>
<div className="profile-info_prof"><span><span className="divItem">{firsDivItem}</span>Front-End developer<span className="secondDivItem">{secondDivItem}</span></span> </div>

    <div className="profile-info_name">Eduard Korytnyk</div>
    <p className="subtitle">

<Navbar />
</p>
  
</div>
<div className='profile-photo'>
<img src={avatar} alt={"logo"}/> </div>

</div>

</>
)
}

export default ProfileName;