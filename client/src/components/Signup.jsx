import React from "react";
import { Form, Input, FormGroup, Label } from "reactstrap";
function Signup() {
  let reqObject = {};
  function handleChange(e) {
    reqObject[e.target.name] = e.target.value;
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`submitting: `, reqObject)
    fetch("http://localhost:4000/api/users/newuser", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(
        reqObject,
      ),
    })
      .then(async (res) => {
        if (!res.ok) {
          let error = await res.json()
        
          console.log(error)
        } else {
          e.target.reset(); // TODO: change this so redirected instead of just form reset
          console.log("user created");

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
          <Label for="firstName">
            First Name
          </Label>{" "}
          <Input
            id="firstName"
            name="firstName"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="lastName">
            Last Name
          </Label>{" "}
          <Input
            id="lastName"
            name="lastName"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="email">
            Email Address
          </Label>{" "}
          <Input
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Input type="submit" id="submit-button" />

      </Form>
    </div>
  )
}

export default Signup