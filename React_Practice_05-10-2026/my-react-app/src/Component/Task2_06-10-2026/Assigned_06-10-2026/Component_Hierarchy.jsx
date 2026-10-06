function Pa() {
    return (
        <>
            <Header3 />

            <Home1 />

            <Footer3 />
        </>
    );
}


// Level 2
function Header3() {
    return (
        <>
            <h1> Foodie App</h1>
            <p>Welcome to our food ordering website</p>
        </>
    );
}


// Level 2
function Home1() {
    return (
        <>
            <h2>Home Page</h2>

            <RestaurantList />

            <Offers />
        </>
    );
}


// Level 3
function RestaurantList() {
    return (
        <>
            <h3 className="text-bold">*Popular Restaurants*</h3>

            <Restaurant /><br/>
            <Restaurant />
        </>
    );
}


// Level 4
function Restaurant() {
    return (
        <>
            <p> Burger House</p>
            <p> Pizza hut</p>
            <p>Fast Food</p>
        </>
    );
}


// Level 3
function Offers() {
    return (
        <>
            <h3 className="text-bold text-orange-500">Today's Offer</h3>
            <p>Get 20% OFF on your first order!</p>
        </>
    );
}


// Level 2
function Footer3() {
    return (
        <>
            <hr />
            <p>© 2026 Foodie App</p>
        </>
    );
}


export {Pa};