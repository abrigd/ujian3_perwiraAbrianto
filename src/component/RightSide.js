import React, { Component } from 'react';


class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'x' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
        // console.log(this.state);

    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (

            <div>

                {/* <select  id="exampleFormControlSelect1"> */}
                <select id="exampleFormControlSelect1" value={this.state.value} onChange={this.handleChange}>

                    <option value="radio">Radio</option>
                    <option value="checkbox">CheckBox</option>
                    <option value="textarea">TextArea</option>
                </select>

                {/* <p>isinya adalah {this.state.value} </p> */}

                {
                    (() => {
                        if (this.state.value === "radio") {
                            return (
                                <div className="form-group"><br></br>
                                    <label>Soal Radio</label><br></br>
                                    <textarea  rows="1"></textarea><br></br>
                                    <label>Jawab A</label><br></br>
                                    <textarea></textarea><br></br>
                                    <label>Jawab B</label><br></br>
                                    <textarea></textarea><br></br>
                                    <label>Jawab C</label><br></br>
                                    <textarea></textarea><br></br>
                                    <label>Jawab D</label><br></br>
                                    <textarea></textarea><br></br>
                                    <label>Kunci</label><br></br>
                                    <textarea></textarea><br></br>
                                    <label>Score</label><br></br>
                                    <textarea></textarea><br></br>
                                    
                                    <button type="button" class="btn btn-primary">Submit</button>
                                </div>
                                



                            );
                        }else  if (this.state.value === "checkbox") {
                            return (
                                <div className="form-group"><br></br>
                                    <label>Soal CheckBox</label><br></br>
                                    <textarea  rows="1"></textarea><br></br>
                                    <label>Jawab A</label><br></br>
                                    <textarea></textarea><br></br>
                                    <label>Jawab B</label><br></br>
                                    <textarea></textarea><br></br>
                                    <label>Jawab C</label><br></br>
                                    <textarea></textarea><br></br>
                                    <label>Jawab D</label><br></br>
                                    <textarea></textarea><br></br>
                                    <label>Kunci</label><br></br>
                                    <textarea></textarea><br></br>
                                    <label>Score</label><br></br>
                                    <textarea></textarea><br></br>
                                    <button type="button" class="btn btn-primary">Submit</button>
                                </div>
                                



                            );
                        } else  if (this.state.value === "textarea") {
                            return (
                                <div className="form-group"><br></br>
                                    <label>Soal Text Area</label><br></br>
                                    <textarea  rows="1"></textarea><br></br>
                                    
                                    <label>Kunci</label><br></br>
                                    <textarea></textarea><br></br>
                                    <label>Score</label><br></br>
                                    <textarea></textarea><br></br>
                                    <button type="button" class="btn btn-primary">Submit</button>
                                </div>
                                



                            );
                        }
                    })()
                }
            </div>




        );
    }
}

export default RightSide;