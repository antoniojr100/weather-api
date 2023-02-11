import './App.css';
import { useState } from 'react';
import Form from './Form.js';

// build an app that let's the user search for a city and get the current temperature
// create a form with a text input 
// when the form is submitted, get the user;s input value and use it to call the API
// get back the API data and display the city and temperature on page
// error handling:  what if the user inputs an empty string? What if there is a typo or no data results from the API?


// Phase 1: 
  // Get the data from the API, make sure its working
// Phase 2:
  // Create the Form and connect it to the API
// Phase 3:
  // Error Handling:
    //1: a user enters an empty string
    // 2: a user types a city with a typo/doesn't exist within the API 
function App() {
  // state that hold the current temperature and city that 
  const [ temp, setTemp] = useState('');
  const [ city,setCity ] = useState('');

  // this piece of state holds the user's input
  const [ userInput, setUserInput ] = useState('');

  // this piece of state sets whether or not there was an error when the API call was made 
  const [ searchError, setSearchError] = useState(false);

  const getTemp = async() => {
    const url = new URL('https://api.openweathermap.org/data/2.5/weather')

    url.search = new URLSearchParams({
      appid: '29d10abcc8ed9530c9b9b1c8baee4392',
      q: userInput,
      units: 'metric'
    })
    try{
      const res = await fetch(url);
      const data = await res.json();

      // console.log(data);

      // the temperature rounded to the nearest whole number
      setTemp(data.main.temp.toFixed());
      setCity(data.name);

      // checks if search error is true, then sets it back to false
      if(searchError){
        setSearchError(false);
      }
    }
    catch(error){
      setSearchError(true);
    }
  }

  // getTemp();

  // a handle change function that will listen for when the user types and captures a value
  // this function needs to be given to Form.js through props 
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  // a handleSubmit that handles the form submission and will call our getTemp Function
  const handleSubmit = (e) => {
    e.preventDefault();
    getTemp();
  }
  
  return (
    <html>
      <body className="App">
        {/* header starts */}
        <header className="header">
          <div className="wrapper">
            <h1 className="text">Weather API</h1>
          </div>
        </header>
        {/* header ends */}

        {/* form starts */}
        <section className="form-container">
          <div className="wrapper">
            <Form 
              // functions
              handleChange={handleChange}
              handleSubmit={handleSubmit}

              // state
              userInput={userInput}
              searchError={searchError}
            />

            {
              // use a ternary to check if there is an error, if there is: show error message, if not show temperature
              searchError ? <p className="form-text">Sorry, try your search again</p> : <p className="form-text">The temperature in <span className="city-name">{city}</span> is {temp}° celcius.</p>
            }

          </div>
        </section>
        {/* form ends */}

        {/* footer starts */}
        <footer>
          <div className="wrapper">
            <p className="text">Created by <span className="name">Antonio Arredondo</span></p>
          </div>
        </footer>
        {/* footer ends */}
      </body>
    </html>
  );
}

export default App;
