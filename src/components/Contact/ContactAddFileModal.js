
import React, {Component} from 'react'
import {connect} from 'react-redux'


class ContactAddFileModal extends Component {

  render() {

    const {dispatch} = this.props

    return (
      <div className="modal fade" id="addfile" tabIndex="-1"  aria-hidden="true">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal"
            aria-hidden="true"></button>
          <h4 className="modal-title">Add file
            for Firstname Lastname</h4>
        </div>
        <div className="modal-footer">

          <input type="hidden" name="contact_id" value="dynamic contact id"/>
          <input type="hidden" name="type" value="file"/>

        </div>
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(ContactAddFileModal)
