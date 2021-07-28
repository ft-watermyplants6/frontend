import axios from 'axios'
import React, { Component } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

export default class PlantList extends Component {
    state={

        plants: [],
        dogs: ''
    }

    componentDidMount(user_id) {
        axiosWithAuth().get(`/api/users/${user_id}/plants`)
             .then(res => {
                 console.log(res)
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