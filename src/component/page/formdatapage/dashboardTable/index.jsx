import React from "react";

const DashboardTable = ({ data }) => {
  console.log("data: ", data);

  return (
    <div className="dashboard-table">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <table className="table">
              <thead>
                <tr className="heads">
                  <th scope="col" className="text-chinese-black-color">
                    #
                  </th>
                  <th scope="col" className="text-chinese-black-color">
                    Uid
                  </th>
                  <th scope="col" className="text-chinese-black-color">
                    Parent
                  </th>
                  <th scope="col" className="text-chinese-black-color">
                    Handle
                  </th>
                  <th scope="col" className="text-chinese-black-color">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <h6>Parents:</h6>
                {data?.parents?.map((parent, index) => (
                  <tr
                    key={index}
                    className={`row-border row-shadow ${
                      index % 2 === 0 ? "table-info" : "table-secondary"
                    }`}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{parent.uniqueId}</td>
                    <td>{parent.parentId}</td>
                    {/* <td>{parent.handle}</td> */}
                    <td>
                      <button className="dashboard-table-btn">Add</button>
                    </td>
                  </tr>
                ))}

                <h6>Children:</h6>
                {data?.children?.map((child, index) => (
                  <tr
                    key={index}
                    className={`row-border row-shadow ${
                      index % 2 === 0 ? "table-info" : "table-secondary"
                    }`}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{child.uniqueId}</td>
                    <td>{child.parentId}</td>
                    <td>{child.kidId}</td>
                    <td>
                      <button className="dashboard-table-btn">Add</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
