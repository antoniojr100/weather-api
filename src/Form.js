// This will be the form that allows to user to search for their city

const Form = ({handleChange, userInput, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="userSearch">Please enter your city name: </label>
            <input
                type="text"
                id="userSearch"
                onChange={handleChange}
                value={userInput}
                required
            />
            <button type="submit">Search</button>
            {/* {searchError ? <p>Please try your search again.</p> : null} */}
        </form>
    )
}

export default Form;