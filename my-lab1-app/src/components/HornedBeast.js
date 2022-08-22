import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



class HornedBeast extends React.Component {
  
    constructor(props){
        super (props)
        this.state = {
            numOfVotes : ''
        }
    }
    increment =() => {
        this.setState({
            numOfVotes : this.state.numOfVotes + '😻'
        })
    }

    render () {
        return (
            //<div>
                //<h2>{this.props.title}</h2>
               // <p>{this.props.description}</p>
               // <img src={this.props.img} alt ="image" title={this.props.title}></img>
                
            //</div>
           //<Card style={{ width: '18rem' }}>
             //<Card.Body>
             //  <Card.Title>{this.props.Title}</Card.Title>
              // <Card.Img variant="top" src={this.props.img} onClick ={this.increment} />
             //  <Card.Text>
              //   {this.props.description}
             //  </Card.Text>
             // <Card.Text>
             // 😻  Number of Votes : {this.state.numOfVotes}
            //  </Card.Text>
     // </Card.Body>
   // </Card>
   <CardGroup>
   <Card>
     <Card.Body>
       <Card.Title>{this.props.title}</Card.Title>
       <Card.Img variant="top" src={this.props.img} onClick ={this.increment} />
       <Card.Text>
       {this.props.description}
       </Card.Text>
         <Card.Text>
         😻  Number of Votes : {this.state.numOfVotes}
         </Card.Text>
     </Card.Body>
     <Card.Footer>
       <small className="text-muted">Last updated 0 secs ago</small>
     </Card.Footer>
   </Card>
   </CardGroup>

        )
    }
}

export default HornedBeast;