import React from 'react';
import { urlObject } from './server';

export class SearchBar extends React.Component<unknown, { searchDone: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      searchDone: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.search = this.search.bind(this);
  }

  handleSearch() {
    const input = document.getElementById('search-input') as HTMLInputElement;
    const name = input.value.trim().toLowerCase();
    if (!name.length) return;
    this.search(name);
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
    return (
      <div className="wrapper">
        <input type="text" id="search-input" className="input" />
        <button id="search-button" className="button" onClick={this.handleSearch}>
          search
        </button>
      </div>
    );
  }
}

export default SearchBar;
