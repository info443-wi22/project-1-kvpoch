import React from 'react';

export function Odegaard() {
    return (
        <div>
            <div>
                <h2 className= "mt-4">
                    Odegaard Undergraduate Library
                </h2>
            </div>
            <div className="lib-card">
                <div>
                    <img src="img/Odegaard Library.jpg" alt="Desks at Suzzallo Library"/>
                </div>
                <div className="lib-card-content">
                    <div >
                        <p><em>AS OF AUTUMN 2021 HUSKY CARD REQUIRED FOR ENTRY</em></p>
                        <p>Odegaard popular amongst the undergraduate student population. Features 3 floors of space for studying,
                            socializing, and content creating! First floor typically belongs to those in groups and people that have
                            laptops. Second floor features an area dedicated to people in need for computer access and all technology needs!
                            Thrid floor features a silent library for those that need a quieter space compared to the social atmosphere of the
                            first floor.
                        </p>
                        <p>Has as an elevator to the right after entering through the Red Square entrance doors!</p>
                        <ol>
                            <ul>Operating Hours: 8:00am-12:00am</ul>
                            <ul>Noise Rating: Varies</ul>
                            <ul>Accessibility Rating: High</ul>
                        </ol>
                            <a href="/review">Add a Review!</a>
                        </div>
                    </div>
                </div>
            <div className="lib-card">
                <div className="lib-card-content">
                    <div>
                        <img src="img/By George Cafe.jpg"
                        alt="By George Cafe Cashier Desk" className="library-photos"/>
                    </div>
                    <div>
                        <p>On the basement level of the floor you will find <a
                            href="https://hfs.uw.edu/Eat/dining-hours/By-George">By George</a>. With
                        plenty different food options, study tables and space for socializing!</p>
                    </div>
                </div>   
            </div>
        </div>
    )
}