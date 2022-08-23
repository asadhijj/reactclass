import React from "react";
import content from "./components/content";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state ={
      title : " ",
      img : " ",
      disc : " ",
      nam : " ",

       }
  }
  
    Beast (titleValue, imgValue, discValue, namValue) {
      this.setState ({
        title : titleValue,
        img : imgValue,
        disc : discValue,
        name : namValue,
      })
    }
  render() {
    return (
      <div>
        <Header/>

        <Main JsonData={content}/>
        
        <Footer/>
      </div>
    )
  }
}
export default App;
