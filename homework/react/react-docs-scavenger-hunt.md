# React Documentation Scavenger Hunt

[React Docs](https://facebook.github.io/react/docs/hello-world.html)

### Post answers (and links to where you found them) for each of the questions below:

1. Can we use `npm` with React or do we have to use `yarn`?

- You can use both -- these are package managers and they let "you take advantage of a vast ecosystem of third-party packages and easily install and update them"

2. We are using JSX to write HTML inside of our React. Are we required to use JSX with React? Are there any alternatives?

- You aren't required to use JSX, but it's easiest to read. An alternative to JSX is React.createElement() components, props, children. JSX is just compiling all of that.   


3. Does React re-render the entire component when one part of it changes?


- React only updates what's necessary. React DOM compares the element and its children to the previous one, and only applies the DOM updates necesary to bring the DOM to a desired state. 
In the clock example, only the text node whose contents has changed gets updated by React DOM -- the seconds. 


4. Should we ever change `props` (or parameters) inside of a component? 

- Props are read only and a function or a class should never modify its own props. They are called "pure"  because they do not attemp to change their inputs.



For my own info...
Props -- when react sees and element representing a user-defined component, it passes JSX attributes to this component as a single object -- these objects are called "props"

5. Are all components classes? 

- No, they can also be functions. Compoonents defined as classes have some additional features. -- like local state. 


6. List five "Synthetic Events" provided by React:

- e
- boolean bubbles
- DOMEventTarget target
- number timeStamp
- boolean cancelable

**I've read the Handling Events Page and the Synthetic Events Page three times and I'm afraid I'm still confused. The page says that every SyntheticEvent object has the following attributes, (listed above here as my answer) but doesn't say they're examples of synthetic events...


7. Do we have to use ES6 syntax with React?

- No, but according to their main page, they use some fo the ES6 syntax in examples and they encourage the user to get familiar with arrow functions, classes, template literals, let and const statements. 

8. Where can I go to check out React's built-in Accessibility features?

https://reactjs.org/docs/accessibility.html


9. List five React Component Lifecycle Methods:

    - .render()
    - .componentDidMount()
    - .componentWillUnmount()
    - .setState()
    - .tick()


10. Where would I go to check out React's built-in testing 
tools?

In JSX code and in these plugins...

https://reactjs.org/docs/accessibility.html#development-and-testing-tools

Test Utilities and Jest: 
https://reactjs.org/docs/test-utils.html



### Turning in:

* Post a link to this file on Github to Schoology.
