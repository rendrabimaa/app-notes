import React from "react";
import { Link } from "react-router-dom";

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en", options);
};

function NoteItem({ id, title, time, summary, onDelete }) {
  return (
    <div className="note-container">
      <div className="note-item-left">
        <Link to={`/note/${id}`}><h2 className="title-item">{title}</h2></Link>
        <p className="time">{showFormattedDate(time)}</p>
        <p>{summary}</p>
      </div>
      <div className="note-item-right">
        <Link to={`/note/${id}`}><i class="fa-regular fa-pen-to-square"></i></Link>
        <i class="fa-solid fa-circle-xmark" onClick={() => onDelete(id)}></i>
      </div>
    </div>
  )
}

export default NoteItem;