import React from 'react';

export function Arts() {
    return (
        <div>
            <div>
                <h2 className= "mt-4">
                    Arts Library
                </h2>
            </div>
            <div className="lib-card">
                <div>
                    <img src="img/Arts library.jpeg" alt="Desks at the Arts Library"/>
                </div>
                <div className="lib-card-content">
                    <div >
                        <p>The Arts library contains a wide variety of books, journals, and media from art history!
                            You are not allowed to bring in food and drinks.
                            If you're looking for a more quiet space for studying and want to option to appreciate some art
                            this might be the place for you!
                            </p>
                        <ol>
                            <ul>Operating Hours: 1:00pm-5:00pm</ul>
                            <ul>Noise Rating: Low</ul>
                            <ul>Accessibility Rating: Mediocre</ul>
                        </ol>
                            <a href="/review">Add a Review!</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}