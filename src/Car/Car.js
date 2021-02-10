export default (props) => (
  <div style={{
    border: '1px solid #ccc',
    marginBottom: '10px',
    display: 'inline-block',
    padding: '10px'
  }}>
    <h2>Car name: {props.name}</h2>
    <p><strong>Year: {props.year}</strong></p>
    <input type="text" onChange={props.onChangeName} value={props.name}/>
    <button onClick={props.onDelete}>Delete</button>
  </div>
)