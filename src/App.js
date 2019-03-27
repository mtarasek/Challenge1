import React, { Component } from 'react';

import Checkbox from './Checkbox';
import './app.css';


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            exchange: '',
            date: this.currentDate(),
            notMySize: false,
            smellFunny: false,
            toYoungForThis: false,
            uglyColor: false,
            totallyNotFair: false,
            toCheap: false,
        }

    }

    currentDate = () => {
        return new Date().toISOString().split('T')[0];
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

    updateDate = (e) => {
        console.log(e.target.value)
        this.setState({
            date: e.target.value
        });
    }

    showInConsole = (event) => {
        console.log(this.state);
        event.preventDefault();
    }


    render() {
        return (
            <div id="container">
                <form id="contact" onSubmit={this.showInConsole}>
                    <h1 id="header">DO NOT WANT</h1>
                    <h6 id="subtitle">GIFT COMPLAINT FORM</h6>
                    <div>
                        <label>Name</label><br />
                        <input className="input" value={this.state.name} onChange={this.handleNameChange} placeholder="Your name" required />
                    </div>

                    <div>
                        <label>Description of bad gift:</label><br />
                        <input className="input" value={this.state.description} onChange={this.handleDescriptionChange} placeholder="Description of bad gift" required />
                    </div>

                    <div>
                        <label>Reason for complaint</label><br />

                        <Checkbox text="Not my size" type="checkbox" checked={this.state.notMySize} onChange={this.handleCheckboxChangeNotMySize} />
                        <Checkbox text="Smells funny" type="checkbox" checked={this.state.smellFunny} onChange={this.handleCheckboxChangeSmellFunny} />
                        <Checkbox text="I'm to young for this" type="checkbox" checked={this.state.toYoungForThis} onChange={this.handleCheckboxChangeToYoungForThis} />
                        <Checkbox text="Ugly color" type="checkbox" checked={this.state.uglyColor} onChange={this.handleCheckboxChangeUglyColor} />
                        <Checkbox text="Totally not fair" type="checkbox" checked={this.state.totallyNotFair} onChange={this.handleCheckboxChangeTotallyNotFair} />
                        <Checkbox text="To cheap" type="checkbox" checked={this.state.toCheap} onChange={this.handleCheckboxChangeToCheap} />

                    </div>

                    <div>
                        <label>Please exchange my gift for:</label><br />
                        <input className="input" value={this.state.exchange} onChange={this.handleExchangeChange} required />
                    </div>
                    <div>
                        <label>Date</label><br />
                        <input className="input" type="date" value={this.state.date} onChange={this.updateDate} required />
                    </div>
                    <div>
                        <button id="button" type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}







