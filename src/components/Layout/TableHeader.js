import "../Layout/TableHeader.scss";

const TableHeader = ({ header }) => {
  return (
    <div className="table-header">
      <tr>
        {header.map((item) => (
          <td>{item}</td>
        ))}
      </tr>
    </div>
  );
};

export default TableHeader;
