//REFACTORING

// LAZY ELEMENT

// ORIGINAL 
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
      // console.log(filterResult);
      let cardList = filterResult.map((r) => {
        // console.log(r);
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


//REFACTORED 

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
            <div className="card">
            <div className="card-content" >
                <p className="lib-info" data-testid='lib-info'>{r}</p>
            </div>
          </div>
        );
      });
      return (
        <div className='cardBox'>
          {cardList}
        </div>
      );
    }
  }

  
