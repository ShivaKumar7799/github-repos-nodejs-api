const apiUrl = "https://shivakumar-backend-project.onrender.com"


const apiFetching = async () => {
  const response = await fetch(apiUrl)
  console.log(response)
}

apiFetching()
