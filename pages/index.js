import Link from 'next/link';
import * as React from 'react';
import { withRouter } from 'next/router';
import * as R from 'ramda';
import Header from '../components/header';
import { FilterableNumbersList } from '../components/FilterableNumbersList';

const TEN_THOUSAND = 10000;

const numbers = R.range(1, TEN_THOUSAND).map(R.toString);

class Index extends React.Component {
  setQuery = e => {
    const searchInput = e.target.value;

    this.props.router.replace({
      pathname: '/',
      query: { q: searchInput }
    });
  };

  render() {
    const searchInput = this.props.router.query.q;
    const filteredNumbers = searchInput
      ? numbers.filter(number => number.includes(searchInput))
      : numbers;

    return (
      <main>
        <Header />
        <FilterableNumbersList
          numbers={filteredNumbers}
          setQuery={this.setQuery}
          query={this.props.router.query.q}
        />
      </main>
    );
  }
}

export default withRouter(Index);
