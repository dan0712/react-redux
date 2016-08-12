
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firebase} from 'redux-react-firebase'
import DateTimeField from 'react-bootstrap-datetimepicker'


export default
@firebase()
@connect()
class ContactEventMembershipModal extends Component {
  constructor(){
    super()
    this.state = {type:1}
  }

  render() {

    const {dispatch, firebase, id} = this.props

    const handleEventChange = val => event => {
      this.state.type = val
    }

    const handleSubmit = event => {
      event.preventDefault()
      const {type} = this.state
      const text =  (type ==1) ? '1 Free event' : `${type} events`
      const time = this.refs.time.state.inputValue

      firebase.push(`contacts/${id}/events`, {type, time, text})
    }

    return (
      <div className="modal fade" id="membership" tabIndex="-1" data-width="760">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"
            aria-hidden="true"></button>
          <h4 className="modal-title">Add Event Membership
            for Firstname Lastname</h4>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label className="control-label col-md-12">Membership Type</label>

            <div className="col-md-12">
              <p>
                <label>
                  <input type="radio"  name="event" onChange={handleEventChange(1)} value="1"
                    className="form-control"
                    defaultChecked='checked' />
                  1 Free Event</label>
                <br/>
                <label>
                  <input type="radio" name="event" value="4" onChange={handleEventChange(4)}
                    className="form-control"/>
                  4 Events</label>
                <br/>
                <label>
                  <input type="radio" name="event" value="24" onChange={handleEventChange(24)}
                    className="form-control"/>
                  24 Events</label>
                <br/>
              </p>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-12">Starting Date and Time</label>

            <div className="col-md-12">
              <div className="input-group date form_meridian_datetime">
                  <DateTimeField placeholder="" ref="time" inputFormat="MM-DD-YYYY h:m A"  inputProps={{id: "time", name: "time" }} />
                {/*   <div id="divdatetimepicker"> */}
                {/*      */}
                {/*     <input className="form-control" */}
                {/*     name="time" */}
                {/*     size="36" ref='time'/> */}
                {/* </div> */}
                {/* <span className="input-group-btn"> */}
                {/*   <button className="btn default date-reset" type="button"><i */}
                {/*       className="fa fa-times"></i></button> */}
                {/* </span> */}
                {/* <span className="input-group-btn"> */}
                {/*   <button className="btn default date-set" type="button"><i */}
                {/*       className="fa fa-calendar"></i></button> */}
                {/* </span> */}
              </div>
            </div>
          </div>

        </div>
        <div className="modal-footer">
          <input type="hidden" name="contact_id" value="dynamic contact Id"/>
          <input type="hidden" name="type" value="membership"/>

          <button type="reset" data-dismiss="modal" className="btn btn-default">Close
          </button>
          <button  onClick={handleSubmit} data-dismiss="modal" className="btn blue">Save changes</button>
        </div>
      </div>
    )
  }
}

