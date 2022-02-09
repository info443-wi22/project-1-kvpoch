# INFO 443 Project: Analyzing UW LookUP codebase

UW Library LookUp is a React app group project made in INFO 340 Fall 2021. It was made by Katherine Poch, Chris Cha, Zhiwei Zhong. This report is specifically choosing to
analyze the [Filter Feature page](https://uw-library-lookup-1c2ce.web.app/filter) of this React App.


## Code Structure Analysis


**_What are the code-level architectural elements of the system?_**


|![alt text ](./images/uml_class.png )|
|:--:|
| _Figure 1: Architectural Element Diagram_|
>This UML structure diagram shows the structure of the Filter React Component
of this React App and its functions

This table refers to the Architectural Element Diagram and
defines the purpose of each architectural element of the system to show
what makes up this code structure.

| Architectural Element | Purpose |
| --- | --- |
| `Filter` | The main export function that renders the whole filter page |
| `FilterCardBox` | This function shows the filtered library cards |
| `FilterCard`| This function creates a list of library info cards|
| `FilterBox`| This function creates a list of library feature labels with clickable boxes to filter from|
| `Filters`| This function represents each filter label on the page and handles the changed state of the checkboxes with `handleOnChange`|
| `handleFilterBox`| This function represents the actual result of filtered libraries from the user's checked boxes, which sets the state variable `filterResult`|
| `filterCheckedArray`| This state variable represents the array of features checked by the user|
| `filterLabels`| This state variable represents the features of libraries (gets data from .json file)|
| `libFeatures`|This state variable represents the libraries and what features they are associated with.





**_What are the code's process flows?_**


|![alt text](./images/uml_sequence.png) |
|:--:|
| _Figure 2: Codebase Process Flow Diagram_|
>This UML sequence diagram shows the process of the filter component and how it interacts
its functions. It starts with the user giving input by clicking checkboxes and it
ends with app rendering the output, which are the filtered names of libraries.

This text description reports the process flow, referring to Codebase Process Flow Diagram. It walkthroughs the information "flow" of the system to describe its internal behavior when someone uses this software.

_Code's Process Flow_ : The user starts by visiting the Filter page of the React app and clicks on checkboxes to filter libraries by different features. Clicking on the checkboxes will cause the checkboxes' state to be updated with the `handleOnChange` helper function, which is used by the `Filters` function that creates one library feature and its checkbox.`FilterBox` uses `Filters` to show the list of features and its checkboxes, keeping track of their states. `FilterBox` sets `filterCheckedArray` to be an array of what features were checked. Then, `handleFilterBox` uses `filterCheckedArray` to determine
the filtered library names based on the checked features and the given data .json file saved in the `libFeatures` state variable. The filtered library names are set in `filterResult` state variable and `FilterCardBox` uses it to create the displayed library cards once the App re-renders its page.


## Architecture Assessment

There are structural problems that can be identified in this code. There are
architectural deficiencies, such as code smells, or things that just need improvement.

- The `FilterCard` function is unnecessary since it is mostly DOM level code that can be copied and pasted into the `FilterCardBox` function.
- The variable `comparisonResult` is made but never used.
- There are quite a few debugging console.log comments
- While documenting the structure and control flow, I got confused and lost when looking at what `Filters`, `FilterBox`, and `handleFilterBox` mean and how they all work together. The function names made it unclear that they were dealing with the feature labels with checkboxes. Inside these functions, there was also an obscure prop named `func`, which made reading the code more unclear.

The code is generally readable and well-documented. There are short comments that explain the overall purpose of each function. However, there isn't too many comments because the code is able to explain its architecture on its own. The code look readable because none of the functions are too long or complex and they each have their own single purpose.

There are no standard violations that apply to the codebase being analyzed.
There are no additional design qualities (other than modifiability) required of the codebase being analyzed.







## Unit Tests

 1. The test can be found in project-1-kvpoch/project-kvpoch-main/src/App.test.js
To run the tests, type `npm run test` in the terminal

 2. A written discussion of what aspects of your code you chose to test and why. In particular: what inputs to your functions/etc. did you test (and why those inputs)? The purpose of this discussion is to justify the test cases you implemented—be clear about your design intent when creating this aspect of the system!

 A list or table of tests/assertions you wrote is fine for meeting this requirement, and each test should only require a sentence or phrase to justify. Note that if you've written a clean test suite structure, you can also use the description labels of each test case for this.

 3. Documentation of your test coverage and tests passing. Your report should demonstrate that your tests sufficiently cover the code in question, and that the code does pass these tests initially. A screenshot of your coverage report is acceptable (though as always be sure to label, caption, and explain the image).

 Note that if the code your are testing is only a portion of a module or package, you may need to include an explanation/demonstration of your coverage that is different than a coverage report.

## Refactoring the Code

The purpose of this table is to show what refactoring can be done to this code.
It identifies each code smell and how to rewrite the code to fix this system's architecture while retaining the same level of functionality.

| Code Smell | What/Where it was | How to Fix |
| --- | --- | ---|
| Lazy Element | `FilterCard` | Copy its code and paste it into `FilterCardBox`
| Speculative Generality | `comparisonResult` (inside `handleFilterBox`)| Take out the variable since it never gets used
|Mysterious Name| `Filters`, `FilterBox` `handleFilterBox`| Change       `Filters` => `FilterFeatures`,  `FilterBox` => `FilterFeaturesList`            `handleFilterBox` => `handleFilterFeaturesList`
|Mysterious Name| `func` prop in (in `Filters`, `FilterBox`)| Change to `whatToDoWhenChecked`
|Duplicated Code| `Filters` and `FilterBox`| Combine code into one function
|Comments|console.log comments (inside `handleFilterBox`, `FilterCardBox`, `Filters`)| Extract console.log() since they are just debugging comments

feature envy, middle man ?
