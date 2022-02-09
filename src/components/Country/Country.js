import React from 'react';

const Country = (props) => {
    const {name, population, region,flags} = props.details;
    const flagStyle = {height: '50px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h2>This is a {name.common}</h2>
            <h4> Population: {population}</h4>
            <p>Region: {region}</p>
            <img style = {flagStyle} src={flags.png} alt="" />
            <br/>
            <button onClick={() => handleAddCountry(props.details)}>Add Country</button>
        </div>
    );
};

export default Country;