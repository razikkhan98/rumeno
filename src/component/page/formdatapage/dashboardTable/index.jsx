import React from "react";

const DashboardTable = ({ data }) => {
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
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`row-border row-shadow ${
                      index % 2 === 0 ? "table-info" : "table-secondary"
                    }`}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{item.uid}</td>
                    <td>{item.parent}</td>
                    <td>{item.handle}</td>
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
