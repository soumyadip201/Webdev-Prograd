import React, { Component } from 'react'
import data from './currency.json';

export default class Bank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: [...data],
            usd: 'United States dollar (USD)'
        }
    }
    changeCurrency = (e) => {
        this.setState({
            usd: e.target.value
        })
        this.props.cname(e.target.value)
    }
    render() {
        return (
            <React.Fragment>
                <span className="label">Country</span>
                <select onChange={this.changeCurrency} className="bankSelect">
                    {this.state.currency.map((curr) => {
                        return <option value={curr.cur} key={curr.cid}>{curr.name}</option>
                    })}
                </select>
                <span className="label">Currency</span>
                <span className="usd">{this.state.usd}</span>
                <input type="text" placeholder="IFCS Code" className="bankInput" />
                <input type="text" placeholder="Account number" className="bankInput" />
            </React.Fragment>
        )
    }
}
