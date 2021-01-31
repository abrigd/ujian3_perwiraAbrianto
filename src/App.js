import './App.css';
import { data } from "./model/Model"
import React, { Component } from 'react'
import TextArea from './component/TextArea'
import RadioButton from './component/RadioButton'
import CheckBox from './component/CheckBox'
import RightSide from './component/RightSide'



class App extends Component {

  constructor(props) {
    super(props)
    
   
    
    }

  render() {
    return (
      <div className="row">
        <div className="column1">
          <form>{
            data.map((nilai, i) => {
              if (nilai.type === "essay") {
                return <TextArea soal={nilai.soal} no={i+1} key={i} />
              } else if (nilai.type === "radio") {
                return <RadioButton data={nilai} no={i+1} key={i}/>
              }
               else if (nilai.type === "checkbox") {
                return <CheckBox data = {nilai} no={i+1} key={i}/>
              }

            })
          }
          </form>
        </div>
        <div className="column2" >
         <RightSide  />
         {console.log("a")}
         <form>{
            data.map((nilai, i) => {
             
              if (this.props.value === "essay") {
                return <TextArea soal={nilai.soal} no={i+1} key={i} />
              } else if (this.props.value === "radio") {
                return <RightSide />
              }
               else if (this.props.value === "checkbox") {
                return <CheckBox data = {nilai} no={i+1} key={i}/>
              }

            })
          }
          </form>
        

        </div>
        
      </div>
    )

  }
}

export default App;
