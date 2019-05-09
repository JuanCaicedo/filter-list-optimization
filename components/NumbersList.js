export const NumbersList = ({ numbers }) => (
  <div>
    {numbers.map((number, i) => (
      <div key={i} className="number-row">
        {number}
      </div>
    ))}
  </div>
);
