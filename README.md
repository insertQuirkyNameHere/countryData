# Fetching Country Data from REST Countries API

This project was built to gain some React experience after going through a lot of concepts. It was an attempt to stay coding regularly- so as not
to simply go through theory without any actual real work being done.

## Concepts applied
- JS filter(), map(), reduce()
- JS Functional programming
- Using JS Promises
- React components
- Props Management
- State Management with useState() hook
- Side Effects with useEffect() hook
- React Component Lifecycle and Reconciliation
- Controlled components
- JS Event Loop
- npm basics

## Brief Overview
This is a very simple app to explore React components learned as mentioned above.  
The app simply gets a list of countries from the [Rest countries]() API endpoint and displays them in a well-formatted interface.  
I explored the useState() and useEffect hooks() extensively in this project leading me to new terms such as pure functions, side effects and
Lifting State Up.

## Difficulties faced
I ran into the minor issue of synchronizing the state of the 'Filter Countries' search box with the list of countries to show. I debated having a separate component for the filter countries part, but since the state of the text input also affected the state of the application (countriesToShow variable), and had to be lifted up, I decided against having an additional component. This could maybe be an area for improvment, that could be addressed some time in the future.

## Acknowledgements?
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project was inspired by a [FullStackOpen Course](https://fullstackopen.com/en/) exercise.


