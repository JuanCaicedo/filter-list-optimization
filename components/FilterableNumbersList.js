import * as React from 'react';
import { NumbersList } from './NumbersList';

export class FilterableNumbersList extends React.Component {
  render() {
    return (
      <section>
        <input
          type="text"
          placeholder="Search numbers"
          value={this.props.query}
          onChange={this.props.setQuery}
        />
        <NumbersList numbers={this.props.numbers} />
      </section>
    );
  }
}
