- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to make sure that the data being handled by a certain function is of the right type. For instance, functions built to handle arrays should check to make sure the data they operate with is an array and not a string, or an object.

- [ ] Describe a life-cycle event in React?

The life-cycle of components used in react applications can be compared to the circle of life. Each component is born (imported), lives, (is defined and rendered), and dies (is exported to another part of the application).

- [ ] Explain the details of a Higher Order Component?

HOC take similarities from multiple components and combine them. The same way higher-order functions produce similar internal functions, higher-order components achieve this by passing variable property data to their respective counterparts.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

Components in React can be styled using CSS, SCSS(SASS or LESS), or CSJS(CS in JavaScript). While all produce one readable style file to the browswer, SCSS adds many development capabilities, such as variable definition, nesting, and greater readability. CSJS takes this one step further, letting developers define their styles as part of their working JavaScript component. Doing this removes the need to import styles from external files, but may produce more work if multiple styles share common similarities between components.