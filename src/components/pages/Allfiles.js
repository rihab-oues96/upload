import FileInput from "../Inputs/FileInput";
import PagesHeader from "../../components/Layout/PagesHeader";
import TableHeader from "../../components/Layout/TableHeader";

import fileStructure from "../../assets/icons/FileStructure.svg";

import "../pages/AllFiles.scss";

const icon = fileStructure;
const pageName = "All Files Page";
const AllFiles = ({ list, setList }) => {
  return (
    <div className="all-files">
      <div>
        <PagesHeader
          icon={icon}
          pageName={pageName}
          filter={true}
          color="all-file-color"
        />
      </div>

      <TableHeader header={["Name", "Date Created", "Size", "Actions"]} />

      {list.length > 0 ? (
        list.map((item) => (
          <FileInput
            image={item.icon}
            name={item.name}
            date={item.date}
            size={item.size}
            archived={true}
            starred={true}
            type={item.type}
            setList={setList}
            list={list}
            id={item.id}
          />
        ))
      ) : (
        <span>No data found...</span>
      )}
    </div>
  );
};

export default AllFiles;
