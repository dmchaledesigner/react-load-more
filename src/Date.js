import React from 'react'

const Date = ({ date }) => {

    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div className="date">{`${day} ${month} ${year}`}</div>

    )

}

export default Date
