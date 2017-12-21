import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory} from 'react-router';
import ExerciseTile from '../components/ExerciseTile';

class ExerciseShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      exercise: {},
      deleted: false,
      errors: []
    }
    this.getData = this.getData.bind(this)
    this.deleteExercise=this.deleteExercise.bind(this)

  }


  getData(exerciseId){
    fetch(`/api/v1/exercises/${exerciseId}`, {
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
      this.setState({
        exercise: body['exercise'],

       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    this.getData(this.props.params.id)
  }

  handleDelete(id) {
    this.deleteExercise(id)
  }

  deleteExercise(id) {
    let exerciseId = this.props.params.id
    if(confirm('Are you sure you want to delete this exercise')) {
      fetch(`/api/v1/exercises/${exerciseId}`, {
        method: 'DELETE',
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .then(body => {
        if ('error' in body) {
          this.setState({ errors: body['error'] })
        } else {
          browserHistory.push('/')
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }


  render(){

    let error = this.state.errors.map((x, i) => {
      return(<p className='errors' key={i}>{x} </p>)
    })
    let deleteButton = []
    if (this.state.user) {
      if (this.state.user.role === 'admin') {
        deleteButton = [<button onClick={this.handleDelete.bind(this, program)}>Delete Exercise</button>]
      } else {
        deleteButton = []
      }
    }
    let exercise = this.state.exercise

      return(
        <ExerciseTile
          key={exercise.id}
          id={exercise.id}
          // data={exercise}
          // getData={this.getData}
          // deleteExercise={deleteExercise}
        />
      )
    }


    // return(
    //   <div className='center-align'>
    //     <h4 className='subtitle'>#Get Fit</h4>
    //     <div className=''>
    //       <div className="large-6 small-6 small-6 show-title">
    //         <h2>{exercise.name}</h2>
    //       </div>
    //
    //         <div className="large-4 medium-4 small-12 show-details cell">
    //           <p>
    //             <br />
    //             <strong>Name: </strong>{exercise.name}<br />
    //             <strong>Category: </strong>{exercise.category}<br />
    //             <strong>Equipment: </strong>{exercise.equipment}<br />
    //             <strong>Description: </strong>{exercise.description}<br />
    //             <strong>Muscles: </strong>{exercise.muscles}<br />
    //
    //
    //           </p>
    //           {deleteButton}
    //           {error}
    //         </div>
    //       </div>
    //
    //
    //
    //     </div>
    //
    // )
  // }
}

export default ExerciseShowContainer;
