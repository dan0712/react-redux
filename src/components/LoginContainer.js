import React, {Component} from 'react'

export default class LoginContainer extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
