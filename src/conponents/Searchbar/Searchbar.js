import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { toast } from 'react-toastify';

import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  hundleChange = event => {
    event.preventDefault();
    this.setState({ searchValue: event.currentTarget.value });
  };
  hundleSubmit = event => {
    event.preventDefault();
    if (this.state.searchValue.trim() === '') {
      return toast.error('Enter the names of the pictures');
    }
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.hundleSubmit} className={s.searchForm}>
          <button type="submit" className={s.searchForm_button}>
            <span className={s.searchForm_button_label}>Search</span>
          </button>

          <input
            className={s.searchForm_input}
            type="text"
            value={this.state.searchValue}
            onChange={this.hundleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  Searchbar: PropTypes.func,
};
