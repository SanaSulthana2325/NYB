 // 1. WINDOW
    function showWindow() {
        document.getElementById("windowOutput").textContent =
            "Window width: " + window.innerWidth +
            " pixels, Window height: " + window.innerHeight +
            " pixels.";
    }

    // 2. DOCUMENT
    function changeHeading() {
        document.getElementById("heading").textContent =
            "Hello! Heading changed successfully.";

        document.getElementById("documentOutput").textContent =
            "The document heading has been updated.";
    }

    // 3. LOCATION
    function showLocation() {
        document.getElementById("locationOutput").textContent =
            "Current URL: " + window.location.href;
    }

    // 4. HISTORY
    function showHistory() {
        document.getElementById("historyOutput").textContent =
            "Number of entries in this tab's session history: " +
            window.history.length;
    }

    function goBack() {
        window.history.back();
    }

    // 5. TIMERS
    document.getElementById("timerOutput").textContent =
        "Timers use setTimeout() and setInterval().";

    // 6. SETTIMEOUT
    function startTimeout() {
        const output = document.getElementById("timeoutOutput");

        output.textContent = "Reminder will appear in 3 seconds...";

        setTimeout(function () {
            output.textContent = "Reminder: Time to take a short break!";
        }, 3000);
    }

    // 7. SETINTERVAL
    let countdown;
    let seconds = 5;

    function startCountdown() {
        clearInterval(countdown);
        seconds = 5;

        const output = document.getElementById("intervalOutput");
        output.textContent = "Countdown: " + seconds;

        countdown = setInterval(function () {
            seconds--;

            if (seconds > 0) {
                output.textContent = "Countdown: " + seconds;
            } else {
                output.textContent = "Countdown finished!";
                clearInterval(countdown);
            }
        }, 1000);
    }

    function stopCountdown() {
        clearInterval(countdown);
        document.getElementById("intervalOutput").textContent =
            "Countdown stopped.";
    }