import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activateNote } from "../../actions/notes";

export const JournalEntry = ({ id, date, title, body, url }) => {
  // console.log(id,date,title,body,url);
  const noteDate = moment(date);
  //console.log(noteDate);
  const dispatch = useDispatch();
  const note = {
    date,
    title,
    body,
    url,
  };
  const handleEntryClick = () => {
    dispatch(activateNote(id, note));
  };
  return (
    <div
      className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
      onClick={handleEntryClick}
    >
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div
        className="journal__entry-date-box
            "
      >
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("D")}</h4>
      </div>
    </div>
  );
};