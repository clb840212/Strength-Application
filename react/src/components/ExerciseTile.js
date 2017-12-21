import React from 'react';
import { Link } from 'react-router';

const ExerciseTile = props => {
  return(
    <div className="large-3 medium-6 small-12 center-align callout exercise-tile">
      <Link to={`/exercises/${props.id}`}>

        <h5 className='index-text'>{props.name}</h5>
      </Link>
    </div>
  )
}

export default ExerciseTile;
