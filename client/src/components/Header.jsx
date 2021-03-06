import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render () {
    const {isAuthenticated, logoutUser} = this.props
    const userLinks = (
      <ul>
        <Link className='btn btn-primary' to='/profile'>Profile</Link>
        <li className='btn btn-primary' onClick={logoutUser}>Logout</li>
      </ul>
    )
    const guestLinks = (
      <div className='guestLinks'>
        <Link to='/register' className='btn btn-primary'>Sign up</Link>
        <Link to='/login' className='btn btn-primary'>Login</Link>
      </div>
    )
    return (
      <div className='header row text-center'>
        <div className='col-sm-3'>
          <Link
            to='/'
            className='btn btn-primary'>
            Home
          </Link>
          <Link
            to='/new'
            className='btn btn-primary'>
            New Ask
          </Link>
        </div>
        <div className='col-sm-6'>
          <h1 className='brand'>Communikey 🔑</h1>
        </div>
        <div className='col-sm-3'>
          {isAuthenticated ? userLinks : guestLinks}
        </div>
      </div>
    )
  }
}

export default Header
