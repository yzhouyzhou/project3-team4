import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { TextArea, FormBtn } from "../components/Form";

class Detail extends Component {
  state = {
    patient: {},
    chat: ""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPatient(this.props.match.params.id)
      .then(res => this.setState({ patient: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.chat) {
      API.savePatientChat({
        patientId: this.props.match.params.id,
        chathistory: this.state.chat
      })
        .then(res => this.loadPatients())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Hello {this.state.patient.name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Detail</h1>
              <p>
                {this.state.patient.name} | {this.state.patient.phone} | {this.state.patient.primaryDrInfo} | {this.state.patient.insuranceInfo}
              </p>
              <p>
                {this.state.patient.lifechathistory ? (this.state.patient.lifechathistory.length ?
                  this.state.patient.lifechathistory.map(chat =>
                    chat.chathistory + " ") : "")
                  : ""}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <form>
              <TextArea
                value={this.state.chat}
                onChange={this.handleInputChange}
                name="chat"
                placeholder="Chat"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Send
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
