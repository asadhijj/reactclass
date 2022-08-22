import React from "react";
import HornedBeast from "./HornedBeast";
import content from "./content"

let beastContent = content.map (item =>
    <HornedBeast
      key={item._id}
      title = {item.title}
      img ={item.image_url}
      description = {item.description}
      />
    )

class Main extends React.Component {

    render() {
        return (
            beastContent
        )
    }
}
export default Main;