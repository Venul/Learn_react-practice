export default (props) => (
  <div>
    <h2>Car name: {props.name}</h2>
    <strong>Year: {props.year}</strong>
    {props.children}
  </div>
)