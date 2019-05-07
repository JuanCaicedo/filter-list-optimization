import * as React from 'react';
import { NumbersList } from './NumbersList';

export class FilterableNumbersList extends React.Component {
  state = {
    query: this.props.initialQuery
  };

  updateQuery = e => {
    const value = e.target.value;
    this.setState({ query: value }, () => {
      this.props.setQuery(value);
    });
  };

  render() {
    return (
      <section>
        <input
          type="text"
          placeholder="Search numbers"
          value={this.state.query}
          onChange={this.updateQuery}
        />
        <NumbersList numbers={this.props.numbers} />
      </section>
    );
  }
}
