import React, { Component } from 'react'
import moment from 'moment'

class AskList extends Component {
  formatDate (date) {
    return moment(date).format('dddd, MMMM D, h:mm a')
  }
  render () {
    const {asks, toggleShowForm, deleteAsk} = this.props
    return (
      <div className='AskList'>
        <h1>Ask List</h1>
        <button
          className='btn btn-primary'
          onClick={toggleShowForm}>
          New Ask
        </button>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Start</th>
              <th>End</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              asks.map((ask, index) => (
                <tr key={ask.id}>
                  <td>{ask.id}</td>
                  <td>{ask.title}</td>
                  <td>{ask.description}</td>
                  <td>{this.formatDate(ask.start)}</td>
                  <td>{this.formatDate(ask.end)}</td>
                  <td>{ask.location}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => deleteAsk(ask.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default AskList
