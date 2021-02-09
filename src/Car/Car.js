export default (props) => (
  <div>
    <h2>Car name: {props.name}</h2>
    <p><strong>Year: {props.year}</strong></p>
    <button onClick={props.onChangeTitle}>Click</button>
  </div>
)