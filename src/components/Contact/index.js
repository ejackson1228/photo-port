import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [ formState, setFormState ] = useState({ name: '', email: '', message: ''}); // set initial states to empty strings
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e)  {
        if(e.target.name ==='email') {
        const isValid = validateEmail(e.target.value); //isValid returns a boolean
        console.log(isValid);
        // isValid conditional statement
        if(!isValid) {
            setErrorMessage('Your email is invalid!');
        } else {
            setErrorMessage('');
        }
        } else {
            if(!e.target.value.length) { //if the field is empty, set error message to 
                setErrorMessage(`${e.target.name} is required.`); // this 
            } else {
                setErrorMessage(''); // set error message to empty string 
            }
        }
        setFormState({...formState, [e.target.name]: e.target.value }) // use the spread operator to prevent the other values from changing (i.e. email or message)

        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value }); // if there's not error message, set the new state to the value of the target
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    //onBlur attribute only acts when the target is no longer in focus 

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} /> 
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage &&  ( // similar to an if statement
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}


export default ContactForm;