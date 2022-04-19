import React, { Component } from 'react'
import data from './currency.json';

export default class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: this.props.selCountry
        }
    }
    render() {
        return (
            <div className="address">
                <input type="text" disabled={true} className="addressInput" placeholder={data.filter((country) => {
                    return country.cur === this.state.country
                }).map((count) => {
                    return count.cid;
                })} />
                <input type="text" className="addressInput" placeholder="City" />
                <input type="text" className="addressInput" placeholder="Post Code" />
                <input type="text" className="addressInput" placeholder="Address" />
            </div>
        )
    }
}
