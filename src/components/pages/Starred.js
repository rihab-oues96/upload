import { useState } from "react";
import PagesHeader from "../../components/Layout/PagesHeader";
import star from "../../assets/icons/Star.svg";
import FileInput from "../Inputs/FileInput";

import TableHeader from "../Layout/TableHeader";

const Starred = ({ list }) => {
  const [starredList, setStarredList] = useState(list);

  const handleRemove = (id) => {
    const newList = starredList.filter((item) => item.id !== id);
    setStarredList(newList);
  };

  return (
    <div>
      <PagesHeader
        icon={star}
        pageName={"Starred Page"}
        filter={true}
        color="star-color"
      />
      <TableHeader header={["Name", "Date Starred", "Size", "Actions"]} />

      {starredList.length > 0 ? (
        starredList.map((item) => (
          <FileInput
            image={item.icon}
            name={item.name}
            date={item.date}
            size={item.size}
            deleted={true}
            type={item.type}
            onClick={handleRemove}
            id={item.id}
          />
        ))
      ) : (
        <span>No data found...</span>
      )}
    </div>
  );
};

export default Starred;
