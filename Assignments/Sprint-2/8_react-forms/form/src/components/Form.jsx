import React, { Component } from 'react'
import Address from './Address';
import Bank from './Bank';
import Personal from './Personal'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            stage: 1,
            country: ""
        }
    }
    countrySelected = (bankCountry) => {
        this.setState({
            country: bankCountry
        })
    }
    selectStage = (e) => {
        let newStage = (e.target.value === "pre") ? this.state.stage - 1 : this.state.stage + 1
        this.setState({
            stage: newStage
        })
        let stageSel = document.querySelectorAll(".num");
        switch (newStage) {
            case 1:
                stageSel[2].classList.remove("sel")
                stageSel[1].classList.remove("sel")
                stageSel[0].classList.add("sel")
                break;
            case 2:
                stageSel[2].classList.remove("sel")
                stageSel[1].classList.add("sel")
                stageSel[0].classList.add("sel")
                break;
            case 3:
                stageSel[2].classList.add("sel")
                stageSel[1].classList.add("sel")
                stageSel[0].classList.add("sel")
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="progress">
                    <div className="prog">
                        <div className="num sel">
                            {(this.state.stage > 1) && "✓"}
                            {(this.state.stage === 1) && "1"}
                        </div>
                        <p>Benificiary</p>
                    </div>
                    <div className="prog">
                        <div className="num">
                            {(this.state.stage > 2) && "✓"}
                            {(this.state.stage <= 2) && "2"}
                        </div>
                        <p>Bank Details</p>
                    </div>
                    <div className="prog">
                        <div className="num">3</div>
                        <p>Address</p>
                    </div>
                </div>
                {(this.state.stage === 1) && <Personal />}
                {(this.state.stage === 2) && <Bank cname={this.countrySelected} />}
                {(this.state.stage === 3) && <Address selCountry={this.state.country} />}
                <div className="btns">
                    {(this.state.stage > 1) &&
                        <button className="prev" onClick={this.selectStage} value="pre">Previous</button>
                    }
                    <button className="next" onClick={this.selectStage} value="nxt">
                        {(this.state.stage === 3) && "Submit"}
                        {(this.state.stage < 3) && "Next"}
                    </button>
                </div>
            </div>
        )
    }
}
