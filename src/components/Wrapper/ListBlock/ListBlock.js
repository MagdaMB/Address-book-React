import React from 'react';
import './ListBlock.css';
import ListItem from './ListItem/ListItem';
import { personalData } from '../../../_data/personalData';

class ListBlock extends React.Component {
    render() {
        return(
            <div className="ListBlock">
                <h2>Personal Data</h2>
                <ul>
                    <ListItem 
                        name={personalData[0].name}
                        phone={personalData[0].phone}
                        city={personalData[0].city}
                    />
                </ul>
            </div>
        )
    }
}

export default ListBlock;