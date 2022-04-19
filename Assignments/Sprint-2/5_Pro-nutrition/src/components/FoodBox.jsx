import React, { Component } from 'react'

export default class FoodBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Data
            fruits: [
                { name: "orange", calories: 65, img: "https://www.kindpng.com/picc/m/155-1555808_oranges-png-image-orange-fruit-transparent-png.png" },
                { name: "chocolate milk", calories: 208, img: "https://www.sugarsaltmagic.com/wp-content/uploads/2020/10/Homemade-Chcolate-Milk-6FEATURED.jpg" },
                { name: "apple", calories: 81, img: "https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png" },
                { name: "watermelon", calories: 85, img: "https://solidstarts.com/wp-content/uploads/when-can-babies-eat-watermelon.jpg" },
                { name: "banana", calories: 105, img: "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg" },
                { name: "biscuit", calories: 103, img: "https://www.biggerbolderbaking.com/wp-content/uploads/2017/02/Digestive-Biscuits-copy-1.jpg" },
                { name: "pizza", calories: 290, img: "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900" },
                { name: "grapes", calories: 114, img: "https://lh3.googleusercontent.com/OPYcKKKfd-8ygRSbb10ZvOQWbRTJqIuuwwkEyFIeyMQVpLzsOY9Zjdvc1WQWh3-zzLPaQfDGD8d64RJyzbhOTkS2g1xgRy7wC1yKs5ox7aE84LE6gpw_-SSxyWtf8E9fJmF_Zlw" },
                { name: "raspberries", calories: 61, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Raspberries_%28Rubus_idaeus%29.jpg/1200px-Raspberries_%28Rubus_idaeus%29.jpg" },
                { name: "strawberries", calories: 45, img: "https://images.immediate.co.uk/production/volatile/sites/30/2013/06/Strawberries-in-a-bowl-e53b458-scaled.jpg?quality=90&resize=768%2C574" }
            ],
            searchTxt: "", // Data to be searched
            calories_count: 0, // Total calories
            myFruits: []
        }
    }
    // method for searching the fruit
    searchFruit = (event) => {
        this.setState({
            searchTxt: event.target.value
        })
    }
    // Capitalize the first letter of the fruit
    capatalize = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
    // Add fruits to calories section
    addFruit = (event) => {
        let count = document.getElementById(event.target.value).value;
        let cal = this.state.fruits.filter((fruit) => {
            return fruit.name === event.target.value;
        })
        let fruitObj = {
            id: event.target.value,
            text: `${count} ${event.target.value} = ${(cal[0].calories) * count}`,
            btn_id: `${event.target.value}R`,
            calo: cal[0].calories * count
        }
        this.setState({
            myFruits: this.state.myFruits.concat(fruitObj),
            calories_count: this.state.calories_count + (cal[0].calories * count)
        })
        console.log(this.state.myFruits);
    }
    // Remove fruits from calories
    removeFruit = (event) => {
        document.getElementById(event.target.value).remove();
        let calorie = this.state.myFruits.filter((fruit) => {
            return `${fruit.id}R` === event.target.value
        })
        this.setState({
            calories_count: this.state.calories_count - calorie[0].calo
        })
    }

    // Main Render method
    render() {
        return (
            <div className="main-container">
                <div className="search-container">
                    <h1>Search</h1>
                    <input type="text" placeholder="Find a food" onChange={this.searchFruit} id="search" />
                </div>
                <div className="food-container">
                    <div className="left">
                        {this.state.fruits.filter((fruit) => {
                            return fruit.name.includes(this.state.searchTxt);
                        })
                            .map((fruit) => {
                                return <div key={fruit.name} className="fruit">
                                    <img src={fruit.img} alt="" />
                                    <div className="detail">
                                        <h1>{this.capatalize(fruit.name)}</h1>
                                        <h4>{fruit.calories}</h4>
                                    </div>
                                    <div className="count">
                                        <input type="number" defaultValue="1" id={fruit.name} min="0" />
                                        <button onClick={this.addFruit} value={fruit.name}>+</button>
                                    </div>
                                </div>
                            })}
                    </div>
                    <div className="right">
                        <h1>Today's Food {this.state.calories_count} Calories</h1>
                        {
                            this.state.myFruits.filter((fruit) => {
                                return fruit.text !== "";
                            })
                                .map((fruit) => {
                                    return <div key={fruit.id} className="item" id={fruit.btn_id}>
                                        <span>{fruit.text}</span>
                                        <button onClick={this.removeFruit} value={fruit.btn_id}>X</button>
                                    </div>
                                })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
