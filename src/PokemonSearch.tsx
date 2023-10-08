import React from 'react';
import { urlObject } from './server';
import SearchBar from './SearchBar';
import { Pokemon } from './Pokemon';

interface IState {
  value: string;
  name: string;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
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
    };
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
    });
  }

  handleClick() {
    const input = document.getElementById('search-input') as HTMLInputElement;
    const value = this.state.value.trim().toLowerCase();
    if (!value.length) return;
    this.search(value);
    input.value = '';
  }

  async search(name: string) {
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
      });
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }

  render() {
    const value = this.state.value;

    return (
      <div>
        <SearchBar
          value={value}
          onValueChange={this.handleChange}
          onButtonClick={this.handleClick}
        />
        <Pokemon
          name={this.state.name}
          height={this.state.height}
          isDefault={this.state.isDefault ? 'Yes' : 'No'}
          order={this.state.order}
          weight={this.state.weight}
        />
      </div>
    );
  }
}
