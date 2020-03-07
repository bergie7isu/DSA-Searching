import React, { Component } from 'react';

let binaryCounter = 0;

class Input extends Component {
  constructor(props) {
    const arrayString = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
    const arrayToSearch = arrayString.split(' ').map(item => Number(item));
    const sortedArrayToSearch = arrayToSearch.map(item => item).sort((a, b) => a - b);
    super(props);
    this.state = {
      linearCount: null,
      linearFound: null,
      binaryCount: null,
      binaryFound: null,
      arrayToSearch: arrayToSearch,
      sortedArrayToSearch: sortedArrayToSearch
    };
  };
  clearResults() {
    this.setState({
      linearCount: null,
      linearFound: null,
      binaryCount: null,
      binaryFound: null
    });
  };
  linearSearch(array, value) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        count++;
        this.setState({
          linearCount: count,
        });
        return i;
      };
      count++;
    };
    this.setState({
      linearCount: count,
    });
    return -1;
  };
  binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length - 1 : end;
    if (start > end) {
      binaryCounter++;
      this.setState({
        binaryCount: binaryCounter
      });
      return -1;
    };
    const index = Math.floor((start + end) / 2);
    const item = array[index];
    if (item === value) {
      binaryCounter++;
      this.setState({
        binaryCount: binaryCounter
      });
      return index;
    } else if (item < value) {
      binaryCounter++;
      this.setState({
        binaryCount: binaryCounter
      });
      return this.binarySearch(array, value, index + 1, end);
    } else if (item > value) {
      binaryCounter++;
      this.setState({
        binaryCount: binaryCounter
      });
      return this.binarySearch(array, value, start, index - 1);
    };
};
  handleSubmit = event => {
    event.preventDefault();
    const linearResult = this.linearSearch(this.state.arrayToSearch, Number(this.refs.number.value));
    linearResult === -1 ? this.setState({linearFound: 'no'}) : this.setState({linearFound: 'yes'});
    const binaryResult = this.binarySearch(this.state.sortedArrayToSearch, Number(this.refs.number.value));
    binaryCounter = 0;
    binaryResult === -1 ? this.setState({binaryFound: 'no'}) : this.setState({binaryFound: 'yes'});
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='number'>
            What number are we looking for?
          </label>
          <input
            type='number'
            name='number'
            id='number'
            ref='number'
            onChange={e => this.clearResults()}
          />
          <button type='submit'>Find the number!</button>
        </form>
        <div><br/>Linear Result: </div>
        <div>
          {!this.state.linearFound ? '' : this.state.linearFound === 'yes' ? 'MATCH FOUND!' : 'NO MATCH FOUND!'}
        </div>
        <div>
          {!this.state.linearFound ? '' : this.state.linearFound === 'yes' ? `We found this result in ${this.state.linearCount} tries.` : `It took us ${this.state.linearCount} tries to figure this out.`}
        </div>
        <div><br/>Binary Result:</div>
        <div>
          {!this.state.binaryFound ? '' : this.state.binaryFound === 'yes' ? 'MATCH FOUND!' : 'NO MATCH FOUND!'}
        </div>
        <div>
          {!this.state.binaryFound ? '' : this.state.binaryFound === 'yes' ? `We found this result in ${this.state.binaryCount} tries.` : `It took us ${this.state.binaryCount} tries to figure this out.`}
        </div>
      </div>
    );
  };
};

export default Input;