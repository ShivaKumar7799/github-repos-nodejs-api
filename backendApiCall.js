const apiUrl = "https://shivakumar-backend-project.onrender.com/shiva"


const apiFetching = async () => {
  const response = await fetch(apiUrl)
  console.log(response)
}

apiFetching()
