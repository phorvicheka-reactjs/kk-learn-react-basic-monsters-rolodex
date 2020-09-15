import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
    state = {
        monsters: [],
        searchField: '',
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });

        return (
            <div className='App'>
                <SearchBox
                    placeholder='search monsters'
                    handlerOnChange={(event) => {
                        this.setState({
                            searchField: event.target.value,
                        });
                    }}
                />
                <CardList name='MyCard' monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
