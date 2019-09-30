import React from 'react';
import './form.css';

 const Form = (props) => {
     return(
     <form onSubmit={props.Weather}>
         <h5>The name of city</h5>
         <input type='text' name='city' placeholder='Please input' defaultValue=''/>
         <button type='submit' value='found'>Enter</button>
     </form>
     )
 };

export default Form;