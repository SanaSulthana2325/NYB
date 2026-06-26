// weather check
async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("result").innerHTML =
    `Temp: ${data.main.temp}°C <br>  Weather: ${data.weather[0].description}`;
}



//to-do list
async function loadTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const data = await res.json();

  let list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(todo => {
    let li = document.createElement("li");
    li.textContent = todo.title;
    list.appendChild(li);
  });
}



// finder names
  

async function getProfile() {
  const username = document.getElementById("username").value;

  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  document.getElementById("profile").innerHTML = `
    <img src="${data.avatar_url}" width="100"><br>
    <b>Name:</b> ${data.name}<br>
    <b>Followers:</b> ${data.followers}<br>
    <b>Public Repos:</b> ${data.public_repos}
  `;
}



