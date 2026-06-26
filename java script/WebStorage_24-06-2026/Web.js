//Web Storage


//Local Storage

localStorage.setItem("name", "Sana Sulthana")
console.log(localStorage.getItem("name"))
localStorage.setItem("role","lead")

console.log(localStorage.getItem("role"))


localStorage.removeItem("role")
console.log(localStorage.getItem("role"))

//Session Storage

sessionStorage.setItem("name","Tasan")
console.log(sessionStorage.getItem("name"))


// 1st screen
// please login
//login button ----> authtoken in the local storage
// ckeck the auth token is present or not
// please login ---> hello user
//hello user to       logout
//please login