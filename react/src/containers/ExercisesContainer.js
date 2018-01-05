import React, { Component } from 'react';
import ExerciseTile from '../components/ExerciseTile';
import { Link } from 'react-router';

class ExercisesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      exercises: [],
      currentPage: 1,
      exercisesPerPage: 16
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount(){
    fetch('/api/v1/exercises', {
      credentials: 'same-origin'
    })
    .then(response => {

      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ exercises: body['exercises']})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    const { exercises, currentPage, exercisesPerPage } = this.state;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const renderExercises = currentExercise.map((exercise, index) => {
      return(
        <ExerciseTile
          key={exercise.id}
          id={exercise.id}
          name={exercise.name}

        />
      )
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(exercises.length / exercisesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          className='button pager'
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });

    return(
      <div>
        <div><h1 className='grid-x align-center title'>Exercises</h1></div>
        <div className='grid-x align-center index-display '>{renderExercises}</div>
        <div className='grid-x align-center' id="page-numbers" >{renderPageNumbers}</div>
      </div>
    )
  }
}

export default ExercisesContainer;
