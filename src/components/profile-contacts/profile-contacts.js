import React from 'react';

export default function Contacts({number,numberName,telegram,telegramName,email,emailName,link,linkName}) {
return (
    <div className="contacts">
        <div className='contacts-item first'>
       <span>Number:</span> <a href={number}>{numberName}</a>
        </div>
        <div className='contacts-item'>
        <span>Telegram:</span> <a rel="shortcut icon" href={telegramName}>{telegram}</a>
        </div>
        <div className='contacts-item'>
        <span>Web Suite:</span> <a rel="shortcut icon" href={link}>{linkName}</a>
        </div>
        <div className='contacts-item'>
        <span>Number:</span><a href={email}>{emailName}</a>
        </div>
    </div>

)

}


