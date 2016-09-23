import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import _ from 'lodash'
import moment from  'moment'


//import ContactEventMembershipModal from '../components/Contact/ContactEventMembershipModal'
import ContactEventModal from '../components/Contact/ContactEventModal'
import ContactAddNotesModal from '../components/Contact/ContactAddNotesModal'
import ContactAddServiceModal from '../components/Contact/ContactAddServiceModal'
//import ContactAddInnerAnimalDetailsModal from '../components/Contact/ContactAddInnerAnimalDetailsModal'
import ContactAddFileModal from '../components/Contact/ContactAddFileModal'
import ContactDeleteNoteModal from '../components/Contact/ContactDeleteNoteModal'
import ContactDeleteEventModal from '../components/Contact/ContactDeleteEventModal'

import Loading from '../components/Loading'


import ContactAddUpdate from './ContactAddUpdate'

import {firebase, helpers} from 'redux-react-firebase'

const {dataToJS, isLoaded} = helpers


export default
@firebase([
  'contacts'
])
@connect(
  ({firebase}) => ({
    contacts: dataToJS(firebase, 'contacts')
  })
)
class Contact extends Component {
  constructor() {
    super()
    this.state = {note: null}
  }

  render() {
    const {dispatch, contacts, params, firebase} = this.props

    if (!isLoaded(contacts)) {
      return (<Loading />)
    }


    const id = ( (params && params.id) ? params.id : ( (this.props.id) ? this.props.id : null ) )
    const contact = (id && contacts[id]) ? contacts[id] : {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      birthdate: '',
      referral: '',
      events: {},
      notes: {},
      company: ''
    }

    const handleDeleteEvent = idEvent => event => {
      event.preventDefault()

      bootbox.confirm('Are you sure you want to delete this event ?', ok => {
        if (ok) {
          firebase.remove(`contacts/${id}/events/${idEvent}`)
        }
      })

    }

    const setNote = note => event => {
      this.state.note = note
      this.setState(this.state)
    }

    const eventsList = _.map(contact.events, (event, id) => {
      const date = moment(Date.parse(event.time))
      const dayDate = date.format('MMM DD YYYY')
      const timeDate = date.format('h:mm A')
      return (
        <tr key={id}>
          <td className="hidden-xs">
            {dayDate}
          </td>
          <td className="hidden-xs">
            {timeDate}
          </td>
          <td className="hidden-xs">
            {(event.text) ? event.text : (event.type == 1) ? '1 Free event' : `${event.type} events`}
          </td>
          <td className="hidden-xs" width="35"
              align="center"><a href="#" onClick={handleDeleteEvent(id)}
                                className="confirm-delete-event btn btn-sm red"
                                data-id="dynamicrowid"><i
            className="fa fa-times"></i></a>
          </td>
        </tr>
      )
    })

    const handleDeleteNote = idNote => note => {
      note.preventDefault()

      bootbox.confirm('Are you sure you want to delete this note ?', ok => {
        if (ok) {
          firebase.remove(`contacts/${id}/notes/${idNote}`)
        }
      })

    }


    const notesList = _(contact.notes)
      .map((note, id) => ({id, ...note}))
      .sortBy(['note', 'time'])
      .reverse()
      .map(note => {
        const date = moment(Date.parse(note.time))
        const timeStamp = date.format('MMM DD YYYY h:mm A')
        const {id} = note

        return (
          <tr key={id}>
            <td className="center"><i className="fa fa-edit red"></i></td>
            <td className="">{note.text}</td>

            <td className="">{timeStamp}</td>
            <td className="center">
              <div className="visible-md visible-lg hidden-sm hidden-xs">
                <a data-toggle="modal" href="#responsive" className="btn btn-transparent btn-xs" tooltip-placement="top"
                   tooltip="Edit" onClick={setNote(note)}>
                  <i className="fa fa-pencil"></i></a>
                <a href="#" onClick={handleDeleteNote(id)} className="btn btn-transparent btn-xs tooltips"
                   tooltip-placement="top" tooltip="Remove"><i className="fa fa-times fa fa-white"></i></a>
              </div>
            </td>
          </tr>
        )
      })
      .value()

      const showEdit = event => {

          $('#tab a[href="#edit"]').tab('show')
      }


    return (
      <div className="contact-profile">
        <section id="page-title" className="padding-top-15 padding-bottom-15">
          <div className="row">
            <div className="col-sm-7">
              <h1 className="mainTitle">{contact.firstName} {contact.lastName}</h1>
              <span className="mainDescription"></span>
            </div>
            <div className="col-sm-5">
              <div className="btn-group pull-right">
                <a href="#" data-toggle="dropdown" className="btn btn-primary dropdown-toggle">
                  Actions <span className="caret"></span>
                </a>

                <ul className="dropdown-menu" role="menu">
                  <li role="presentation" className="dropdown-header">
                    I want to:
                  </li>
                  <li>
                    <a data-toggle="modal" href="#membership">
                      Add an Event
                    </a>
                  </li>
                  <li>
                    <Link to={`/opportunities/add/${id}`}>
                      Add an Opportunity
                    </Link>
                  </li>
                  <li>
                    <Link to={`/tasks/add/${id}`}>
                      Add a Task
                    </Link>
                  </li>
                  <li>
                    <a data-toggle="modal" href="#responsive">
                      Add a Note
                    </a>
                  </li>
                  <li>
                    <a data-toggle="modal"
                       href="#addfile">
                      Add a File
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="row">
          <div className="col-sm-5 col-md-4">
            <div className="user-left">
              <div className="center">
                <div className="user-image margin-top-15">
                  <img src="assets/images/avatar-1-xl.jpg" alt=""/>
                </div>
                <hr />
              </div>
              <table className="table table-condensed">
                <thead>
                <tr>
                  <th colSpan="3">Contact Information</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>email:</td>
                  <td>
                    <a href={'mailto:'+contact.email}>
                      {contact.email}
                    </a></td>
                  <td><a href="#edit" data-toggle="tab" onClick={showEdit}><i className="fa fa-pencil edit-user-info"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>phone:</td>
                  <td>{contact.phone}</td>
                  <td><a href="#edit" data-toggle="tab" onClick={showEdit}><i className="fa fa-pencil edit-user-info"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>fax:</td>
                  <td>
                    {contact.fax}
                  </td>
                  <td><a href="#edit" data-toggle="tab" onClick={showEdit}><i className="fa fa-pencil edit-user-info"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>url:</td>
                  <td>
                    <a href={contact.website} target="_blank">
                      {contact.website}
                    </a></td>
                  <td><a href="#edit" data-toggle="tab" onClick={showEdit}><i className="fa fa-pencil edit-user-info"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>birthday:</td>
                  <td>
                    {contact.birthdate}
                  </td>
                  <td><a href="#edit" data-toggle="tab" onClick={showEdit}><i className="fa fa-pencil edit-user-info"></i></a>
                  </td>
                </tr>
                <tr>
                  <td>referral source:</td>
                  <td>
                    {contact.referral}
                  </td>
                  <td><a href="#edit" data-toggle="tab" onClick={showEdit}><i className="fa fa-pencil edit-user-info"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
              <table className="table">
                <thead>
                <tr>
                  <th colSpan="2">Address</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>{contact.address}<br />
                    {contact.city}, {contact.state} {contact.zip}</td>

                  <td><a href="#edit" data-toggle="tab" onClick={showEdit}><i className="fa fa-pencil edit-user-info"></i></a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-sm-7 col-md-8 margin-top-15">
            <div className="tabbable tabbable-custom tabbable-full-width">

              <ul className="nav nav-tabs" id="tab">
                <li className="active"><a href="#sessions"
                                          data-toggle="tab">Sessions</a></li>
                <li><a href="#notes" data-toggle="tab">Notes</a></li>
                <li><a href="#files" data-toggle="tab">Files</a></li>
                <li><a href="#courses" data-toggle="tab">Courses</a></li>
                <li><a href="#history" data-toggle="tab">History</a></li>
                <li id="tabEdit" aria-controls="edit"><a href="#edit" data-toggle="tab">Edit</a></li>
              </ul>

              <div id="tab" className="tab-content">

                <div className="tab-pane active" id="sessions">
                  <div className="portlet-body">
                    <table className="table table-striped table-bordered table-advance table-hover">
                      <tbody>
                      <tr>
                        <td className="hidden-xs">
                          <table className="table table-striped table-bordered table-advance table-hover">
                            <thead>
                            <tr>
                              <th className="hidden-xs"><i className="fa fa-calendar"></i> Date</th>
                              <th className="hidden-xs">Time</th>
                              <th><i className="fa fa-briefcase"></i>Session (Package)</th>
                              <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {eventsList}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="tab-pane" id="notes">
                  <div className="tab-pane active" id="tab_1_1_1">
                    <div className="scroller" data-height="290px"
                         data-always-visible="1"
                         data-rail-visible1="1">
                      <a className="btn btn-wide btn-primary" data-toggle="modal" href="#responsive"><i className="fa fa-plus"></i> Add a Note</a>
                      <table className="table table-hover" id="sample-table-1">
                        <tbody>
                        {notesList}
                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>

                <div className="tab-pane" id="files">
                  <div className="portlet-body">
                    <iframe name="files"
                            src="files_show.php?contact_id=dynamic contact id"
                            width="100%" height="400px"
                            style={{border:0}}></iframe>
                  </div>
                </div>

                <div className="tab-pane" id="courses">
                  <div className="row">
                    <div className="col-md-12">
                      <table className="table table-striped table-bordered table-advance table-hover">
                        <thead>
                        <tr>
                          <th>Course Name</th>
                          <th>Details</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                          <td>
                            <p>Inner Animal</p>
                            <p>
                              <button href="#inneranimal" data-toggle="modal" className="btn blue" type="button">
                                <span>Edit</span>
                              </button>
                            </p>
                          </td>
                          <td>
                            <p>
                              <span className="bold">Workshop Location</span><br />Virtual </p>

                            <p>
                              <span className="bold">Course Starts</span><br />
                              12/14/2015 </p>

                            <p>
                              <span className="bold">Starlight Energy</span><br />
                              12/16/2015 -
                              8/3/2016 </p>
                          </td>

                        </tr>
                        </tbody>
                      </table>
                      <table className="table table-striped table-bordered table-advance table-hover">
                        <thead>
                        <tr>
                          <th>Chakra</th>
                          <th>Animals</th>
                          <th>Scheduled Call</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>Foot</td>
                          <td>Porcupine</td>
                          <td>Monday, 8:00 PM - Dec 14, 2015</td>
                        </tr>
                        <tr>
                          <td>Root</td>
                          <td>Fox</td>
                          <td>Monday, 8:00 PM - Jan 11, 2016</td>
                        </tr>
                        <tr>
                          <td>Sacral</td>
                          <td>Swan</td>
                          <td>Monday, 8:00 PM - Feb 8, 2016</td>
                        </tr>
                        <tr>
                          <td>Solar Plexus</td>
                          <td>Crane</td>
                          <td>Monday, 8:00 PM - Mar 14, 2016</td>
                        </tr>
                        <tr>
                          <td>Heart</td>
                          <td>Owl</td>
                          <td>Monday, 8:00 PM - Apr 11, 2016</td>
                        </tr>
                        <tr>
                          <td>Throat</td>
                          <td>Moose</td>
                          <td>Monday, 8:00 PM - May 9, 2016</td>
                        </tr>
                        <tr>
                          <td>Third Eye</td>
                          <td>Spider</td>
                          <td>Monday, 8:00 PM - Jun 13, 2016</td>
                        </tr>
                        <tr>
                          <td>Crown</td>
                          <td>Snake</td>
                          <td>Monday, 8:00 PM - Jul 11, 2016</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                <div className="tab-pane" id="history">
                  <div className="tab-pane active" id="tab_1_1_1">
                    <div className="scroller" data-height="290px"
                         data-always-visible="1"
                         data-rail-visible1="1">
                      <table className="table table-hover" id="sample-table-1">
                        <tbody>

                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>

                <div className="tab-pane" id="edit">
                  <div className="row profile-account">
                    <div className="col-md-12">
                      <div className="tab-content">
                        <div id="tab_1-1" className="tab-pane active">
                          <ContactAddUpdate id={id}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <ContactEventModal id={id}/>

          <ContactAddNotesModal id={id} editNote={this.state.note}/>

          <ContactAddServiceModal />

          <ContactAddFileModal />

          <ContactDeleteNoteModal />

          <ContactDeleteEventModal />

        </div>
      </div>
    )
  }
}
