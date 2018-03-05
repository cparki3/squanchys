import React, {Component} from 'react';

const NoResults = () =>{
    return(
        <div className="products">
            <div className="no-results">
                <img src={process.env.PUBLIC_URL + "images/bird_person.png"} alt="Bird Person"/>
                <h2>" It has been a difficult search for Bird Person... "</h2>
                <p>Please try another search term</p>
            </div>
        </div>
    )
};

export default NoResults;
