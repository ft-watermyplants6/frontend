import axios from 'axios'
import React, { Component } from 'react'
import { getPlant } from '../actions'
import { getPlants } from '../services/PlantsService'

export default class PlantList extends Component {
    state={

        plants: [],
        dogs: ''
    }

    componentDidMount() {
        getPlants()
             .then(res => {
                 console.log('res: ', res)
                 this.setState({
                     plants: res.data.results
                 })
             })
             .catch(err => {
                 console.log(err)
             })
    }
    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/image/random')
             .then(res => {
                 console.log('dogimage res: ', res)
                 this.setState({
                     dogs:res.data.message
                 })
                 console.log(this.state.dogs)
             })
    }
    render() {
        return (
            <div>
            <main className='plant-list'>
                {this.state.plants.map((plant) => (
                    <div className='plant-card' key={plant.name}>
                        <div className='plant-details'>
                            <h2>Name: {plant.name}</h2>
                            <p>url: {plant.url}</p>
                            
                        </div>
                    </div>
                ))}
            </main>
            <img src={this.state.dogs} alt='dog pic' />
            <img src={this.state.dogs} alt='dog pic' />
            <img src={this.state.dogs} alt='dog pic' />
            <img src={this.state.dogs} alt='dog pic' />
            </div>
        )
    }
}