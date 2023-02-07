import { Link } from "react-router-dom";

import "./InfoCard.scss";

const InfoCard = ({ color, icon, state, path }) => {
  return (
    <div className="info-card-info">
      <div className={`icon ${color}`}>
        <img src={icon} alt="icon" />
      </div>
      <div className="text-info">
        <section className="info">4 {state} files</section>
        <Link to={path}>
          <section className="go">Go to View</section>
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
