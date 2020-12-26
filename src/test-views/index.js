
function apiAuth(data)  {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({  
      password  : data,
      userName  : data
    })
  }

  fetch('http://localhost:4000/API/login', requestOptions)
  .then(response => response.json())
  .then(data => {
  })
}

function apiBook(data)  {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }

  fetch('http://localhost:4000/API/book', requestOptions)
  .then(response => response.json())
  .then(data => {
    if (!data.book) {
      document.getElementById('book').innerHTML = 'No Record'
      return
    }
    document.getElementById('book').innerHTML = `${data.book.bookId} - ${data.book.bookName}`
  })
}


function call()  {
  let data  =  document.getElementById('name').value
  console.log(data)
  apiAuth(String(data))
}

function myBooks()  {
  apiBook()
}


