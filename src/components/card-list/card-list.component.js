import React from 'react';
import PropTypes from 'prop-types';
import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ monsters }) => {
    return (
        <div className='card-list'>
            {monsters.map((monster) => (
                <Card key={monster.id} monster={monster}></Card>
            ))}
        </div>
    );
};
CardList.propTypes = {};

export default CardList;
