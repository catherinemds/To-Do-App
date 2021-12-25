import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./TodoItem.css";

function TodoItem(props) {
  const onComplete = () => {
    alert("Ya completaste el todo " + props.text);
  };
  const onDelete = () => {
    alert("Borraste el todo " + props.text);
  };
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        {props.completed ? <CheckCircleIcon /> : <CircleOutlinedIcon />}
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <HighlightOffIcon />
      </span>
    </li>
  );
}

export default TodoItem;
