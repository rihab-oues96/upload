import React from "react";

import star from "../../assets/icons/Star.svg";
import box from "../../assets/icons/Box.svg";

import "../pages/Home.scss";
import Card from "../Card/Card";
import PagesHeader from "../Layout/PagesHeader";
import InfoCard from "../../components/Card/InfoCard";
import FileInput from "../Inputs/FileInput";

import { dataCard } from "../../utilities/constants";
import TableHeader from "../Layout/TableHeader";

const Home = ({ list }) => {
  return (
    <div className="home">
      <div className="cards">
        {dataCard.map((item) => (
          <Card
            imageCard={item.icon}
            type={item.type}
            progression={item.progression}
            usedSpace={item.usedSpace}
            Colorclass={item.color}
          />
        ))}
      </div>

      <div className="home-content">
        <PagesHeader pageName={"Recent Files"} />
        <div className="content">
          <div className="table">
            <TableHeader header={["Name", "Date Created", "Size"]} />

            {list.map((item) => (
              <FileInput
                image={item.icon}
                name={item.name}
                date={item.date}
                size={item.size}
                type={item.type}
              />
            ))}
          </div>
          <div className="home-card-info">
            <InfoCard
              icon={star}
              color={"star-color"}
              state={"starred"}
              path={"/starred"}
            />
            <InfoCard
              icon={box}
              color={"box-color"}
              state={"archived"}
              path={"/archived"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
