import React from 'react'
import { Form, Input, FormGroup, Label, Button } from "reactstrap";

function Login() {
    let reqObject = {};
    function handleChange(e) {
      reqObject[e.target.name] = e.target.value;
    }
    function handleSubmit(e) {
      e.preventDefault();
      console.log(`submitting: `, reqObject)
      fetch("http://localhost:4000/api/users/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(
          reqObject,
        ),
      })
        .then(async (res) => {
            console.log("there's a res")
          if (!res.ok) {
            let error = await res.json()
            console.log(error)
          } else {
            e.target.reset(); // TODO: change this so redirected instead of just form reset
            console.log("user logged in");
  
          }
        })
  
        .catch((error) => {
          console.log(error);
        });
    }
    return (
      <div>
        <Form onSubmit={handleSubmit}>
        <FormGroup className="form-group">
            <Label for="email">
              Email
            </Label>{" "}
            <Input
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="form-group">
            <Label for="password">
              Password
            </Label>{" "}
            <Input
            type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <Button type="submit" id="submit-button">Log In</Button>
  
        </Form>
      </div>
    )
}

export default Login