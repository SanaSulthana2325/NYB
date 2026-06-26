//API Calls in javascript



// API method
//1.get --->fetching ?return the data

// 2.post--->To send the data

// 3.put--->it changes the entire record

// 4.patch---> it changes only the specific data

// 5. delete--->to delete the data


let data = fetch("https://jsonplaceholder.typicode.com/users")
console.log(data)

// ouput will come in string
fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    console.log(data)
})
.catch((e)=>{
    console.log(e)
})


// in number
fetch("https://jsonplaceholder.typicode.com/users")
.then((data) =>{
    return data.json()
    console.log(data)
})
.then(d => console.log(d))
.catch((e)=>{
    console.log(e)
})


// post

fetch("url",{
    method:"POST"
})

// task
