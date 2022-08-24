import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
render() {
  
  if (this.props.numOfHorns.horns ==='1'){
    const hornArr= this.props.content.filter(item => item.horns ===1)
  return hornArr.map ((item) => (
    <HornedBeast
      key={item._id}
      title={item.title}
      img={item.image_url}
      description={item.description}
      horns={item.horns}
    showModal={this.props.cardModal}
    />
  ))
  } else if (this.props.numOfHorns.horns ==='2'){
  const hornArr= this.props.content.filter(item => item.horns ===2)
  return hornArr.map((item) => (
    <HornedBeast
      key={item._id}
      title={item.title}
      img={item.image_url}
      description={item.description}
      horns={item.horns}
      showModal={this.props.cardModal}
    />
  ));
  }
  else if (this.props.numOfHorns.horns ==='3'){
  const hornArr= this.props.content.filter(item => item.horns ===3)
  return hornArr.map((item) => (
    <HornedBeast
      key={item._id}
      title={item.title}
      img={item.image_url}
      description={item.description}
      horns={item.horns}
      showModal={this.props.cardModal}
        />
  ));
  }
  else if (this.props.numOfHorns.horns ==='100'){
  const hornArr= this.props.content.filter(item => item.horns ===100)
  return hornArr.map((item) => (
    <HornedBeast
      key={item._id}
      title={item.title}
      img={item.image_url}
      description={item.description}
      horns={item.horns}
      showModal={this.props.cardModal}
        />
  ));
  }

  else {
       return this.props.content.map((item) => (
        <HornedBeast
          key={item._id}
          title={item.title}
          img={item.image_url}
          description={item.description}
          horns={item.horns}
          showModal={this.props.cardModal}
          />
      ))

}
  }

  
  /*let hornArr;
switch (this.props.numOfHorns.horns) {
  
  case 1 :
     const hornArr = this.props.content.filter(item => item.horns ===1)
    return hornArr.map ((item) => (
      <HornedBeast
        key={item._id}
        title={item.title}
        img={item.image_url}
        description={item.description}
        horns={item.horns}
      showModal={this.props.cardModal}
      />
    ));    

    case 2 : 
    const hornArr =this.props.content.filter(item => item.horns ===2)
    return hornArr.map ((item) => (
      <HornedBeast
        key={item._id}
        title={item.title}
        img={item.image_url}
        description={item.description}
        horns={item.horns}
      showModal={this.props.cardModal}
      />
    ));
      
    case 3 :
    const hornArr =this.props.content.filter(item => item.horns ===3)
      return hornArr.map ((item) => (
        <HornedBeast
          key={item._id}
          title={item.title}
          img={item.image_url}
          description={item.description}
          horns={item.horns}
        showModal={this.props.cardModal}
        />
      ));

      case 100 : 
       const hornArr =this.props.content.filter(item => item.horns ===100)
       hornArr.map ((item) => (
        <HornedBeast
          key={item._id}
          title={item.title}
          img={item.image_url}
          description={item.description}
          horns={item.horns}
         showModal={this.props.cardModal}
        />
      ));
        break;

      default : 
      return this.props.content.map((item) => (
        <HornedBeast
          key={item._id}
          title={item.title}
          img={item.image_url}
          description={item.description}
          showModal={this.props.cardModal}
          />
      ))

      */}


export default Main;