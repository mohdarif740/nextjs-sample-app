'use client';
import react, { useEffect, useState } from 'react';
import Link from 'next/link';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const url = 'https://dummyjson.com/users';
      const resp = await fetch(url);
      const data = await resp.json();
      setUsers(data ?? []);
    } catch (error) {
    } finally {
    }
  };
  return (
    <>
      <h1>all users</h1>
      {users &&
        users?.users &&
        users?.users?.map((item?: any) => (
          <Link
            key={item?.id}
            href={`/users/${item?.id}`}
            style={{
              cursor: 'pointer',
              background: 'gray',
              padding: '4px',
              marginBottom: '8px',
            }}
          >
            <div>

            {item?.firstName}
            </div>
          </Link>
        ))}
    </>
  );
};
export default Users;
