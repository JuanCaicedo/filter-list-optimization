export const OrbsList = ({ orbs }) => (
  <div>{orbs.map((orb, i) => <div key={i}>{orb}</div>)}</div>
);
