// An API call means your React application communicates with a server/backend to send or receive data.

// For example:

// React App → API Request → Server → Database → API Response → React App

// A common example is a Student Management App. React can call an API to get student details from a backend.



// What is an API?

// API = Application Programming Interface

// An API acts as a bridge between the frontend and backend.


// React Application
//        ↓
//    API Request
//        ↓
// Backend Server
//        ↓
//    Database
//        ↓
//    API Response
//        ↓
// React Application



// | Method     | Purpose              | Example               |
// | ---------- | -------------------- | --------------------- |
// | **GET**    | Get data             | Get students          |
// | **POST**   | Create data          | Add student           |
// | **PUT**    | Update complete data | Update student        |
// | **PATCH**  | Update partial data  | Change student's name |
// | **DELETE** | Delete data          | Delete student        |



// | Feature                           | Fetch                            | Axios                        |
// | --------------------------------- | -------------------------------- | ---------------------------- |
// | Built into browser                | ✅ Yes                            | ❌ No                         |
// | Installation required             | ❌ No                             | ✅ Yes                        |
// | JSON parsing                      | Manual                           | Automatic                    |
// | Syntax                            | More verbose                     | Shorter                      |
// | POST handling                     | More code                        | Easier                       |
// | Request/response interceptors     | Not built in                     | ✅ Yes                        |
// | Automatic handling of HTTP errors | ❌ No                             | ✅ Rejects non-2xx by default |
// | Request cancellation              | Supported with `AbortController` | Supported                    |
// | React support                     | ✅                                | ✅                            |


// When Would I Prefer Fetch?

// Use Fetch when:

// Your application is small/simple.
// You don't want another dependency.
// You only need basic HTTP requests.
// You are comfortable handling JSON and status checks yourself.

// When Would I Prefer Axios?

// Axios can be convenient when:

// Your project has many API calls.
// You want simpler request syntax.
// You want interceptors.
// You want convenient request/response configuration.
// You want automatic JSON transformation.
// You want consistent API handling across a larger application.

// For example, a larger application might have:

// React
//   ↓
// Axios
//   ↓
// API
//   ↓
// Authentication
//   ↓
// Backend

// You can configure Axios once and reuse it.



// Query Parameters in API Calls

// Query parameters are values added to the URL to send additional information to an API.

// They are commonly used for:

// Searching
// Filtering
// Sorting
// Pagination
// Sending optional values
// Fetching specific types of data


// API Response Handling means taking that response and correctly handling:

// Successful response
// JSON data
// Loading state
// Errors
// Empty data
// HTTP status codes