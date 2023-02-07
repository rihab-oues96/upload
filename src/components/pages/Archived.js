import PagesHeader from "../../components/Layout/PagesHeader";
import FileInput from "../Inputs/FileInput";
import box from "../../assets/icons/Box.svg";

import TableHeader from "../Layout/TableHeader";
import { useState } from "react";

const Archived = ({ list }) => {
  const [archivedList, setArchivedList] = useState(list);
  const handleRemove = (id) => {
    const newList = archivedList.filter((item) => item.id !== id);
    setArchivedList(newList);
  };
  return (
    <div className="archived">
      <PagesHeader
        icon={box}
        pageName={"Archived Page"}
        filter={true}
        color="box-color"
      />
      <TableHeader header={["Name", "Date Archived", "Size", "Actions"]} />

      {archivedList.length > 0 ? (
        archivedList.map((item) => (
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

export default Archived;
