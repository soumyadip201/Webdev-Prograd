import React, { Component } from 'react'

export default class Personal extends Component {
    constructor() {
        super();
        this.state = {
            personal: {
                fname: '',
                lname: '',
                email: '',
                phno: ''
            },
            business: {
                bname: '',
                email: '',
                phno: '',
            },
            type: "per",
            err: {
                personal: {
                    fname: '',
                    lname: '',
                    email: '',
                    phno: ''
                },
                business: {
                    bname: '',
                    email: '',
                    phno: '',
                }
            }
        }
    }

    chooseType = (e) => {
        if (e.target.value === "per") {
            document.querySelector(".per").classList.add("selected")
            document.querySelector(".bus").classList.remove("selected")
            this.setState({
                type: "per"
            })
        } else {
            document.querySelector(".bus").classList.add("selected")
            document.querySelector(".per").classList.remove("selected")
            this.setState({
                type: "bus"
            })
        }
    }
    checkPName = (e) => {
        this.setState({
            personal: {
                fname: e.target.value
            }
        })
        let regex_name = /^[A-Za-z]{5,20}$/
        if (regex_name.test(this.state.personal.fname)) {
            this.setState({
                err: {
                    personal: {
                        fname: ''
                    }
                }
            })
        } else {
            this.setState({
                err: {
                    personal: {
                        fname: 'Name should be of minimum 6 characters and should contain only text'
                    }
                }
            })
        }
    }
    checkBName = (e) => {
        this.setState({
            business: {
                bname: e.target.value
            }
        })
        let regex_name = /^[A-Za-z]{5,20}$/
        if (regex_name.test(this.state.business.bname)) {
            this.setState({
                err: {
                    business: {
                        bname: ''
                    }
                }
            })
        } else {
            this.setState({
                err: {
                    business: {
                        bname: 'Name should be of minimum 6 characters and should contain only text'
                    }
                }
            })
        }
    }
    checkLName = (e) => {
        this.setState({
            personal: {
                lname: e.target.value
            }
        })
        let regex_name = /^[A-Za-z]{5,20}$/
        if (regex_name.test(this.state.personal.lname)) {
            this.setState({
                err: {
                    personal: {
                        lname: ''
                    }
                }
            })
        } else {
            this.setState({
                err: {
                    personal: {
                        lname: 'Name should be of minimum 6 characters and should contain only text'
                    }
                }
            })
        }
    }
    checkPemail = (e) => {
        this.setState({
            personal: {
                email: e.target.value
            }
        })
        let regex_email = /^\S+@\S+\.\S+$/
        if (regex_email.test(this.state.personal.email)) {
            this.setState({
                err: {
                    personal: {
                        email: ''
                    }
                }
            })
        } else {
            this.setState({
                err: {
                    personal: {
                        email: 'Email is Invalid'
                    }
                }
            })
        }
    }
    checkBemail = (e) => {
        this.setState({
            business: {
                email: e.target.value
            }
        })
        let regex_email = /^\S+@\S+\.\S+$/
        if (regex_email.test(this.state.business.email)) {
            this.setState({
                err: {
                    business: {
                        email: ''
                    }
                }
            })
        } else {
            this.setState({
                err: {
                    business: {
                        email: 'Email is Invalid'
                    }
                }
            })
        }
    }
    checkPnum = (e) => {
        this.setState({
            personal: {
                phno: e.target.value
            }
        })
        if (this.state.personal.phno.length === 10) {
            this.setState({
                err: {
                    personal: {
                        phno: ''
                    }
                }
            })
        } else {
            this.setState({
                err: {
                    personal: {
                        phno: 'mobile should have 10 numbers'
                    }
                }
            })
        }
    }
    checkBnum = (e) => {
        this.setState({
            business: {
                phno: e.target.value
            }
        })
        if (this.state.business.phno.length === 10) {
            this.setState({
                err: {
                    business: {
                        phno: ''
                    }
                }
            })
        } else {
            this.setState({
                err: {
                    business: {
                        phno: 'mobile should have 10 numbers'
                    }
                }
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="nav">
                    <button className="per selected" value="per" onClick={this.chooseType}>PERSONAL</button>
                    <button className="bus" value="bus" onClick={this.chooseType}>BUSINESS</button>
                </div>
                {
                    (this.state.type === "per") &&
                    <div className="personal">
                        <input type="text" placeholder="First Name" onChange={this.checkPName} value={this.state.personal.fname} />
                        <span className="err">{this.state.err.personal.fname}</span>
                        <input type="text" placeholder="Last Name" onChange={this.checkLName} value={this.state.personal.lname} />
                        <span className="err">{this.state.err.personal.lname}</span>
                        <input type="text" placeholder="Email" onChange={this.checkPemail} value={this.state.personal.email} />
                        <span className="err">{this.state.err.personal.email}</span>
                        <input type="number" placeholder="Phone Number" onChange={this.checkPnum} value={this.state.personal.phno} />
                        <span className="err">{this.state.err.personal.phno}</span>
                    </div>
                }
                {(this.state.type === "bus") &&
                    <div className="business">
                        <input type="text" placeholder="Business Name" onChange={this.checkBName} value={this.state.business.bname} />
                        <span className="err">{this.state.err.business.bname}</span>
                        <input type="text" placeholder="Email" onChange={this.checkBemail} value={this.state.business.email} />
                        <span className="err">{this.state.err.business.email}</span>
                        <input type="number" placeholder="Phone Number" onChange={this.checkBnum} value={this.state.business.phno} />
                        <span className="err">{this.state.err.business.phno}</span>
                    </div>
                }
            </React.Fragment>
        )
    }
}
