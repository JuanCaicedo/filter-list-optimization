import * as React from 'react';
import { NumbersList } from './NumbersList';
import { withRouter } from 'next/router';
import { DebounceInput } from 'react-debounce-input';

class _FilterableNumbersList extends React.Component {
  state = {
    query: this.props.router.query.q
  };

  updateRouter = query => {
    this.props.router.replace({
      pathname: '/',
      query: { q: query }
    });
  };

  updateQuery = e => {
    const value = e.target.value;
    this.setState({ query: value }, () => {
      this.updateRouter(value);
    });
  };

  render() {
    const { numbers } = this.props;
    const searchInput = this.state.query;
    const filteredNumbers = searchInput
      ? numbers.filter(number => number.includes(searchInput))
      : numbers;

    return (
      <section>
        <DebounceInput
          className="search-box"
          type="text"
          placeholder="Search numbers"
          value={this.state.query}
          onChange={this.updateQuery}
          debounceTimeout={300}
        />
        <NumbersList numbers={filteredNumbers} />
      </section>
    );
  }
}

export const FilterableNumbersList = withRouter(_FilterableNumbersList);
