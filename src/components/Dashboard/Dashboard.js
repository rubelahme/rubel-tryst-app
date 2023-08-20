import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://tryst-rubel-sarver.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);

  return (
    <div>
      <div className="container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {item.map((data, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{data.Email}</td>
                <td>{data.Password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
