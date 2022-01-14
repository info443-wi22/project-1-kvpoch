import React from 'react';

export function BuiltEnvironment() {
    return (
        <div>
            <div>
                <h2 className= "mt-4">
                   Built Environment Library
                </h2>
            </div>
            <div className="lib-card">
                <div>
                    <img src="img/Built Environments Library.jpeg" alt="Help Desk in Built Environments Library"/>
                </div>
                <div className="lib-card-content">
                    <div >
                        <p>The Built Environment library is locarted in Gould Hall.
                            Inside the library includes various collections from the Arts Library in the design fields!
                            Areas of knowledge in the library include architecture, construction management, landscape architecture, real estate studies, and urban design and planning!
                            The basement of the buidling features a Digital Commons for poster for all your project needs!
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
                        <img src="img/The Buzz Cafe.jpg"
                        alt="Tables infront of the Buzz Cafe" className="library-photos"/>
                    </div>
                    <div>
                        <p>Inside you will find a <a
                            href="https://hfs.uw.edu/Eat/dining-hours/Starbucks-Coffee-Suzzallo">The Buzz Coffee Shop </a>. With
                        plenty of study tables and space for socializing!</p>
                    </div>
                </div>   
            </div>
        </div>
    )
}