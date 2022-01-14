import React from 'react';

export function Allen() {
    return (
        <div>
            <div>
                <h2 className= "mt-4">
                    Allen Library
                </h2>
            </div>
            <div className="lib-card">
                <div>
                    <img src="img/allen library.png" alt="Sun shining on Allen library Library"/>
                </div>
                <div className="lib-card-content">
                    <div >
                        <p>Allen Library is connected to Suzzalo Library they link behind Suzzalo and provides plenty of floor space for studying.
                            Allen Library features many floors filled with books and various forms of media! Including floors with DVDs and Media Storage!
                            On the ground floor apart from privately rated study space it also boasts plenty of governmnet publications and maps!
                            With plently of elevators and ramps located throughout the building accessibilty in the library is very high!</p>
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