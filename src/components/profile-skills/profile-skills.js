import React from "react";


export default class Skills extends React.Component {
   render() {
    const {skill} = this.props
    const { progress = 0 } = this.props;

    return (
        <div className="wrapper">
<div className="skillName">
    {skill}
</div>
        
<div className="container">
  <div className='firstItem' style={{ width: progress + '%' }}> </div>
    <div className='secondItem'></div>
</div>
</div>
    )
}
}






