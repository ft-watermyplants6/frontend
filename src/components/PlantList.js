import React, { Component } from 'react'
import { getPlants } from '../services/PlantsService'

export default class PlantList extends Component {
    state={

        plants: []
    }

    componentDidMount() {
        getPlants()
             .then(res => {
                 this.setState({
                     plants: res.data.results
                 })
             })
             .catch(err => {
                 console.log(err)
             })
    }

    render() {
        return (
            <main className='plant-list'>
                {this.state.plants.map((plant) => (
                    <div className='plant-card' key={plant.name}>
                        <div className='plant-details'>
                            <h2>{plant.name}</h2>
                        </div>
                    </div>
                ))}
            </main>
        )
    }
}