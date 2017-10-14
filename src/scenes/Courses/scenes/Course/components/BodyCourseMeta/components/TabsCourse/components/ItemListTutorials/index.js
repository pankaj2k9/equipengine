import React from 'react';
import PropTypes from 'prop-types';

import List, { ListRow, ListRowLeft, ListRowRight } from 'base_components/List';
import Button from 'base_components/Button';
import iconPlayButton from './play-button.svg';
import './styles.css';

const ItemListTutorials = () => {
    return (
        <List className="ItemListTutorials">
            <ListRow>
                <ListRowLeft>
                    <img src={iconPlayButton} alt="Play button icon" />
                    <div>
                        <p>Tutorial 1</p>
                        <p>00:05:25</p>
                    </div>
                </ListRowLeft>
                <ListRowRight>
                    <Button text="View" />
                </ListRowRight>
            </ListRow>
            <ListRow>
                <ListRowLeft>
                    <img src={iconPlayButton} alt="Play button icon" />
                    <div>
                        <p>Tutorial 1</p>
                        <p>00:05:25</p>
                    </div>
                </ListRowLeft>

                <ListRowRight>
                    <Button text="View" />
                </ListRowRight>
            </ListRow>
        </List>
    );
};

ItemListTutorials.propTypes = {};

export default ItemListTutorials;
