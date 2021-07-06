import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import ProfileName from '../profile-name/profile-name'
import SkillsContainer from '../profile-skills'
import HobieTelling from '../profile-hobie'
import EducationContainer from '../profile-education'
import ContactsContainer from '../profile-contacts'
import ExpirienceContainer from '../profile-expirience'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <ProfileName />
      <div className='app-contents'>
        <Route path='/skills'component={SkillsContainer}/>
        <Route path='/expirience'component={ExpirienceContainer}/>
        <Route path='/education'component={EducationContainer}/>
        <Route path='/hobbie'component={HobieTelling}/>
        <Route path='/contacts'component={ContactsContainer}/>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
