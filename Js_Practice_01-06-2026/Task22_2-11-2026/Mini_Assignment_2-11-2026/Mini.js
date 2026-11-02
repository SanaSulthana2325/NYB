
"use strict";

// =================================
// 1. COUNTER USING CLOSURE
// =================================

function createCounter() {
    let count = 0; // Private variable

    return {
        increase: function() {
            count++;
            return count;
        },

        decrease: function() {
            count--;
            return count;
        },

        reset: function() {
            count = 0;
            return count;
        },

        getCount: function() {
            return count;
        }
    };
}

// =================================
// 2. USER SESSION USING CLOSURE
// =================================

function createSession() {
    let currentUser = null; // Private variable

    return {
        login: function(username) {
            if (!username.trim()) {
                return false;
            }

            currentUser = username.trim();
            return true;
        },

        logout: function() {
            currentUser = null;
        },

        getUser: function() {
            return currentUser;
        },

        isLoggedIn: function() {
            return currentUser !== null;
        }
    };
}

// =================================
// 3. APPLICATION AND FUNCTION BINDING
// =================================

const app = {
    counter: createCounter(),
    session: createSession(),

    // Get HTML elements
    countDisplay: document.getElementById("count"),
    usernameInput: document.getElementById("username"),
    sessionMessage: document.getElementById("sessionMessage"),

    // Display counter value
    updateCounter: function(value) {
        this.countDisplay.textContent = value;
    },

    // Increase counter
    increase: function() {
        const value = this.counter.increase();
        this.updateCounter(value);
    },

    // Decrease counter
    decrease: function() {
        const value = this.counter.decrease();
        this.updateCounter(value);
    },

    // Reset counter
    reset: function() {
        const value = this.counter.reset();
        this.updateCounter(value);
    },

    // Log in a user
    login: function() {
        const username = this.usernameInput.value;

        if (this.session.login(username)) {
            this.sessionMessage.textContent =
                "Welcome, " + this.session.getUser() + "! You are logged in.";

            this.usernameInput.value = "";
        } else {
            this.sessionMessage.textContent =
                "Please enter a valid username.";
        }
    },

    // Log out the current user
    logout: function() {
        if (this.session.isLoggedIn()) {
            const username = this.session.getUser();

            this.session.logout();

            this.sessionMessage.textContent =
                username + " has logged out successfully.";
        } else {
            this.sessionMessage.textContent =
                "No user is currently logged in.";
        }
    },

    // Attach event handlers
    init: function() {
        document.getElementById("increaseBtn")
            .addEventListener("click", this.increase.bind(this));

        document.getElementById("decreaseBtn")
            .addEventListener("click", this.decrease.bind(this));

        document.getElementById("resetBtn")
            .addEventListener("click", this.reset.bind(this));

        document.getElementById("loginBtn")
            .addEventListener("click", this.login.bind(this));

        document.getElementById("logoutBtn")
            .addEventListener("click", this.logout.bind(this));

        console.log("Application started");
        console.log("Counter initialized:", this.counter.getCount());
        console.log("Session initialized:", this.session.isLoggedIn());
    }
};

// Start the application
app.init();
