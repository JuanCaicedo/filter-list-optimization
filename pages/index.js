import Link from 'next/link';
import * as React from 'react';
import { withRouter } from 'next/router';
import * as R from 'ramda';
import { FilterableNumbersList } from '../components/FilterableNumbersList';

const TEN_THOUSAND = 10000;

const numbers = R.range(1, TEN_THOUSAND).map(R.toString);

class Index extends React.Component {
  render() {
    return (
      <main>
        <h1>Searchable numbers list</h1>
        <FilterableNumbersList numbers={numbers} />
      </main>
    );
  }
}

export default withRouter(Index);
