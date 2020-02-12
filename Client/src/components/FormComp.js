import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const outerDiv = {
  maxWidth: "50%",
  margin: "0 auto",
  textAlign: "center"
};

export default class FormComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      gender: "",
      married: "",
      education: "",
      selfEmployed: "",
      applicantIncome: "",
      coApplicantIncome: "",
      loanAmount: "",
      loanAmountTerm: "",
      propertyArea: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.fullName,
      gender: this.state.gender,
      married: this.state.married,
      education: this.state.education,
      self_employed: this.state.selfEmployed,
      applicant_income: this.state.applicantIncome,
      coapplicant_income: this.state.coApplicantIncome,
      loan_amount: this.state.loanAmount,
      loan_amount_term: this.state.loanAmountTerm,
      property_area: this.state.propertyArea
    };
    fetch("http://localhost:3001/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success: ", data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div style={outerDiv}>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="fullname">Full Name</Label>
            <Input
              type="text"
              name="fullName"
              id="fullName"
              onChange={this.onChange}
              value={this.state.fullName === null ? "" : this.state.fullName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="gender">Gender</Label>
            <Input
              type="text"
              name="gender"
              id="gender"
              onChange={this.onChange}
              value={this.state.gender === null ? "" : this.state.gender}
            />
          </FormGroup>
          <FormGroup>
            <Label for="married">Married?</Label>
            <Input
              type="text"
              name="married"
              id="married"
              onChange={this.onChange}
              value={this.state.married === null ? "" : this.state.married}
            />
          </FormGroup>
          <FormGroup>
            <Label for="education">Education</Label>
            <Input
              type="text"
              name="education"
              id="education"
              onChange={this.onChange}
              value={this.state.education === null ? "" : this.state.education}
            />
          </FormGroup>
          <FormGroup>
            <Label for="selfEmployed">Self Employed</Label>
            <Input
              type="text"
              name="selfEmployed"
              id="selfEmployed"
              onChange={this.onChange}
              value={
                this.state.selfEmployed === null ? "" : this.state.selfEmployed
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="applicantIncome">Applicant Income</Label>
            <Input
              type="text"
              name="applicantIncome"
              id="applicantIncome"
              onChange={this.onChange}
              value={
                this.state.applicantIncome === null
                  ? ""
                  : this.state.applicantIncome
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="coApplicantIncome">Co-Applicant Income</Label>
            <Input
              type="text"
              name="coApplicantIncome"
              id="coApplicantIncome"
              onChange={this.onChange}
              value={
                this.state.coApplicantIncome === null
                  ? ""
                  : this.state.coApplicantIncome
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="loanAmount">Loan Amount</Label>
            <Input
              type="text"
              name="loanAmount"
              id="loanAmount"
              onChange={this.onChange}
              value={
                this.state.loanAmount === null ? "" : this.state.loanAmount
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="loanAmountTerm">Loan Amount Term</Label>
            <Input
              type="text"
              name="loanAmountTerm"
              id="loanAmountTerm"
              onChange={this.onChange}
              value={
                this.state.loanAmountTerm === null
                  ? ""
                  : this.state.loanAmountTerm
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="propertyArea">Property Area</Label>
            <Input
              type="text"
              name="propertyArea"
              id="propertyArea"
              onChange={this.onChange}
              value={
                this.state.propertyArea === null ? "" : this.state.propertyArea
              }
              placeholder="Rural, Suburban, Semi-Urban"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
