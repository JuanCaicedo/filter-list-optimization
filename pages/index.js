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

    this.props.router.replace('/', {
      pathname: '/',
      query: { q: searchInput }
    });
  };

  render() {
    return (
      <main>
        <Header />
        <section>
          <input
            type="text"
            placeholder="Search orbs"
            onChange={this.setQuery}
          />
          <OrbsList orbs={orbs} />
        </section>
      </main>
    );
  }
}

export default withRouter(Index);
