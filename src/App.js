import React, { Component } from 'react';

import Checkbox from './Checkbox'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            exchange: '',
            date: '',
            notMySize: false,
            smellFunny: false,
            toYoungForThis: false,
            uglyColor: false,
            totallyNotFair: false,
            toCheap: false,
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    handleExchangeChange = (e) => {
        this.setState({
            exchange: e.target.value
        });
    }

    handleCheckboxChangeNotMySize = (e) => {
        this.setState({
            notMySize: e.target.checked
        });
    }

    handleCheckboxChangeSmellFunny = (e) => {
        this.setState({
            smellFunny: e.target.checked
        });
    }

    handleCheckboxChangeToYoungForThis = (e) => {
        this.setState({
            toYoungForThis: e.target.checked
        });
    }

    handleCheckboxChangeUglyColor = (e) => {
        this.setState({
            uglyColor: e.target.checked
        });
    }
    handleCheckboxChangeTotallyNotFair = (e) => {
        this.setState({
            totallyNotFair: e.target.checked
        });
    }

    handleCheckboxChangeToCheap = (e) => {
        this.setState({
            toCheap: e.target.checked
        });
    }

    updateDate() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <form>
                    <h3>DO NOT WANT</h3>
                    <h4>GIFT COMPLAINT FORM</h4>
                    <div>
                        <label>Name</label>
                        <input value={this.state.name} onChange={this.handleNameChange} placeholder="Your name" />
                    </div>

                    <div>
                        <label>Description of bad gift:</label>
                        <input value={this.state.description} onChange={this.handleDescriptionChange} placeholder="Description of bad gift" />
                    </div>

                    <div>
                        <label>Reason for complaint</label>

                        <Checkbox text="Not my size" type="checkbox" checked={this.state.notMySize} onChange={this.handleCheckboxChangeNotMySize} />
                        <Checkbox text="Smells funny" type="checkbox" checked={this.state.smellFunny} onChange={this.handleCheckboxChangeSmellFunny} />
                        <Checkbox text="I'm to young for this" type="checkbox" checked={this.state.toYoungForThis} onChange={this.handleCheckboxChangeToYoungForThis} />
                        <Checkbox text="Ugly color" type="checkbox" checked={this.state.uglyColor} onChange={this.handleCheckboxChangeUglyColor} />
                        <Checkbox text="Totally not fair" type="checkbox" checked={this.state. totallyNotFair} onChange={this.handleCheckboxChangeTotallyNotFair} />
                        <Checkbox text="To cheap" type="checkbox" checked={this.state.toCheap} onChange={this.handleCheckboxChangeToCheap} />

                    </div>

                    <div>
                        <label>Please exchange my gift for:</label>
                        <input value={this.state.exchange} onChange={this.handleExchangeChange} />
                    </div>
                    <div>
                        <label>Date</label>
                        <input type="date" value={this.state.date} onChange={this.updateDate} />
                    </div>
                </form>
            </div>
        );
    }
}







