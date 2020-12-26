
function apiCall(data)  {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({  
      password  : data,
      userNam  : data
    })
  }

  fetch('http://localhost:4000/API/login', requestOptions)
  .then(response => response.json())
  .then(data => {
    alert(`${data.status} => ${data.data}`)
  })
}


function call()  {
  let data  =  document.getElementById('name').value
  console.log(data)
  apiCall(String(data))
}