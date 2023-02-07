import "./PagesHeader.scss";

const PagesHeader = ({ icon, pageName, filter, color }) => {
  return (
    <div className="page-title">
      {icon && (
        <div className={`icon ${color}`}>
          <img src={icon} alt="icon" />
        </div>
      )}

      <div className="name">
        <h1>{pageName}</h1>
      </div>

      {filter && (
        <select className="filter">
          <option value="date">By Date</option>
          <option value="name">By Name</option>
          <option value="size">By Size</option>
        </select>
      )}
    </div>
  );
};

export default PagesHeader;
