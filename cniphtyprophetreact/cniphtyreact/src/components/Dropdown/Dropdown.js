import './Dropdown.css';



function Dropdown(props) {

    return (
        <div>
            <input type='radio' id={props.id} value={props.value} name={props.name} />
            <p>{props.text}</p>
        </div>
    )
}

export default Dropdown;