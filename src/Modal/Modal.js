import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button className="btn" onClick={() => this.setState({isOpen:true})}>
                    Information
                </button>

                {this.state.isOpen && (
                <div className="modal">
                    <div className="modal-body">
                        <h1>Lorem, ipsum.</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <button onClick={() => this.setState({isOpen:false})}>
                            x
                        </button>
                    </div>
                </div>
                )}
            </React.Fragment>
        )
    }
}