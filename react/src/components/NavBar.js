import React from 'react';
import { Link } from 'react-router'
import BackButton from './BackButton'

const NavBar = props => {
  return(
    <div className="row">
      <BackButton />
      <h1 className='grid-x align-center title'></h1>
      { props.children }
    </div>
  )
}

export default NavBar;
