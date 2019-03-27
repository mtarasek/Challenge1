import React, { Component } from 'react'

export default class Reasons extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="checkbox">
                        <input type={this.props.type} checked={this.props.checked} onChange={this.props.onChange} />
                        <label>{this.props.text}</label>
                    </div>
                </section>
            </div>
        )
    }
}
