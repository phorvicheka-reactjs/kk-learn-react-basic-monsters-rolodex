import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
    state = {
        monsters: [],
        searchField: '',
        title: ''
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    handleOnChange = (event) => {
        this.setState({
            searchField: event.target.value,
            title: event.target.value
        });
    }

    render() {
        const { monsters, searchField, title } = this.state;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });

        return (
            <div className='App'>
                <h1>{title}</h1>
                <SearchBox
                    placeholder='search monsters'
                    handlerOnChange={this.handleOnChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
