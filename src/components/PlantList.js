import React, { Component } from 'react'
import { getPlants } from '../services/PlantsService'
import styled from 'styled-components'

export default class PlantList extends Component {
    state = {

        plants: []
    }

    componentDidMount() {
        getPlants()
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

    render() {
        return (
            <Plantlist>
                <main className='plant-list'>
                    {this.state.plants.map((plant) => (
                        <div className='plant-card' key={plant.name}>
                            <div className='plant-details'>
                                <h2>{plant.name}</h2>
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