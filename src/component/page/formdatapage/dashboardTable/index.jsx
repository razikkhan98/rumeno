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
                    S No.
                  </th>
                  <th scope="col" className="text-chinese-black-color">
                    UniqueId
                  </th>
                  <th scope="col" className="text-chinese-black-color">
                    Parent
                  </th>
                  <th scope="col" className="text-chinese-black-color">
                    Status
                  </th>
                  <th scope="col" className="text-chinese-black-color">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((parent, index) => (
                  <tr
                    key={index}
                    className={`row-border row-shadow ${
                      index % 2 === 0 ? "table-info" : "table-secondary"
                    }`}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{parent.uniqueId}</td>
                    <td>{parent.parentId}</td>
                    <td>
                      <span
                        style={{
                          backgroundColor:
                            parent.status.toLowerCase() === "completed"
                              ? "lightgreen"
                              : parent.status.toLowerCase() === "pending"
                              ? "lightcoral"
                              : "lightgray",
                          color: "white", // Ensures text is visible on all backgrounds
                          textAlign: "center", // Centers the text
                          borderRadius: "8px", // Optional: Adds rounded corners
                          padding: "5px 10px", // Adjusts spacing inside the cell
                        }}
                      >
                        {parent.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="dashboard-table-btn"
                        disabled={
                          // Enable the button only if status is 'completed'
                          parent.status.toLowerCase() !== "completed"
                        }
                      >
                        Add
                      </button>
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
