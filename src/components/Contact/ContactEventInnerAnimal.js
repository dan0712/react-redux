import React, {Component} from 'react'
import {connect} from 'react-redux'


export default
@connect()
class ContactAddInnerAnimalDetailsModal extends Component {

	render() {

		const {dispatch} = this.props

		return (
			<div>

				<div className="col-md-12">
					<fieldset>
						<legend>Inner Animal Details</legend>
						<h5>Event Type</h5>
						<div className="radio clip-radio radio-primary radio-inline">
							<input type="radio" id="workshop_location" name="workshop_location" value="virtual"/>
							<label for="workshop_location">
								Virtual
							</label>
						</div>
						<div className="radio clip-radio radio-primary radio-inline">
							<input type="radio" id="workshop_location" name="workshop_location" value="inperson"/>
							<label for="workshop_location">
								In Person
							</label>
						</div>
						<h5>Dates and Animals</h5>

						<div className="form-group clearfix">
							<label className="control-label col-md-2">Foot</label>
							<div className="col-md-2">
								<input type="text" name="foot_animal[]" placeholder="Animal 1" className="form-control"
								       value="Porcupine"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="foot_animal[]" placeholder="Animal 2" className="form-control"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="foot_animal[]" placeholder="Animal 3" className="form-control"/>
							</div>
							<div className="col-md-4">
								<div className="input-group form_meridian_datetime">
									<input className="form-control" name="foot_scheduled_call" readonly="" value="2015-12-14 20:00:00"/>
								</div>
							</div>
						</div>
						<div className="form-group clearfix">
							<label className="control-label col-md-2">Root</label>
							<div className="col-md-2">
								<input type="text" name="root_animal[]" placeholder="Animal 1" className="form-control" value="Fox"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="root_animal[]" placeholder="Animal 2" className="form-control"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="root_animal[]" placeholder="Animal 3" className="form-control"/>
							</div>
							<div className="col-md-4">
								<div className="input-group form_meridian_datetime">
									<input className="form-control" name="root_scheduled_call" readonly="" value="2015-12-14 20:00:00"/>
								</div>
							</div>
						</div>
						<div className="form-group clearfix">
							<label className="control-label col-md-2">Sacral</label>
							<div className="col-md-2">
								<input type="text" name="sacral_animal[]" placeholder="Animal 1" className="form-control" value="Swan"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="sacral_animal[]" placeholder="Animal 2" className="form-control"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="sacral_animal[]" placeholder="Animal 3" className="form-control"/>
							</div>
							<div className="col-md-4">
								<div className="input-group form_meridian_datetime">
									<input className="form-control" name="sacral_scheduled_call" readonly="" value="2016-02-08 20:00:00"/>
								</div>
							</div>
						</div>
						<div className="form-group clearfix">
							<label className="control-label col-md-2">Solar Plexus</label>
							<div className="col-md-2">
								<input type="text" name="solar_plexus_animal[]" placeholder="Animal 1" className="form-control"
								       value="Crane"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="solar_plexus_animal[]" placeholder="Animal 2" className="form-control"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="solar_plexus_animal[]" placeholder="Animal 3" className="form-control"/>
							</div>
							<div className="col-md-4">
								<div className="input-group form_meridian_datetime">
									<input className="form-control" name="solar_plexus_scheduled_call" readonly=""
									       value="2016-03-14 20:00:00"/>
								</div>
							</div>
						</div>
						<div className="form-group clearfix">
							<label className="control-label col-md-2">Heart</label>
							<div className="col-md-2">
								<input type="text" name="heart_animal[]" placeholder="Animal 1" className="form-control" value="Owl"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="heart_animal[]" placeholder="Animal 2" className="form-control"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="heart_animal[]" placeholder="Animal 3" className="form-control"/>
							</div>
							<div className="col-md-4">
								<div className="input-group form_meridian_datetime">
									<input className="form-control" name="heart_scheduled_call" readonly="" value="2016-04-11 20:00:00"/>
								</div>
							</div>
						</div>
						<div className="form-group clearfix">
							<label className="control-label col-md-2">Throat</label>
							<div className="col-md-2">
								<input type="text" name="throat_animal[]" placeholder="Animal 1" className="form-control"
								       value="Moose"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="throat_animal[]" placeholder="Animal 2" className="form-control"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="throat_animal[]" placeholder="Animal 3" className="form-control"/>
							</div>
							<div className="col-md-4">
								<div className="input-group form_meridian_datetime">
									<input className="form-control" name="throat_scheduled_call" readonly="" value="2016-05-09 20:00:00"/>
								</div>
							</div>
						</div>
						<div className="form-group clearfix">
							<label className="control-label col-md-2">Third Eye</label>
							<div className="col-md-2">
								<input type="text" name="third_eye_animal[]" placeholder="Animal 1" className="form-control"
								       value="Spider"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="third_eye_animal[]" placeholder="Animal 2" className="form-control"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="third_eye_animal[]" placeholder="Animal 3" className="form-control"/>
							</div>
							<div className="col-md-4">
								<div className="input-group form_meridian_datetime">
									<input className="form-control" name="third_eye_scheduled_call" readonly=""
									       value="2016-06-13 20:00:00"/>
								</div>
							</div>
						</div>
						<div className="form-group clearfix">
							<label className="control-label col-md-2">Crown</label>
							<div className="col-md-2">
								<input type="text" name="crown_animal[]" placeholder="Animal 1" className="form-control" value="Snake"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="crown_animal[]" placeholder="Animal 2" className="form-control"/>
							</div>
							<div className="col-md-2">
								<input type="text" name="crown_animal[]" placeholder="Animal 3" className="form-control"/>
							</div>
							<div className="col-md-4">
								<div className="input-group form_meridian_datetime">
									<input className="form-control" name="crown_scheduled_call" readonly="" value="2016-07-11 20:00:00"/>
								</div>
							</div>
						</div>
					</fieldset>
				</div>
				<div className="row">
					<div className="col-md-12">
				<fieldset>
					<legend>Starlight Energy Included Sessions</legend>
					<div className="row">
						<div className="col-md-4">
							<h5 >Date Range</h5>
							</div>
						<div className="col-md-4">
							<h5>Weekly Sessions</h5>
						</div>
						<div className="col-md-4">

						</div></div>
					<div className="row">
						<div className="col-md-4">

							<div className="input-group input-daterange datepicker">
								<input type="text" className="form-control"/>
								<span className="input-group-addon bg-primary">to</span>
								<input type="text" className="form-control"/>
							</div>
							</div>
						<div className="col-md-4">

							<select id="course_day" name="course_day" className="form-control">
								<option value="">---Select Day---</option>
								<option value="Wednesday" selected="">Wednesday</option>
								<option value="Thursday">Thursday</option>
							</select>
							</div>
						<div className="col-md-4">
							<select id="course_time" name="course_time" className="form-control">
								<option value="">---Select Time---</option>
								<option value="9PM" selected="">9PM</option>
								<option value="10PM">10PM</option>
							</select>
						</div>
					</div>
				</fieldset>
						</div>
					</div>



			</div>
		)
	}
}