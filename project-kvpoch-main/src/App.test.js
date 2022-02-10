import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';

//import App from './src/App'; 
import {Filter} from '../src/FilterPage'; 
import {Filters} from '../src/FilterPage'; 
import { handleOnChange } from '../src/FilterPage';
import { FilterBox, FilterCard } from '../src/FilterPage';

describe("<Filter />", () => {
  test('render heading', () => {
    render(<Filter />);
 
    const headEl = screen.getByRole('heading');
    expect(headEl).toBeInTheDocument();
    
  });
 
  test('render default cardBox element when no checked boxes', () => {
    render(<Filter />);
 
    const cbEl = screen.getByTestId('cardBox');
    expect(cbEl).toBeInTheDocument();
    expect(cbEl).toHaveTextContent("Sorry, there is no result matching to the current features.");
    
  });

  test('default is no checkboxes', () => {
    render(<Filter />);
   
    const checkboxEl = screen.queryAllByTestId('checkbox');
    expect(checkboxEl).not.toBeChecked();
    const cbEl = screen.getByTestId('cardBox');
    expect(cbEl).toHaveTextContent("Sorry, there is no result matching to the current features.")
 
  
  });


 
  test('returns card boxes when clicked checkboxes', () => {
    render(<Filter />);
   
    const checkboxEl = screen.queryAllByTestId('checkbox');
    userEvent.click(checkboxEl);
    expect(checkboxEl).toBeChecked();
    const cbEl = screen.getByTestId('cardBox');
    expect(cbEl).not.toHaveTextContent("Sorry, there is no result matching to the current features.")
 
  
  });
  
 
});



  describe("<Filters />", () => {
  
  test('render one checkbox', () => {
    let labels = "";
    let checkedState = "";
    let func = () => {};
    let idx = "";
    render(<Filters label={labels} key={labels} id={idx} checkedState={checkedState} func={func}/>);
 
    const checkboxEl = screen.queryAllByTestId('checkbox');
    //userEvent.change(checkboxEl);
    expect(checkboxEl).toHaveLength(1);

    
  });

  test('render one label', () => {
    let labels = "";
    let checkedState = "";
    let func = () => {};
    let idx = "";
    render(<Filters label={labels} key={labels} id={idx} checkedState={checkedState} func={func}/>);
 
    const label = screen.queryAllByTestId('label');
    //userEvent.change(checkboxEl);
    expect(label).toHaveLength(1);
    
  });
  

 
});

describe("<FilterBox />", () => {
  test('renders list of five labels with checkboxes', () => {
   
    let filterLabels = [];
    let setFilterCheckedArray = () => {};
    let filterCheckedArray = [];
    render(<FilterBox labels={filterLabels} checkedState={filterCheckedArray} func={setFilterCheckedArray}/>);
 
    const filterList = screen.queryAllByTestId('filterList');
    expect(filterList.firstChild).toBe(Array[5]);
    
    
  });

  
});

describe("<FilterCard />", () => {
  test('renders one text of card', () => {
   
    let r = "";
    render(<FilterCard text={r} key={r}/>);
 
    const text = screen.queryAllByTestId('lib-info');
    
    expect(text).toHaveLength(1);
    //expect(text.firstChild).toHaveTextContent();
    
    
  });

});


describe("<handleOnChange />", () => {
  test('clicked checkboxes', () => {
   
    let checkedState = "";
    let func = () => {};
    let arrayId = "";
    render(handleOnChange(checkedState, arrayId, func));
 
    const checkboxEl = screen.queryAllByTestId('checkbox');
    userEvent.click(checkboxEl);
    expect(checkboxEl).toBeChecked();
    
 
    // Execute the click event again
    userEvent.click(checkboxEl);
    expect(cbEl).not.toBeChecked();
    
    
    
  });
});