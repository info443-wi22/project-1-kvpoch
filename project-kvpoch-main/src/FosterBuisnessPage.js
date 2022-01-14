import React from 'react';

export function Foster() {
    return (
        <div>
            <div>
                <h2 className= "mt-4">
                    Foster Business Library
                </h2>
            </div>
            <div className="lib-card">
                <div>
                    <img src="img/Foster-Buisness-Library.jpg" alt="Feature of the skylight in the buisness library"/>
                </div>
                <div className="lib-card-content">
                    <div >
                        <p>
                            Foster Business Library is located on the first floor of Paccar Hall!
                            Featuring over 400 study seats that all have access to power and over 60 thousand buisness books
                            you will definitly not get bored in this library!
                            The library also features an astonishing 800 square foot skylight!
                        </p>
                        <p>
                            Elevators reach the ground floor of the library from any part of Paccar Hall!
                        </p>   
                        <ol>
                            <ul>Operating Hours: 9:00am-5:00pm</ul>
                            <ul>Noise Rating: Mediocre</ul>
                            <ul>Accessibility Rating: High</ul>
                        </ol>
                            <a href="/review">Add a Review!</a>
                        </div>
                    </div>
                </div>
            <div className="lib-card">
                <div className="lib-card-content">
                    <div>
                        <img src="img/OrionsPlace.jpg"
                        alt="Tables inside Suzzallo Starbucks" className="library-photos"/>
                    </div>
                    <div>
                        <p>Located above the library you will find <a
                            href="https://hfs.uw.edu/Eat/dining-hours/Orins-Place">Orion's Place</a>. Here you will find foods from breakfast items and coffee to 
                            salad bowls! With plenty of study tables and space for socializing!</p>
                    </div>
                </div>   
            </div>
        </div>
    )
}