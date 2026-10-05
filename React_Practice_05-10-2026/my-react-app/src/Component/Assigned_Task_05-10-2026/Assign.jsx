
// Create multiple functional components.

function Head(){
    return(
        <>
        <h1> this is my company website</h1>
        </>
    )
}

function Navbar(){
    return(
        <>
        <nav>
            <a href="#">Home </a>|
            <a href="#">about </a>|
            <a href="#">Contact </a>

        </nav>
        </>
    )
}

function MainContent(){
    return(
        <>
        <main>
        <h2> Welcome to company website</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione id quis dolor. Culpa est atque accusantium maiores inventore unde quibusdam, earum, esse nam cum quas similique quo repellat quod eius.</p>
        </main>
        </>
    )
}

function Foot(){
    return(
        <>
        <footer>
            <p> copyright 2026</p>
        </footer>
        </>
    )
}

export { Head, Navbar,MainContent,Foot};









// Understand the complete React project structure.  

// node_modules
// node_modules/

// This folder contains all the packages/dependencies installed for your project.


// public
// public/
// │
// └── vite.svg      img.logo,favicon

// The public folder contains static files that you want to make directly available to the browser.



// src

// This is the most important folder for you as a React beginner.

// src/

// Most of your React code will be written here.


// src/assets
// src/
// └── assets/

// This folder is generally used for assets that are imported into your React code.


// App.jsx

// This is one of the most important files.

// It usually contains your main React component.



// main.jsx

// This is a very important file.

// main.jsx is the entry point where React is connected to the HTML page.

// A typical Vite React main.jsx looks like:

// how these all are connected 

// index.html
//      │
//      │
//      ▼
// <div id="root">
//      │
//      │
//      ▼
//   main.jsx
//      │
//      │
//      ▼
//    App.jsx
//      │
//      │
//      ▼
//     JSX
//      │
//      ▼
//   Browser



// package.json

// This is a very important configuration file.

// it also contains Dependencies, Scripts


// package-lock.json
// package-lock.json

// This file records the exact versions of installed packages and their dependency tree.

// You normally don't manually edit it.



// my-react-app/
// │
// ├── node_modules/      → Installed packages
// │
// ├── public/            → Static files
// │
// ├── src/               → Main React code ⭐
// │   │
// │   ├── assets/        → Images/assets
// │   ├── App.jsx        → Main component ⭐
// │   ├── App.css        → App styles
// │   ├── index.css      → Global styles
// │   └── main.jsx       → React entry point ⭐
// │
// ├── index.html         → Main HTML page
// ├── package.json       → Project/packages information ⭐
// ├── package-lock.json  → Exact dependency versions
// ├── vite.config.js     → Vite configuration
// ├── eslint.config.js   → ESLint configuration
// ├── .gitignore         → Files ignored by Git
// └── README.md          → Project documentation