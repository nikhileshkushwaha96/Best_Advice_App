import React, { Component } from 'react'
import "./Advice.css"
import axios from 'axios'


 class Advice extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           advice:''
        }
      }

    componentDidMount(){
        this.fetchData()

    }  
    componentWillUnmount(){
        this.fetchData()
    }

    fetchData=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((res)=>{

           
            const {advice}=res.data.slip
            this.setState({
                advice
            })
            // console.log(advice)
        })
        .catch((err)=>{
            console.log(err)

        })
    }  

  render() {
    
    return (
      <div className='container'>
        
        <div className='box'>
            <div className='text'>
                <h1 id='h2' >
                {this.state.advice}</h1>
                    
            </div>
            <div className='but'>
                <button className='button'  onClick={this.fetchData}>GetNewAdice!</button>

            </div>
        </div>
       
        
      </div>
    )
  }
}

export default Advice