import React from 'react';
import { urlObject } from './server';
import SearchBar from './SearchBar';
import { Pokemon } from './Pokemon';
import { AllPokemon } from './AllPokemon';

interface IState {
  value: string;
  name: string;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
  searchDone: boolean;
  loading: boolean;
}

export class PokemonSearch extends React.Component<unknown, IState> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      value: '',
      name: '',
      height: 0,
      isDefault: false,
      order: 0,
      weight: 0,
      searchDone: false,
      loading: false,
    };
  }

  componentDidMount() {
    const storedQuery = localStorage.getItem('query');
    const storedState = localStorage.getItem('state');
    if (storedQuery && storedState) {
      const state = JSON.parse(storedState);
      this.setState({
        value: storedQuery,
        ...state,
      });
    }
  }

  handleChange() {
    const input = document.getElementById('search-input') as HTMLInputElement;
    const value = input.value;
    this.setState({
      value: value,
      name: '',
      height: 0,
      isDefault: false,
      order: 0,
      weight: 0,
      searchDone: false,
      loading: false,
    });
  }

  handleClick() {
    const value = this.state.value.trim().toLowerCase();
    if (!value.length) return;
    localStorage.setItem('query', value);
    this.search(value);
  }

  async search(name: string) {
    this.setState({
      value: '',
      name: '',
      height: 0,
      isDefault: false,
      order: 0,
      weight: 0,
      searchDone: false,
      loading: true,
    });
    const url = urlObject.url;
    try {
      const response = await fetch(`${url}/${name}`);
      if (!response.ok) {
        throw new Error(`Query execution error : ${response.status}`);
      }
      const data = await response.json();
      this.setState({
        value: data.name,
        name: data.name,
        height: data.height,
        isDefault: data.isDefault,
        order: data.order,
        weight: data.weight,
        searchDone: true,
        loading: false,
      });
      localStorage.setItem('state', JSON.stringify(data));
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }

  render() {
    const value = this.state.value;
    const searchDone = this.state.searchDone;
    const loading = this.state.loading;

    return (
      <div>
        <SearchBar
          value={value}
          onValueChange={this.handleChange}
          onButtonClick={this.handleClick}
        />
        {loading && <p className="loading">Loading</p>}
        {searchDone && (
          <Pokemon
            name={this.state.name}
            height={this.state.height}
            isDefault={this.state.isDefault ? 'Yes' : 'No'}
            order={this.state.order}
            weight={this.state.weight}
          />
        )}
        {!value && <AllPokemon />}
      </div>
    );
  }
}
