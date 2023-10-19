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

- When you use a function as an argument for the state-setting function, React will automatically pass the current state as an argument to that function.

- Two way binding: Two-way data binding in React refers to the synchronization between the user interface and the state of the component, ensuring that any changes in the UI are immediately reflected in the state, and vice versa.

- Derived State:  When your managing state for a component X that relies on it its state from component Y you don't want to be create a seperate state for component X. Instead you just create a variable and whatever functionality is required within the component. 

- Controled Component: A value used in a component is passed on to a parent through props and received by a parent through props. 

- stateful vs stateless components: in react apps some components will manage state and other components that don't manage state - they just output a value. 

## Rendering Lists and Rendering Conditional Content ##

- 'Keys' in react: this is a property that you add to react components which helps react when you start dynamically rednering components. Improves performance and prevents bugs. Allows react to uniquely identify components. 
- How do you dynamcially set style in react components? Via the style prop.
- Why are two curly braces use for the style prop? Because the style prop expects a javascript object. 

## Fragments Portals and Refs ##
- JSX Limitations: Can't return adjacent jsx components. 
- React.Fragment is a component that acts as a wrapper. 
- Portals are a way to make elements that are meant to render above all others (i.e. modals) render properly - not nested. This is done by creating elements for them inside the index.html you then use react-dom amd createPortal method. Rendered HTML content is just moved somewhere else. 
- Ref's are ways to direclty access  html(JSX) elements. It means you access them imperatively as oppposed to declaratively. You don't want to overuse these. An example use case is using refs to access the state of input instead of using an onchange event handler which would be logging every single keystroke in the input.

## Working with effects, and reducers. 
- Effect = Side Effect
- Side effects are events and tasks that happen outside of reacts main task of rendering jsx elements and managing state. 
- useEffect Hook that manages side effects. 
- this hook is takes a function that get executed after every component evaluation if the specified dependencies change. It also takes the dependencies. 
- Local storage with browsers is through local storage or cookies. 
- useReducer() helps you manage complex state.
- you tend to use useReducer when managing state becomes buggy and too complicated.

## Context in React
- If you need access to the state of some value in multiple components, what you can do is define it in a seperate file and export it and then import it wherever it is needed. 
- Using context to manage state is a balance. For instance you don't want to use it for generic components like buttons because you may have a logout button that needs access to state but then what about a display button? They should receive onClick events as props. 
- React context is not optimised for high frequency changes. 

## Redux
- Redux is a state mangement system for cross-component or app-wide state.
- So this is state that is required by the whole app not just specific components.
- Three main types of state: Local State - Cross Component State - App-Wide State
- Local State: State that belongs to a single component. User Input.
- Cross Component: State that affects multiple components.
- App-Wide State: Stat tgat affects the entire application. User authentication for example.
- Redux is similar to React Context.
- React Context - Potential Disadvantages: complext setup/management for small application. In a bigger app you're going to have a lot of context.Performace for Context might not be great.  
- How does Redux Work? Redux is about having one central data store in your application. All state is in one location for cross app state.
- In Redux, components never directly manipulate store data. Instead there is a reducer function that does this. Components subsribe to the central data store and track changes to data. 
- Reducer functions in redux not related to useReducer. 
- We need to connect components and reducer functions so that we can trigger a data chage if the component is required to do that - i.e. logout.
- Components dispaction Actions (objects that describe operation that Reducers should perform)
- The reducer performs the action and spits out a new state which replaces the existing state in the central data store.



# Router
- Single Page Application Routing - possible to use multiple URLS even in a single page application.
- Routing = Different URL Paths load different pages on the screen.
- Having to constantly reload data when routing can be slow and also not lead to a great user experience.
- SPAs are good for building complex user interfaces. This is because you make one request to the the server for the HTML/javascript when loading the site and then the javascript takes care of the rest on the client side from that point onward. 
- React router allows us to listen to URL Changes and then load different content. 
- There are three main steps that we need to go through when using react router: (1) Define the routes we want to support. Define the URL Paths we want to support and then also define which paths should be loaded for different paths. (2) we need to activate our router and load the route definitions defined in the first step. (3) Get all the components we want to load and have a means of navigating between these pages.