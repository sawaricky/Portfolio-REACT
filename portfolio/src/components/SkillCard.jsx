import React from 'react';
import './SkillCard.css'; 

  const SkillCard = ({ skill }) => (
    <div className='all-cards'>
      <div className="card">
        <div className="card-body">
        <img src={`/assets/${skill.skill_icon}`} alt={skill.skill_name} className="card-img-top img-size"  />
          {/* <img 
            src={skill.skill_icon} 
            alt={skill.skill_name} 
            className="card-img-top" 
          /> */}
          <h4 className="card-title">{skill.skill_name}</h4>
        </div>
      </div>
    </div>
);

export default SkillCard;
