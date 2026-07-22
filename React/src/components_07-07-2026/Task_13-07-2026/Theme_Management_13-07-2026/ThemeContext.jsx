import {createContext} from 'react';

const ThemeContext = createContext();

export default ThemeContext;













// // flow of theme 
// App

//      │

// ThemeContext.Provider

//      │

// theme = Light

//      │

//  ┌──────┴────────┐

//  ▼               ▼

// Header         Home

//      ▲

// ThemeButton (updates theme)