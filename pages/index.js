import Link from 'next/link';
import * as React from 'react';
import { withRouter } from 'next/router';
import * as R from 'ramda';
import Header from '../components/header';
import { OrbsList } from '../components/OrbsList';

const ONE_MILLION = 100000;

const orbs = R.range(1, ONE_MILLION);

class Index extends React.Component {
  setQuery = e => {
    // const searchInput = e.target.value;
    const searchInput = 'test';

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
          <button onClick={this.setQuery}>Update search</button>
          <OrbsList orbs={orbs} />
        </section>
      </main>
    );
  }
}

export default withRouter(Index);
