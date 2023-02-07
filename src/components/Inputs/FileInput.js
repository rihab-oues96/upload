import "../Inputs/FileInput.scss";

import star from "../../assets/icons/Star.svg";
import Box from "../../assets/icons/Box.svg";
import Del from "../../assets/icons/delete-icon.svg";

const FileInput = ({
  image,
  name,
  date,
  size,
  starred,
  archived,
  deleted,
  type,
  onClick,
  id,
  setList,
  list,
}) => {
  console.log(list);

  const starredHandler = (id) => {
    const starredList = list.map((item) =>
      item.id === id ? { ...item, starred: true } : item
    );
    setList(starredList);
  };

  const archivedHandler = (id) => {
    const archivedList = list.map((item) =>
      item.id === id ? { ...item, archived: true } : item
    );
    setList(archivedList);
  };
  return (
    <div className="file-input">
      <div className="input">
        <div className="name">
          <img
            src={image}
            alt="file"
            className={
              type === "document"
                ? "file-icon"
                : type === "image"
                ? "image-icon"
                : "video-icon"
            }
          />
          <span>{name}</span>
        </div>
        <span className="date">{date} </span>
        <span className="size">{size}</span>
        {(starred || archived || deleted) && (
          <div className="actions">
            {starred && (
              <div className="star" onClick={() => starredHandler(id)}>
                <img src={star} alt="star" />
              </div>
            )}
            {archived && (
              <div className="box" onClick={() => archivedHandler(id)}>
                <img src={Box} alt="box" />
              </div>
            )}

            {deleted && (
              <div className="delete" onClick={() => onClick(id)}>
                <img src={Del} alt="delete" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInput;
