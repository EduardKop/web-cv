import React from 'react'

export default class DetailSkills extends React.Component{ 
    render() {

    
    const {skillDetail} = this.props
        
        return (
            <div className="wrapperSkills">
                <div className="circle-container">
                <div className='circle'>
                </div>
                </div>
                <div className="detailSkillsItem">
                    {skillDetail}
                    </div> 
            
            </div>
        )
    }
    
}