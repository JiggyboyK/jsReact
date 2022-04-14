import React, { Component } from "react";
import './App.css'
// import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
// import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="login form">
      <form >
        <h1>myWebsite.com</h1>
        <h6 >signUP for free nft's</h6>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">mail is safe with us.</div>
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
              <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    )
}
}


export default App;
