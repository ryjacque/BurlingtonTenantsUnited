import React from "react";
import { Form, Input, FormGroup, Label } from "reactstrap";
import "./Review.css";

export default function Review() {
  let reqObject = {
    city: "Burlington",
    state: "Vermont"
  };
  function handleChange(e) {
    reqObject[e.target.name] = e.target.value;
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`submitting: `, reqObject)
    fetch("http://localhost:4000/api/reviews/newreview", {
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
          console.log("review created");

        }
      })

      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <Form id="review-form" onSubmit={handleSubmit}>
        <FormGroup className="form-group">
          <Label for="landlordName">Landlord Name</Label>{" "}
          <Input
          id="landlordName"
          name="landlordName"
           onChange={handleChange} required />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="tenantAddress">Address</Label>{" "}
          <Input
            id="tenantAddress"
            name="address"
            placeholder="1234 Main St"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="tenantAddress2">Address 2</Label>{" "}
          <Input
            id="tenantAddress2"
            name="address2"
            placeholder="Apartment, studio, or floor"
            onChange={handleChange}
            
          />
        </FormGroup>

        <FormGroup className="form-group">
          <Label for="tenantCity">City</Label>{" "}
          <Input
            id="tenantCity"
            name="city"
            defaultValue="Burlington"
            onChange={handleChange}
            
          />
        </FormGroup>

        <FormGroup className="form-group">
          <Label for="tenantState">State</Label>{" "}
          <Input
            defaultValue="Vermont"
            id="tenantState"
            name="state"
            onChange={handleChange}
            
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="reviewContent">
            Review of Landlord and/or Property
          </Label>{" "}
          <Input
            id="reviewContent"
            name="reviewContent"
            type="textarea"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="tenantName">Tenant Name</Label>{" "}
          <Input placeholder="Not Required" id="tenantName" name="tenantName" 
          onChange={handleChange}/>
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="tenantEmail">Email Address</Label>{" "}
          <Input
            placeholder="Not Required"
            id="tenantEmail"
            onChange={handleChange}
            name="tenantEmail"
          />
        </FormGroup>
      
        <Input type="submit" id="submit-button" />
        
      </Form>
    </div>
  );
}
