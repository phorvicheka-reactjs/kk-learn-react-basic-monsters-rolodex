import React from 'react';
import PropTypes from 'prop-types';
import './card-list.styles.css';

const CardList = (props) => {
    console.log(props);
    return <div className='card-list'>{props.children}</div>;
};
CardList.propTypes = {};

export default CardList;
