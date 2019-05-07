import Link from 'next/link';
import * as React from 'react';
import { withRouter } from 'next/router';
import * as R from 'ramda';
import Header from '../components/header';
import { OrbsList } from '../components/OrbsList';

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
        <section>
          <input
            type="text"
            placeholder="Search orbs"
            value={this.props.router.query.q}
            onChange={this.setQuery}
          />
          <OrbsList orbs={filteredOrbs} />
        </section>
      </main>
    );
  }
}

export default withRouter(Index);
