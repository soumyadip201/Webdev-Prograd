import React, { Component } from 'react'
import prostar from '../resources/prostars.json'

export default class ProStars extends Component {
    constructor() {
        super();
        this.state = {
            prostars: [...prostar].splice(0, 5)
        }
    }
    randomStars = () => {
        let rand = [...prostar];
        let newStar = []
        for (let i = 0; i < 5; i++) {
            let num = Math.floor(Math.random() * 52) + 1;
            newStar.push(rand[num]);
        }
        this.setState({
            prostars: [...newStar]
        })
    }
    sortByName = () => {
        let oldStar = [...prostar];
        oldStar.sort((a, b) => {
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
        })
        this.setState({
            prostars: [...oldStar]
        })
    }
    sortByPopularity = () => {
        let oldStar = [...prostar];
        oldStar.sort((a, b) => {
            return b.popularity - a.popularity
        })
        this.setState({
            prostars: [...oldStar]
        })
    }
    deleteStar = (pro) => {
        let stars = [...this.state.prostars]
        let tarStar = stars.filter((star) => {
            return star.id !== pro.target.value
        })
        this.setState({
            prostars: [...tarStar]
        })
    }
    render() {
        return (
            <div className="main">
                <div className="btns">
                    <button onClick={this.randomStars}>Get Random Contact</button>
                    <button onClick={this.sortByName}>Sort By Name</button>
                    <button onClick={this.sortByPopularity}>Sort By Popularity</button>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                        {
                            this.state.prostars.map((star) => {
                                return <tr key={star.id}>
                                    <td><img src={star.pictureUrl} alt="" /></td>
                                    <td>{star.name}</td>
                                    <td>{star.popularity}</td>
                                    <td><button onClick={this.deleteStar} value={star.id}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
