import React from 'react';
import clsx from 'clsx';
import SearchIcon from './Icon/SearchIcon';
import CloseIcon from './Icon/CloseIcon';






interface Props {

}

interface States {
    searchText: string;

}

export default class SearchBar extends React.Component <Props,States>{
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
        } as States
    }
    render() {
        return (
            <div>
                <input type='text' name='searchbox' >

                </input>
            </div>
        )
    }
}