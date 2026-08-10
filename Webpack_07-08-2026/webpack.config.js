// const path = require("path");

// module.exports = {
//     entry: "./src/index.js",

//     output: {
//         filename: "bundle.js",
//         path: path.resolve(__dirname, "dist")
//     },

//     mode: "production"
// };


// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// export default {
//     entry: "./src/index.js",

//     output: {
//         filename: "bundle.js",
//         path: path.resolve(__dirname, "dist")
//     },

//     mode: "development"
// };



// module.exports={


// entry:"./src/index.js",


// module:{

// rules:[

// {
// test:/\.css$/,
// use:[
// "style-loader",
// "css-loader"
// ]
// }

// ]

// }

// };

// module.exports={

// module:{

// rules:[

// {
// test:/\.(png|jpg|jpeg)$/,
// type:"asset/resource"
// }

// ]

// }

// };


import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {

    mode: "development",

    entry: "./src/Practice/Index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }

};



