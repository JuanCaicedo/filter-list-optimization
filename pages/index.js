import Link from 'next/link';
import * as React from 'react';
import { withRouter } from 'next/router';
import * as R from 'ramda';
import Header from '../components/header';
import { FilterableOrbsList } from '../components/FilterableOrbsList';

const TEN_THOUSAND = 10000;

const orbs = R.range(1, TEN_THOUSAND).map(R.toString);

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
    const filteredOrbs = searchInput
      ? orbs.filter(orb => orb.includes(searchInput))
      : orbs;

    return (
      <main>
        <Header />
        <FilterableOrbsList
          orbs={filteredOrbs}
          setQuery={this.setQuery}
          query={this.props.router.query.q}
        />
      </main>
    );
  }
}

export default withRouter(Index);
