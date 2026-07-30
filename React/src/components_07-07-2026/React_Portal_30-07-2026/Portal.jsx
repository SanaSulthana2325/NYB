// React Portals are a React feature that lets you render a component outside its parent DOM hierarchy while keeping it inside the same React component tree.

// Think of it as: “Show this UI somewhere else in the HTML page, but let React treat it as if it is still a child of the current component.”

// Basic syntax

// React provides createPortal.

// import { createPortal } from "react-dom";

// createPortal(element, domNode);

// element → the React component you want to render

// domNode → the HTML element where it should appear


// Why do we need this?

// Let’s take a real example.

// Suppose you build a Login page.

// You click Login and a popup appears.

// That popup should appear in the center of the screen, above everything else.

// Without a portal, the popup may get hidden inside its parent container.



// Without vs With Portal

// Without Portal                        With Portal

// Modal stays inside parent           Modal appears anywhere in the page

// Can be hidden by overflow           Escapes overflow restrictions

// Harder to show above everything     Easy to show above everything

// Normal rendering                     Rendered in another DOM node


// Concept                                 Meaning

// createPortal()                      Renders JSX in another DOM node

// portal-root                           HTML element where portal content appears

// Modal                                   Best portal example

// Tooltip                               Common portal usage

// Toast                                 Common portal usage

// Dropdown                              Common portal usage

// Event bubbling                        Still works through the React tree



// The purpose of React Portals is to display a React component outside of its parent DOM element while still keeping it connected to the same React application.

// Why is this needed?

// Sometimes parent elements have CSS such as:

// overflow: hidden;
// height: 100px;

// If a modal or dropdown is rendered inside that parent, it may become hidden.

// A React Portal allows the modal to be rendered in another place in the HTML page where these restrictions do not apply.

// Real-world examples

// React Portals are commonly used for:

// Modal dialogs (login popup, delete confirmation)

// Tooltips (small text shown on hover)

// Dropdown menus

// Toast notifications (“Saved successfully!”)

// Context menus (right-click menus)



// What is createPortal()?

// createPortal() is a function from react-dom that renders a React element into a different place in the HTML page.

// The syntax is:

// import { createPortal } from "react-dom";

// createPortal(
//   element,
//   document.getElementById("portal-root")
// );

// element → the JSX you want to display

// portal-root → the HTML element where it should appear


// Why use createPortal()?

// Without a portal, the modal is rendered inside its parent.

// With createPortal(), the modal is rendered outside the parent, avoiding problems such as:

// overflow: hidden

// z-index

// clipping inside containers


// What is Event Binding in React?

// Event Binding means connecting a user action (like clicking a button, typing in an input, or hovering over an element) to a JavaScript function.

// Think of it like this:

// User clicks a button

// React calls a function

// The function performs some action