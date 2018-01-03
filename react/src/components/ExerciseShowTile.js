import React from 'react';
import { Link } from 'react-router';

const ExerciseShowTile = props => {

// let replaceStr = (str, find) => {
//   debugger
//   for (var i = 0; i < find.length; i++) {
//     debugger
//     let newStr = str.replace(find[i], "")
//   }
//   return newStr;
// }
// let find = ["/<p>/", "/<\/p>/"]
// if (props.description) {
//
// let newString = replaceStr(props.description, find)
// }
// debugger
let description
if (props.description) {
  description = props.description.replace(/<\/p>/g, "")
    .replace(/<p>/g,"").replace(/<ol>/g,"").replace(/<\/ol>/g,"")
    .replace(/<li>/g,"").replace(/<\/li>/g,"").replace(/<ul>/g,"")
    .replace(/<\/ul>/g,"").replace(/<em>/g,"").replace(/<\/em>/g,"")
}
  return(
    <div>
      <h1> {props.name}</h1>
      <p> Category: {props.category}</p>
       <p> Description: {description}</p>


    </div>
  )
}
export default ExerciseShowTile;
