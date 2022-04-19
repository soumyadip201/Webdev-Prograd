import React, { Component } from 'react'
import Questions from '../resourses/questions.json'

export default class QuizComponent extends Component {
    constructor() {
        super();
        this.state = {
            qid: 0
        }
    }
    nextQ = () => {
        this.setState({
            qid: (this.state.qid + 1) % 15
        })
    }
    prevQ = () => {
        this.setState({
            qid: (this.state.qid - 1 < 0) ? 14 : this.state.qid - 1
        })
    }
    quitBtn = () => {
        console.log("quiz has ended");
    }
    render() {
        return (
            <div className="box">
                <h1>Question</h1>
                <span className="quesNo">{this.state.qid + 1} of 15</span>
                <div className="QueData">
                    <span>{Questions[this.state.qid].question}</span>
                </div>
                <div className="options">
                    <button>{Questions[this.state.qid].optionA}</button>
                    <button>{Questions[this.state.qid].optionB}</button>
                    <button>{Questions[this.state.qid].optionC}</button>
                    <button>{Questions[this.state.qid].optionD}</button>
                </div>
                <div className="bottom">
                    <button onClick={this.prevQ}>Previous</button>
                    <button onClick={this.nextQ}>Next</button>
                    <button onClick={this.quitBtn}>Quit</button>
                </div>
            </div>
        )
    }
}
