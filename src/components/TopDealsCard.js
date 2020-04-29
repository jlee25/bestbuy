import React, { Component } from 'react';

const TopDealsCard = (props) => {
  console.log(props);
  return <li key={props.product.id}>{props.product.name}</li>;
}
 
export default TopDealsCard;