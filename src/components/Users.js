import React, { useState, useEffect } from "react";

function Users() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  //   const [page, setPage] = useState(1);
  //     const [userPerPage, setUserPerPage] = useState(10);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(20);
  const [i, setI] = useState(0);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    setLoading(true);
    const api = await fetch(
      "https://randomuser.me/api/?page=${page}&results=10&seed=abc"
    );
    const data = await api.json();
    setUsers(data);
    setLoading(false);
    console.log(data);
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const paginate = (index) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (index >= 1) {
      setStart(20 * index);
      setEnd(20 + 20 * index);
    } else if (index < 1) {
      setStart(0);
      setEnd(20);
    }
  };
  return (
    <div>
      <h1>Users.</h1>
      <ul>
        {users?.results?.map((user) => (
          <li key={user.id}>
            {user.name.title} {user.name.first} {user.name.last};
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
