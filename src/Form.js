// This will be the form that allows to user to search for their city
                // function, state      , function
const Form = ({handleChange, userInput, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="userSearch" className="text">Please enter your city name: </label>
            <input
                type="text"
                id="userSearch"
                onChange={handleChange}
                value={userInput}
                required
            />
            <button type="submit text">Search</button>
            {/* {searchError ? <p>Please try your search again.</p> : null} */}
        </form>
    )
}

export default Form;