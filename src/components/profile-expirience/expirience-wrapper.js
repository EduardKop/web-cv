import React from 'react'
import Expirience from './profile-expirience'
import TelegrafJsIMG from '../../img/1.png'
import project1ITmg from '../../img/2.png'
import creactiveAgencyIMG from '../../img/creactiveAgencyIMG.png'
function ExpirienceContainer () {
    return (
        <div className='expirience-props-container'>
        <div className='expirience-props-element'>
            <Expirience stack={'Telegraph.js, Telegram Bot API'}
                        img={project1ITmg}
                        link={'https://github.com/EduardKop/telegramBot-telegraf-talking-bot'}
                        linkName={'github.com/talking-bot'}
                        name={'Telegram Bot (talking bot)'}
                        /> 
                        
                </div>

                <div className='expirience-props-element'>
            <Expirience stack={'React.js, HTML/CSS, Bootstrap'}
                        img={TelegrafJsIMG}
                        link={'https://github.com/EduardKop/react-todo-list'}
                        linkName={'github.com/todo'}
                        name={'English Dictionary App'}
                        
                        /> 
                </div>
                <div className='expirience-props-element'>
            <Expirience stack={'HTML/CSS'}
                        img={creactiveAgencyIMG}
                        link={'https://github.com/EduardKop/agencyWeb'}
                        linkName={'github.com/creativeAgency'}
                        name={'Creative Agency Web'}
                        web={'https://eduardkop.github.io/agencyWeb/'}
                        webName={'githubPages:'}
                        /> 
                </div>
        </div>
        
    )
}

export default ExpirienceContainer;