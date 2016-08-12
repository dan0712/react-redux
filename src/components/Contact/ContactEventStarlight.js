import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firebase} from 'redux-react-firebase'
import DateTimeField from 'react-bootstrap-datetimepicker'


export default
@firebase()
@connect()
class ContactEventStarlight extends Component {
	constructor() {
		super()
		this.state = {type: 1}
	}

	render() {

		const {dispatch, firebase, id} = this.props

		const handleEventChange = val => event => {
			this.state.type = val
		}

		const handleSubmit = event => {
			event.preventDefault()
			const {type} = this.state
			const text = (type == 1) ? '1 Free event' : `${type} events`
			const time = this.refs.time.state.inputValue

			firebase.push(`contacts/${id}/events`, {type, time, text})
		}

		return (
			<div>
				<div className="row">
					<div className="col-md-6">
						<label className="control-label">Membership Type</label>
						<div className="form-group">
							<div className="radio clip-radio radio-primary radio-inline">
								<input type="radio" name="event" onChange={handleEventChange(1)} value="1"
								       defaultChecked='checked' id="1event"/>
								<label for="1event"> 1 Free Event</label>
								<input type="radio" name="event" value="4" onChange={handleEventChange(4)}
								       id="4events"/>
								<label for="4events"> 4 Events</label>
								<input type="radio" name="event" value="24" onChange={handleEventChange(24)}
								       id="24events"/>
								<label for="24events">24 Events</label>
							</div>
						</div>
					</div>
					<div className="col-md-6">

						<div className="form-group">
							<label className="control-label">Starting Date and Time</label>
							<DateTimeField placeholder="" ref="time" inputFormat="MM-DD-YYYY h:m A"
							               inputProps={{id: "time", name: "time" }}/>
						</div>


					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button onClick={handleSubmit} data-dismiss="modal" className="btn btn-wide btn-success margin-right-15">
							Save changes
						</button>
						<button type="reset" data-dismiss="modal" className="btn btn-o btn-wide btn-default">Close</button>
					</div>
				</div>
			</div>

		)
	}
}

