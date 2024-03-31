// setting current and maximum dates for input
// const currentDate = new Date();
// document.querySelector("input").value = "2024-02-28";
// document.querySelector("input").max = "2024-02-28";

// // setting event listener to display image when submit button is clicked
// document.querySelector("button").addEventListener("click", getPicture);

// // YOUR TASK IS TO IMPLEMENT THE FOLLOWING FUNCTION
// function getPicture() {
// take value of date input from html
//   
// use the url to fetch data
// once the data is received, store it in the localStorage with key "apod"
// then display it in html
// if error is occured, display the error message

// const input = document.querySelector("input[type='date']")
// const button = document.querySelector('button')
// const image = document.querySelector('img.apod')
// const error = document.querySelector('.error')

// button.addEventListener('click', getPicture)

function getPicture() {
    // take value of date input from html
    const pickedDate = document.querySelector("input").value
    console.log(pickedDate)
    const url = `https://api.nasa.gov/planetary/apod?date=${pickedDate}&api_key=uJhbcUzhjXUogLK3Ic5zfBMZLJEPfSdeMQPk7SBw`
      fetch(url)
      .then(response => response.json())
      .then(data => {
          localStorage.setItem('apod', data);
  
          let image = document.querySelector(".apod");
          image.src = data.url;
          console.log(data)
      })
      .catch(err => {
          let error = document.querySelector(".error");
          error.textContent = err;
      }
      )
  }