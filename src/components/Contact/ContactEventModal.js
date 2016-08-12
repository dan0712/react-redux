import React, {Component} from 'react'
import {connect} from 'react-redux'
import DateTimeField from 'react-bootstrap-datetimepicker'

import ContactEventStarlight from './ContactEventStarlight'
import ContactEventInnerAnimal from './ContactEventInnerAnimal'

import {helpers} from 'redux-react-firebase'

const {dataToJS, isLoaded} = helpers

export default
@connect(
  ({firebase}, {id}) => ({
    contact: dataToJS(firebase, `contacts/${id}`)
  })
)
class ContactEventMembershipModal extends Component {
  constructor(){
    super()
    this.state = {type:0}
  }

  render() {

    const {id, contact} = this.props

    const {type} = this.state

    const {firstName, lastName} = contact || {firstName: '', lastName:''}

    const handleEventTypeChange = event => {
      const newType = parseInt(this.refs.type.value)

      this.state.type = newType
      this.setState(this.state)
    }

    let event

    switch(type) {

      case 1:
        event = (<ContactEventStarlight id={id}/>)
        break

      case 2:
        event = (<ContactEventInnerAnimal id={id}/>)
        break

      default :
        event = (<div></div>)
    }


    return (
      <div className="modal fade" id="membership" tabIndex="-1" data-width="760">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <h4 className="modal-title">Add Event Membership
            for {firstName} {lastName}</h4>
        </div>
        <div className="modal-body">
          <select defaultValue={type} ref="type" onChange={handleEventTypeChange} className="form-control margin-bottom-15">
            <option value="">Choose One</option>
            <option value="1">Starlight Event</option>
            <option value="2">Inner Animal</option>
          </select>
          {event}

        </div>
        <div className="modal-footer">


          <button type="reset" data-dismiss="modal" className="btn btn-default">Close</button>
        </div>
      </div>
    )
  }
}

