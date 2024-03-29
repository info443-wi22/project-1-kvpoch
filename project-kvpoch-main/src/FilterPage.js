import React, {useState} from 'react';
import { useEffect } from 'react';



export function Filter() {
  const [filterResult, setFilterResult] = useState(
    new Array(0).fill("")
  );
  const [filterCheckedArray, setFilterCheckedArray] = useState(
    new Array(5).fill(false)
  );

  const [filterLabels, setFilterLabels] = useState(null);

  const [libFeatures, setLibFeatures] = useState(null);

  useEffect(() => {
    fetch('data/filter.json')
      .then(function(response) {
          return response.json();
      })
      .then(function(json) {
          setFilterLabels(json);
      })
      .catch(function(err) {
          console.log('parsing failed', err);
      });
  }, []);

  useEffect(() => {
    fetch('data/lib_features.json')
      .then(function(response) {
          return response.json();
      })
      .then(function(json) {
        setLibFeatures(json);
      })
      .catch(function(err) {
          console.log('parsing failed', err);
      });
  }, []);

  useEffect(() => {
    handleFilterBox(filterCheckedArray, setFilterResult, libFeatures);
  }, [filterCheckedArray, libFeatures]);

    return(
      <section className="flexFilter">
        <section className="flexFilterBox">
          <FilterCardBox result={filterResult} />
        </section>
        <FilterBox labels={filterLabels} checkedState={filterCheckedArray} whatToDoWhenChecked={setFilterCheckedArray}/>
      </section>
    )
}

// A helper function to handle clicks on the input boxes
function handleOnChange(checkedState, arrayId, func) {
  let newCheckedState = checkedState.map((i, id) => {
    if(arrayId === id) {
      return !i;
    } else {
      return i;
    }
  });
  func(newCheckedState);
}

function handleFilterBox(currCheckedState, setCurrFilterResult, libFeatures) {
    let newFilterResult = [""];
    if (libFeatures != null) {
      newFilterResult = libFeatures.map((lib, libId) => {
        let libName = lib.name;
        
        let libFeat = lib.feature[0];
        let libKeys = Object.keys(libFeat);
        let filterFlag = false;
        libKeys.map((name, ftId) => {
          
          if (currCheckedState[ftId] === true && libFeat[name] === true) {
            filterFlag = true;
            return (libName); 
          }
          return "";
        });
        
        if (filterFlag) {
          return libName;
        } else {
          return "";
        }
      });
    } 
    let finalResult = newFilterResult.filter((item) => {
      return item !== "";
    });
    setCurrFilterResult(finalResult);
}

// This component is to show the filtered library card
function FilterCardBox(props) {
  let filterResult = props.result;
  if (filterResult.length === 0) {
    return (
      <div className='cardBox' data-testid='cardBox'>
        <p>Sorry, there is no result matching to the current features.</p>
      </div>
    );
  } else {
    
    let cardList = filterResult.map((r) => {
      
      return (
        <FilterCard text={r} key={r}/>
      );
    });
    return (
      <div className='cardBox'>
        {cardList}
      </div>
    );
  }
}

// This function creates a list of library info cards
export function FilterCard(props) {
  return <div className="card">
    <div className="card-content" >
        <p className="lib-info" data-testid='lib-info'>{props.text}</p>
    </div>
  </div>;
}

// This function creates a list of filter labels with clickable boxes
export function FilterBox(props) {
    let labels = props.labels;
    let checkedState = props.checkedState;
    let whatToDoWhenChecked = props.whatToDoWhenChecked;
    let filterList = [];
    if (labels != null) {
      filterList = labels.map((l, idx) => {
        return <Filters label={l.label} key={l.label} id={idx} checkedState={checkedState} whatToDoWhenChecked={whatToDoWhenChecked}/>;
      });
      
    }
    
    return(
        <section className="flexFilterBy" >
        <h2 className="mb-4 bg-warning"> FILTER BY </h2>
        <div data-testid='filterList'>{filterList}</div>
      </section>
    )
}

// This components represents each filter label on the page
export function Filters (props) {
  let label = props.label;
  let checkedState = props.checkedState;
  let whatToDoWhenChecked = props.whatToDoWhenChecked;
  let arrayId = props.id;
  
  return  <label className="container" data-testid='label'> {label}
            <input type="checkbox" data-testid='checkbox' checked={checkedState[arrayId]} onChange={
              () => handleOnChange(checkedState, arrayId, whatToDoWhenChecked)} />
            <span className="checkmark"></span>
          </label>;
}


