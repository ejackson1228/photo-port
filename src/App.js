import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false); //false prevents the contact form from showing on initial page navigation 
  
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav // passing  these getter and setter functions will allow this component to modify the state in the APP component, which will conditionally render based on selection
        categories = {categories}
        setCurrentCategory = {setCurrentCategory}
        currentCategory  = {currentCategory}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
        ></Nav>
      <main>
        {!contactSelected ? ( // if contact is not selected, display gallery and about
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : ( // else display contact form 
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
