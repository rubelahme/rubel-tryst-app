import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://lit-plateau-21101.herokuapp.com/emails")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);
  console.log(item);
  const handleDelete = (id) => {
    fetch("https://lit-plateau-21101.herokuapp.com/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => alert("Success fully"));
  };

  return (
    <div>
      <div className="container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {item.map((data, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{data.Email}</td>
                <td>{data.Password}</td>
                <td
                  className="btn btn-success "
                  onClick={() => handleDelete(data._id)}
                >
                  Delate
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
