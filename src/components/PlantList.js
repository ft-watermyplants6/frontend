import React, { Component } from 'react'
import { axiosWithAuth } from '../axiosWithAuth'
import styled from 'styled-components'
// import axios from 'axios'
import { Redirect } from 'react-router'

export default class PlantList extends Component {
    state = {
        plants: [],
        redirect: false
    }

    componentDidMount() {
        axiosWithAuth().get('/api/plants')
            .then(res => {
                console.log(res)
                this.setState({
                    plants: res.data
                })
                console.log('plants: ', this.state.plants)
            })
            .catch(err => {
                console.log(err)
            })
    }

    editPlant = () => {
        this.setState({redirect: true})
    }

    render() {
        const { redirect } = this.state
        return (
            <Plantlist>
                {
                    redirect === true ? <Redirect to='/editPlant'/> : <div></div>
                }
                <main className='plant-list'>
                    {this.state.plants.map((plant) => (
                        <div className='plant-card' key={plant.plantID}>
                            <div className='plant-details'>
                                <h2>{plant.nickname}</h2>
                                <p>Amount of Water Needed: {plant.h2oAmount}</p>
                                <p>How often I need watered: {plant.h2oInterval}</p>
                                <button onClick={this.editPlant}>Edit</button> <button>Delete</button>
                            </div>
                        </div>
                    ))}
                </main>
            </Plantlist>
        )
    }
}


const Plantlist = styled.div`
.plant-card {
  background-color: #fff;
  border: 0;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  cursor: pointer;
  position: relative;
  margin: 1rem auto;
}
`;