import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }
    // handleChange=(e) =>{
    //     this.setState({value: e.target.value});
    // }
    handleChange(e){
        
        this.setState({value: e.target.value});
    }
    render() {
        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>                
            </div>
        )
    }
}
ReactDOM.render(<MarkdownEditor />,document.getElementById('root'));
