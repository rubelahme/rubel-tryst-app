import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [item, setItem] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("https://tryst-rubel-sarver-azure.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  useEffect(() => {
    fetch("https://tryst-rubel-sarver-azure.vercel.app/code")
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, []);
  return (
    <div>
      <div className="container">
        <h3 className="text-center">
          {result.map((data, index) => (
            <h3>{data.codes}</h3>
          ))}
        </h3>
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
