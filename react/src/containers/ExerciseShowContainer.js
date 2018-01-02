import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory} from 'react-router';
// import ExerciseTile from '../components/ExerciseTile';
import ExerciseShowTile from '../components/ExerciseShowTile';

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
        exercise: body

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


  // render(){
  //
  //   let error = this.state.errors.map((x, i) => {
  //     return(<p className='errors' key={i}>{x} </p>)
  //   })
  //   let deleteButton = []



  render() {
    let deleteButton
    if (this.state.exercise.current_user && this.state.exercise.current_user.admin){
      deleteButton=
        <button
          className="btn btn-default"
          onClick={this.deleteExercise}>Delete This Exercise
        </button>
    }




    return (
      <div>
        {deleteButton}
        <ExerciseShowTile
          key= {this.state.exercise.id}
          id= {this.state.exercise.id}
          name= {this.state.exercise.name}
          category= {this.state.exercise.category}
          equipment= {this.state.exercise.equipment}
          description= {this.state.exercise.description}
          muscles= {this.state.exercise.muscles}
        />
        


      </div>
    )
  }
}

export default ExerciseShowContainer;
