import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
render() {
  return this.props.content.map((item) => (
    <HornedBeast
      key={item._id}
      title={item.title}
      img={item.image_url}
      description={item.description}
      showModal={this.props.cardModal}
    />
  ));
}
}
export default Main;