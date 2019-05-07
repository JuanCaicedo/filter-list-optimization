import * as React from 'react';
import { OrbsList } from './OrbsList';

export class FilterableOrbsList extends React.Component {
  render() {
    return (
      <section>
        <input
          type="text"
          placeholder="Search orbs"
          value={this.props.query}
          onChange={this.props.setQuery}
        />
        <OrbsList orbs={this.props.orbs} />
      </section>
    );
  }
}
