import React from 'react';
import PropTypes from 'prop-types';
import './CardGrid.css';
import useWindowDimensions from './WindowDimension.js';
import RecipeCard from '../RecipeCard';
import {Row, Col, Container} from 'react-bootstrap'


function max(num1, num2)
{
  if(num1 > num2)
    return num1;
  return num2;
}

const CardGrid = (props) => {
  const maxWidth = 1000;
  const { height, width } = useWindowDimensions();
  var cols = Math.floor(max(width,maxWidth) / 250);
  var rows = Math.ceil(props.num/cols);
  var rowComponents = [];
  for (var i = 0; i < rows; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      var colComponent = [];
      for(var j = 0; j< cols; j++) {
        colComponent.push(
          <Col >
            <RecipeCard/>
          </Col>
        );
      } 
      rowComponents.push(
        <Row>
          {colComponent}
        </Row>
        );
  }
  return (
    <div>
      <div>
        cols = {cols}  rows = {rows}  
      </div>
      <Container fluid="true">
        {rowComponents}
      </Container>
    </div>
  );
};

CardGrid.propTypes = {};

CardGrid.defaultProps = {};

export default CardGrid;