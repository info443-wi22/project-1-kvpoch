import React from 'react';

export function Suzzalo() {
    return (
        <div>
            <div>
                <h2 className= "mt-4">
                    Suzzalo Library
                </h2>
            </div>
            <div className="lib-card">
                <div>
                    <img src="img/Suzallo-Desks.jpg" alt="Desks at Suzzallo Library"/>
                </div>
                <div className="lib-card-content">
                    <div >
                        <p>Suzzalo Library the most famous library at the University of Washington.
                                Featuring over 350,000 square feet of study space with accessible ramps at the front of the
                                Red Square entrace.</p>
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
                        <img src="img/UW+Suzzallo+Library+Starbucks.jpg"
                        alt="Tables inside Suzzallo Starbucks" className="library-photos"/>
                    </div>
                    <div>
                        <p>Inside you will find a <a
                            href="https://hfs.uw.edu/Eat/dining-hours/Starbucks-Coffee-Suzzallo">starbucks</a>. With
                        plenty of study tables and space for socializing!</p>
                    </div>
                </div>   
            </div>
        </div>
    )
}