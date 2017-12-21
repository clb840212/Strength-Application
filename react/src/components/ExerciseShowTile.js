import React from 'react';
import { Link } from 'react-router';

const ExerciseShowTile = props => {


  return(
    <div>
      <h1> {props.name}</h1>
      <p> Category: {props.category}</p>
       <p> Description: {props.description}
      </p>
    </div>
  )
}
export default ExerciseShowTile;
