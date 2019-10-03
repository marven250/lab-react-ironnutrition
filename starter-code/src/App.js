import React, { Component } from 'react';
import './App.css';
import FoodBox from "./foodBox"
import fooders from "./foods.json"

class App extends Component {
    constructor(props){
        super(props)
    

      this.state = {
        allFoods: fooders,
        visibleFoods: fooders,
        nameInput: "",
        calsInput: "",
        imgInput: "",
      }
    }    

    displayFoods = () =>{
        return this.state.visibleFoods.map((food, idx)=>{
          return (
            <FoodBox key={idx} namer={food.name} cals= {food.calories} img= {food.image} qty= {food.quantity} />
          )
        })
    }
    
    addNewFood = (e) =>{
        e.preventDefault()

        let clone = [...this.state.allFoods]
        let newFood = {
          name: this.state.nameInput,
          calories: this.state.calsInput,
          image: this.state.imgInput,
        }
        clone.unshift(newFood)

          this.setState({
            allFoods: clone,
            visibleFoods: clone,
            nameInput: "",
            calsInput: "",
            imgInput: "",
          })
    }

    handleChange = (e) => {
      console.log("updating")
        this.setState({[e.target.name]: e.target.value})
    }

    searcher = (e) =>{
        console.log(e.target.value)
     let filtered=   this.state.allFoods.filter((vFood)=>{
           return (vFood.name.toUpperCase().includes(e.target.value.toUpperCase()))
        })
        this.setState({visibleFoods: filtered})
    }


  render() {

    return (
      <div style={{ display: "flex", justifyContent: "space-between"}}>
        <div style={{ width: "30%", float: "left", textAlign: "center"}}>
        <h1 className= "title">IronNutrition</h1>
        {this.displayFoods()}
      </div>
        <div style={{ width: "25%", textAlign: "center" }}>
          <h3 className="title">SearchBar</h3>
          <input className="input" onChange= {this.searcher}></input>
        </div>

        <div id="addForm" style={{ width: "30%", float: "right", textAlign: "center" }}>
        <form onSubmit= {this.addNewFood}>
        <h2 className= "title">Add New Food</h2>
        <p>Name</p>
        <input name="nameInput" className= "input" type= "text" value= {this.state.nameInput} onChange={this.handleChange}></input>
        <p>Calories</p>
            <input name="calsInput" className="input" type="number" value={this.state.calsInput} onChange={this.handleChange}></input>
        <p>Image</p>
            <input name="imgInput" className="input" type="text" value={this.state.imgInput} onChange={this.handleChange}></input>
        <button className= "button">Submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default App;
