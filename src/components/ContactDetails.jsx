import React from 'react';
import { useParams,Link } from 'react-router-dom';

const ContactDetails = () => {
const {name} = useParams();
    return (
        <div>
            <h4>This is the exact thing you are looking for!  </h4>

                <h2>Wecome to the <span> {name} </span> section.</h2>
                <Link to={"/contact"} className="link">Back to Contact</Link>
          
        </div>
    );
}

export default ContactDetails;


