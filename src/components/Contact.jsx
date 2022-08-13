import React from 'react';
// import ContactDetails from "./ContactDetails";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h1>This is my <span>Contact</span> page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, <br/>
            adipisicing elit. Asperiores reiciendis hic 
            cumque, esse enim impedit minus, dolorem provident,<br/>
             possimus non sapiente ullam numquam debitis officia
              cum at nobis excepturi libero.</p>
            <Link to={"/contactdetails:name"} className="link">ContactDetails</Link>
        </div>
    );
}

export default Contact;
