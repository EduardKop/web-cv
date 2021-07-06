import React from 'react'

function EducationInfo ({educationFacult,educationDate,educationName}) {
    return (
        <div className='education-container'>
            <div className='education-content'> 
            <div className='education-content__name'> 

            <h1>{educationFacult}</h1> <h1 className="education-content__name-Date">{educationDate}</h1>
            </div>
            <div className='education-content__desription'> 

            <h5>{educationName}</h5> 
            </div>
            </div>
            </div>
    )
}

export default EducationInfo;


// import React from 'react'

// export default class EducationInfo extends React.Component{ 
//     render() {

    
//     const {educationFacult,educationDate,educationName} = this.props
        
//         return (
//             <div className='education-container'>
            
//     <div className='education-content'> 
//         <div className='education-content__name'> 
            
//             <h1>dsfsdf{educationFacult}</h1> <h1>{educationDate}</h1>
//                 </div>
//             <div className='education-content__desription'> 
            
//             <h5>{educationName}</h5> 
//             </div>
//             </div>
//     </div>
            
//         )
//     }
    
// }