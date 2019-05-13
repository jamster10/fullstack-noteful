import React, { Component } from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'

import PropTypes from 'prop-types';

export default class NotePageMain extends Component {

  render() {
    console.log(this.props)
    return (
      <section className='NotePageMain'>
        <Note
          id={this.props.note.id}
          name={this.props.note.name}
          modified={this.props.note.date_created}
          onDelete={() => this.props.history.push('/')}
        />
        <div className='NotePageMain__content'>
          {this.props.note.content}
          
        </div>
      </section>
    )
  }

  
  }


NotePageMain.defaultProps = {
    note: {
      content: '',
    }

}

NotePageMain.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  note: PropTypes.object,
};