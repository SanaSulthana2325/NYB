//Promise.all() :used when you want all promises to complete successfully 
// used to run multiple promises simultaneously and wait until all of them are completed successfully
// if one fails --->entire promise fails
// return results in array

// example
let p1 = Promise.resolve("HTML Completed");
let p2 = Promise.resolve("CSS Completed");
let p3 = Promise.resolve("JavaScript Completed")

Promise.all([p1, p2, p3])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
});

// example with timers
let e1=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Task 1 Done")
    }, 3000)
});

let e2=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Task 2 Done")
    }, 1000)
});

let e3=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Task 3 Done")
    }, 2000)
});

Promise.all([e1, e2, e3])
.then((result) =>{
    console.log(result)
})

// sudents Results
function getAttendance(){
    return Promise.resolve("Attendance Loaded");

}

function getMarks(){
    return Promise.resolve("Marks Loaded");

}

function getFees(){
    return Promise.resolve("Fees Loaded");

}

function getTimetable(){
    return Promise.resolve("Timetabke Loaded");

}

Promise.all([
    getAttendance(),
    getMarks(),
    getFees(),
    getTimetable()
])
.then((result) =>{
    console.log(result)
});

// social media app
Promise.all([
    Promise.resolve("posts loaded"),
    Promise.resolve("Stories loaded"),
    Promise.resolve("Notifications loaded"),
    Promise.resolve("Suggestions loaded"),
])

.then((result)=>{
    console.log(result)
})

// food delivery app
Promise.all([
    Promise.resolve("Restaurants loaded"),
    Promise.resolve("Offers loaded"),
    Promise.resolve("Location loaded"),
    Promise.resolve("Recommendations loaded")
])

.then((result)=>{
    console.log(result)
})


// promise.race(): the first come will win 
// retuns first completed promise
// can return success or failure

let u1 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("first promise")
    },1000)
})

let u2 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("second promise")
    },2000)
})

Promise.race([u1, u2])
.then((result)=>{
    console.log(result)
})

// fastest runner 
let runner1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Runner 1 won")
    }, 4000)
})

let runner2 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("Runner 2 won")
    },2000)
})

let runner3 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("Runner 3 won")
    },3000)
})

Promise.race([runner1, runner2, runner3])
.then((result) =>{
    console.log(result)
})

// fastest server response

let indianServer = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("Indian Server Response")
    }, 2000)
});

let usServer = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("US Server Response")
    }, 1000)
});

let europeServer = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("Europe Server Response")
    }, 3000)
});

Promise.race([indianServer, usServer, europeServer])

.then((Result)=>{
    console.log(Result)
})

//Online food delivery app

let gps = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("GPS Location")
    },5000)
})

let mobileNetwork = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Mobile Network Location")
    },3000)
})

let wifi = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("WiFi Location")
    },2000)
})

Promise.race([gps, mobileNetwork, wifi])
.then((result)=>{
    console.log(result)
})

// promise.all with rejection

let g1 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("Success")
    },3000)
})

let g2 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("Failed Fast")
    },1000)
})
Promise.race([g1, g2])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

// login timeout system
let login = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Login Successfull")
    },5000)
})

let timeout = new Promise((reject)=>{
    setTimeout(()=>{
        reject("Login timeout")
    },2000)
})

Promise.race([login, timeout])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})


//Promise.allSettled():waits for all promises even if some fail
// Never stop beause of failure
// Gives status of every promise

//ex
let h1 = Promise.resolve("Sana");
let h2 = Promise.resolve("Tasleem");
let h3 = Promise.resolve("Tasan");
Promise.allSettled([p1,p2,p3])
.then((result)=>{
    console.log(result)
})

// multiple API request
let profile = Promise.resolve("Profile Loaded");
let notification = Promise.reject("notifications Failed");
let messages = Promise.resolve("Messages Loaded");
let friends = Promise.resolve("Friends Loaded");

Promise.allSettled([profile, notification, messages, friends])

.then((result)=>{
    console.log(result)
})

// file upload system
function uploadFile(file, success){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(success){
                resolve(file + " Uploaded")
            }else{
                reject(file + " Failed")
            }
        },2000)
    })
}

Promise.allSettled([
    uploadFile("./logo sam.jpg",true),
    uploadFile("./bird logo 1.jpg",false),
    uploadFile("./nyb photo.jpg", true)
])
.then((result)=>{
    console.log(result)
})


// promise.any(): Returns the first successful promise
// ignored all fail promises

// example
let y1 = new Promise(( resolve, reject)=>{
    setTimeout(()=>{
        reject("Failed 1");
    },1000);
})

let y2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Success 2");
    },2000);
})

let y3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Success 3");
    },3000);
})

Promise.any([y1, y2, y3])
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})


// CDN image loader

let cdn1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("CDN 1 failed")
    },1000)
})

let cdn2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(" Image loaded from CDN 2")
    },2000)
})

let cdn3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(" image loaded from CDN 3")
    },3000)
})

Promise.any([cdn1, cdn2, cdn3])
.then((result)=>{
    console.log(result)
})

//payment gateway system
let razorpay = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Razorpay failed")
    },1000)
})

let stripe = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(" Stripe payment success")
    },2000)
})

let paypal = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(" Paypal payment success")
    },3000)
})

Promise.any([ razorpay, stripe, paypal])
.then((result)=>{
    console.log(result)
})

//Introduction to Async and Await
//async and await are modern JavaScript features used to handle asynchronous operations in a cleaner and easier way.

// async: it is used before a function and it makes the function always return a promise



// await: used inside async function and it waits until the promise is completed

//example
function downloadFile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("File Downloaded");
        }, 4000);
    });
}

async function startDownload() {
    console.log("Downloading started...");

    let result = await downloadFile();

    console.log(result);
}

startDownload();

// asyn await with promise.all

async function dashboard(){
    try{
        let[
            profile,
            notifications,
            messages
        ] = await Promise.all([
            Promise.resolve("profile loaded"),
            Promise.resolve("Notification loaded"),
            Promise.resolve("Messages loaded")
        ]);
        console.log(profile);
        console.log(notifications);
        console.log(messages);
    }
    catch(error){
        console.log(error)
    }
}
dashboard();

// async/ await with Promise.race
async function startRace(){
    try{
        let result = await Promise.race([
            new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve("Fast Task")
                },1000)
            }),
            new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve("Slow Task")
                },4000)
            })
        ]);
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
startRace();

// asyn/await with Promise.allSettled
async function loadData(){
    let result = await Promise.allSettled([
        Promise.resolve("Users Loaded"),
        Promise.reject("Posts Failed"),
        Promise.resolve("comments Loaded")
    ])
    console.log(result)
}
loadData();


// async/ await with Promise.any
async function loadServer(){
    try{
        let result =  await Promise.any([
            Promise.reject("Server 1 failed"),
            Promise.resolve("Server 2 connected"),
            Promise.resolve("Server 3 connected")
        ]) 
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
loadServer();
