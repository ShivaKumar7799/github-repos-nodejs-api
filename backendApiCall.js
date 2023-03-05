const apiUrl = "https://shivakumar-backend-project.onrender.com/shiva"
let userDetails;

const apiFetching = async () => {
  let response = await fetch(apiUrl)
  response = await response.json()
  console.log(response)
  document.getElementById("username").innerHTML = response.username;
  document.getElementById('password').innerHTML = response.password
}

apiFetching()
