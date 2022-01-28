import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './src/App'; 

import { FilterBox } from './src/FilterPage';
import { ReviewForm, Comment }  from './src/Reviews';


  describe('The form element', () => {
    test('clears content after submit', () => {
      //const callback = () => {}; //empty
      
      //can render single element
      //render(<AddTaskForm addTaskCallback={callback} />)
      const setUserValue = () => {}; //empty
      const setLibraryValue = () => {};
      const setRating = () => {};
      const addReview = () => {};
      
      render (<ReviewForm library={libraryValue} user={userValue} rating={ratingValue} whatToDoOnSubmit={addReview}
                        setUserOnSubmit={setUserValue} setLibraryOnSubmit={setLibraryValue} setRatingOnSubmit={setRating} />)
  
      //enter text
      const formInput = screen.getByRole('textbox')
      userEvent.type(formInput, "TEST REVIEW"); //type in two words
  
      //shows typed input (controlled form!)
      expect(screen.queryByDisplayValue("TEST TASK")).toBeInTheDocument();
  
      //click button
      userEvent.click(screen.getByRole('button'));
  
      //should also clear the form
      expect(screen.queryByDisplayValue("TEST TASK")).not.toBeInTheDocument();
    })
  })

  describe('The comment element', () => {
    test('is filled color thumb when clicked', () => {
      
     
      
      render (<Comment comment={} key={} />);
  
      
      //click button
      userEvent.click(screen.getByRole('button'));
  
      
      expect(screen.queryByDisplayValue('button')).toBeInTheDocument();
    })
  })