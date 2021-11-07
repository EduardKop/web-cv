import React from 'react'
import Contacts from './profile-contacts'

export default function ContactsContainer () {
    return(
        <div className="contacts-container" >
            <Contacts number={'tel:+380665249893'} 
                    numberName={'+380665249893'}
                    telegram={'t.me/Eduard_Kop'}
                    telegramName={'https://t.me/Eduard_Kop'}
                    link={'https://www.linkedin.com/in/eduard-korytnyk-6b3929155/'} 
                    linkName={'www.linkedin.com'}
                    email={'mailto:eduard.korytnyk@gmail.com'}
                    emailName={'eduard.korytnyk@gmail.com'}/>
        </div>
    )
}
