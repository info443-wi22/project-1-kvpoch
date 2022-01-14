import React from 'react';

export function EastAsia() {
    return (
        <div>
            <div>
                <h2 className= "mt-4">
                    Tateuchi East Asia Library
                </h2>
            </div>
            <div className="lib-card">
                <div>
                    <img src="img/East Asia Library.jpg" alt="Center view of inside East Asia Library"/>
                </div>
                <div className="lib-card-content">
                    <div >
                        <p>The Tateuchi East Asia Library is located in Gowen Hall. Recently named Tateuchi East Asia Library after
                            the library receieved a 6 million dollar endowment from the Atsuhiko and Ina Goodwin Tateuchi Foundation!
                        </p>
                        <p>
                        Includes a bunch of research guides on the countries of East Asia! Accessibility is also high with ramps
                        leading to Gowen Hall and includes an elevator that brings to the front entrance of the library!
                        The library includes plenty of space for studying and contains plenty of computers and printers/scanners
                        for reserach and references.
                        </p>
                        <ol>
                            <ul>Operating Hours: ea9:00am-5:00pm</ul>
                            <ul>Noise Rating: Low</ul>
                            <ul>Accessibility Rating: High</ul>
                        </ol>
                            <a href="/review">Add a Review!</a>
                        </div>
                    </div>
                </div>
        </div>
    )
}