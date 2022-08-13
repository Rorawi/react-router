import React from 'react';
import { useParams } from 'react-router-dom';

const ContactDetails = () => {
const {name} = useParams();
    return (
        <div>
            <h4>This is the exact thing you are looking for!  </h4>

                <h2>Wecome to the <span> {name} </span> section.</h2>
          
        </div>
    );
}

export default ContactDetails;


