export const NumbersList = ({ numbers }) => (
  <div>{numbers.map((number, i) => <div key={i}>{number}</div>)}</div>
);
