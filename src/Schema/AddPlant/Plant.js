import React from 'react'

export default function Plant({ details }) {
    if (!details) {
        return <h3>Working fetching your plant&apos;s details...</h3>
    }

    return (
        <div className='plant container'>
            <h2>{details.nickname}</h2>
            <p>species: {details.size}</p>
            <p>h2ofrequency: {details.special}</p>

        </div>
    )
}
