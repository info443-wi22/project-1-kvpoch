import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage} from './Homepage';
import {Footer} from './Footer';
import {Navigation} from './Navigation';
import {Filter} from './FilterPage';
import {Suzzalo} from './SuzzaloPage';
import {Arts} from './ArtsPage';
import {Allen} from './AllenPage';
import {BuiltEnvironment} from './BuiltEnvirPage';
import {EastAsia} from './EastAsiaPage';
import {Engineering} from './EngineeringPage';
import {Foster} from './FosterBuisnessPage';
import {Odegaard} from './OdegaardUnderPage';
import {Review} from './Reviews';
import { useState } from 'react';

function App() {
    const [homepageLibCards, setHomepageLibCards] = useState(null);
    fetch('data/homepage_cards.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            setHomepageLibCards(json);
        })
        .catch(function(err) {
            // alert('parsing failed');
            console.log('parsing failed', err);
        });

    return <BrowserRouter>
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage cards={homepageLibCards} />} />
                <Route path="/SuzzaloPage" element={<Suzzalo />} />
                <Route path="/ArtsPage" element={<Arts />} />
                <Route path="/AllenPage" element={<Allen />} />
                <Route path="/BuiltEnvirPage" element={<BuiltEnvironment />} />
                <Route path="/EastAsiaPage" element={<EastAsia />} />
                <Route path="/EngineeringPage" element={<Engineering />} />
                <Route path="/FosterBuisnessPage" element={<Foster />} />
                <Route path="/OdegaardUnderPage" element={<Odegaard />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/review" element={<Review />} />
            </ Routes>
            <Footer />
        </div> 
    </BrowserRouter> 
  ;
}




export default App;
