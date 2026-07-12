import Counter from "./Mini_Assignment/Counter";
import Display from "./Mini_Assignment/Display";
import Footer from "./Mini_Assignment/Footer";
import Header from "./Mini_Assignment/Header";
import ThemeButton from "./Mini_Assignment/ThemeButton";
import UserProfile from "./Mini_Assignment/UserProfile";

import ThemeProvider from "./context/ThemeContext";
import UserProvider from "./context/UserContext";

function App() {

    return (

        <UserProvider>

            <ThemeProvider>

                <Header />

                <hr />

                <Counter />

                <hr />

                <ThemeButton />

                <hr />

                <Display />

                <hr />

                <UserProfile />

                <hr />

                <Footer />

            </ThemeProvider>

        </UserProvider>

    );

}

export default App;