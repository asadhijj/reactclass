import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    numOfVotes: "",
  };
}
increment = () => {
  this.setState({
    numOfVotes: this.state.numOfVotes + "😻",
  });
};

render() {
  return (
    <Card style={{ width: "18rem"}} className={'animal-card'}>
      <Card.Body>
        <Card.Title>
          <h2>{this.props.title}</h2>
        </Card.Title>
        <Card.Img
          className={"img-card"}
          variant="top"
          src={this.props.img}
          onClick={this.increment}
        />
        <Card.Text>
          <p>{this.props.description}</p>
        </Card.Text>
        <Card.Text>😻 Number of Votes : {this.state.numOfVotes}</Card.Text>
        <Button
          onClick={() => {
            this.props.showModal(
              this.props.title,
              this.props.img,
              this.props.description
            );
          }}
        >
          Modal
        </Button>
      </Card.Body>
    </Card>
  );
}
}

export default HornedBeast;