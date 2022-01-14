import React from 'react';

export function Engineering() {
    return (
        <div>
            <div>
                <h2 className= "mt-4">
                    Engineering Library
                </h2>
            </div>
            <div className="lib-card">
                <div>
                    <img src="img/Engineering Library.jpg" alt="Front Side of the Engineering Library"/>
                </div>
                <div className="lib-card-content">
                    <div >
                        <p>The Engineering Library features a huge collection of engineering databases and engineering collections
                            With over 237,297 physcial items in the library for all your engineering reserach studies. The large spaced library 
                            comes with 4 floors and a basement, meaning there is plenty of space for studying!
                        </p>
                        <p>
                            Study rooms are booked by <a href="https://www.lib.washington.edu/engineering/reserving-study-rooms">reservations</a> and 
                            rooms are allowed to be reserved by an individual for a maximum of 3 hours per day!</p>
                        <ol>
                            <ul>Operating Hours: 9:00am-5:00pm</ul>
                            <ul>Noise Rating: Mediocre</ul>
                            <ul>Accessibility Rating: High</ul>
                        </ol>
                            <a href="/review">Add a Review!</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}