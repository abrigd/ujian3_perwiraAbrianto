import React, { Component } from 'react';




class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = { jawaban: [] }
    }

    eventHandler = (event) => {
        console.log(event.target.value);
        if (event.target.checked) {
            this.addDataJawaban(event.target.value);
        }else {
            this.removeDataJawaban(event.target.value);
        }

    }

    addDataJawaban = (nilai) => {
        let jawab = this.state.jawaban;
        jawab.push(nilai);
        this.setState({ jawaban: jawab })

        // console.log(this.state.jawaban);
    }

    removeDataJawaban = (nilai) => {
        let jawab = this.state.jawaban.filter((value) => {
            return value !== nilai
        })

        this.setState({ jawaban: jawab })

        // console.log(this.state.jawaban)
    }



    render() {
        return (
            <div>
                <label>{this.props.no}. {this.props.data.soal}</label>
                {this.props.data.option.map((options, i) => {


                    return <div className="form-check" key={i}>
                        <input type="checkbox" class="form-check-input" type="checkbox" value={options} id={"soal" + this.props.no} name={"soal" + this.props.no} onClick={this.eventHandler} />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            {options}
                        </label>
                    </div>
                })}

                <p>jawabannya adalah {this.state.jawaban.map((options)=>`${options},`)}</p><p></p>
            </div>



        );
    }
}


export default CheckBox;