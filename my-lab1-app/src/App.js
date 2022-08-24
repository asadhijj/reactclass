import React from "react";
import content from "./components/content";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/selectBeast";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      img: "",
      disc: "",
    };
  }

  showModal = (title, img, disc) => {
    this.setState({
      show: true,
      title: title,
      img: img,
      disc: disc,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className={"cards-container"}>
          <Main content={content} cardModal={this.showModal} />
        </div>
        <SelectedBeast
          beastData={this.state}
          show={this.state.show}
          closeCard={this.handleClose}
        />

        <Footer />
      </div>
    );
  }
}
export default App;
