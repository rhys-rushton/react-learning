# Notes

## Basics ##
- React is a library for building user interfaces
- Uses declerative programmming (instead of imperative) to build dynamic user interfaces.
- What is the way you organise different components in react? 
- A component tree (1 main component that actually gets rendered i.e. App.js file)
- A component in React is a special type of function. 
- What are props in react and what do they allow you to do? 
- They allow you to pass data dynamically into your components. It means for a given component you can data for it from outside of it, meaning that you don't need to hard code anything. 
- What data structure do you use in wrapper components to display the components that these wrappers contain? You use props.children is a reserved word in react that each component gets passed
- What is composition in relation to react components? It is where you build components out of one another and reuse fundamental aspects of these components in lits of different components - i.e. rounded corners on a card component. 

## State and Working with Events ##
- How are events handled in React? React leverages inbuilt html event listeners, events are prefaced in React with on... i.e. onClick and they are passed to the element in a similar way to props. Then what happens is the executable code gets passed to this prop. 