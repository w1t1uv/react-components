import React from 'react';
import { urlObject } from './server';
import SearchBar from './SearchBar';
// import { OutputSection } from './OutputSection';

export class PokemonSearch extends React.Component<unknown, { value: string }> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      value: '',
    };
  }

  handleChange() {
    const input = document.getElementById('search-input') as HTMLInputElement;
    const value = input.value;
    this.setState({
      value: value,
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
      console.log(data);
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
        {/*<OutputSection />*/}
      </div>
    );
  }
}
