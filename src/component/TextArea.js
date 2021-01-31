import React, { Component } from 'react';




class TextArea extends Component {
    constructor(props){
        super(props);
        this.props = props;
        
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label>{this.props.no}. {this.props.soal}</label><p></p>
                    <textarea className="form-control" id={"soal"+this.props.no} name={"soal"+this.props.no} rows="3"></textarea>
                </div>
            </div>
        );
    }
}

export default TextArea;