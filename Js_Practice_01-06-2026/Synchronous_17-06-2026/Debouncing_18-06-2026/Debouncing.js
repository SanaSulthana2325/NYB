// debouncing: waith until the user stop doing something and then execute the function
// like typing typing typing stop---> then executes onces

         function debounce(func, delay) {
            let timer;

            return function (...args) {
                clearTimeout(timer);

                timer = setTimeout(() => {
                    func.apply(this, args);
                }, delay);
            };
        }

        
        // Search Debouncing
        

        function searchData(event) {
            console.log("Searching:", event.target.value);
        }

        document.getElementById("search")
            .addEventListener("keyup", debounce(searchData, 2000));



        // Button Debouncing
        

        function submitForm() {
            console.log("Form Submitted");
        }

        document.getElementById("btn")
            .addEventListener("click", debounce(submitForm, 1000));




        // Scroll Debouncing
    

        function scrollStopped() {
            console.log("Scrolling Stopped");
        }

        window.addEventListener("scroll",
            debounce(scrollStopped, 1000));

            
