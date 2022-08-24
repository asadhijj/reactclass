import React from "react";
import Form from 'react-bootstrap/Form';

class FormForHorns extends React.Component {
    render() {
        return (
            <Form.Select onChange={this.props.numOfHorns}>
            <option>-select-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
        )
    
}
}

export default FormForHorns;