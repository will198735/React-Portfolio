
import React from 'react';
import '../pages/stylePages/Contact.css';


export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div class="col-auto">
    <label class="" for="autoSizingInput">Name:</label>
    <input type="text" class="form-control" id="autoSizingInput" placeholder=""></input>
  </div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address:</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">message:</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="col-auto">
    <button type="submit" class="btn btn-warning">Submit</button>
  </div>
    

     
    </div>
  );
}
