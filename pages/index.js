import Link from 'next/link';
import * as R from 'ramda';
import Header from '../components/header';
import { OrbsList } from '../components/OrbsList';

const ONE_MILLION = 100000;

const orbs = R.range(1, ONE_MILLION);

class Index extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <section>
          <OrbsList orbs={orbs} />
        </section>
      </main>
    );
  }
}

export default Index;
