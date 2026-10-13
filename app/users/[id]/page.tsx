'use client';
import react, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const UserInfo = () => {
  const params = useParams();
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const id = params?.id;
    if (id) {
      fetchUsers(id as string);
    }
  }, [params?.id]);

  const fetchUsers = async (id: string) => {
    try {
      const url = `https://dummyjson.com/users/${id}`;
      const resp = await fetch(url);
      const data = await resp.json();
      setUsers(data ?? []);
    } catch (error) {
    } finally {
    }
  };

  return (
    <>
      <div>
        <h1>User Information</h1>
        <p>{users?.bloodGroup}</p>
        <p>{users?.birthDate}</p>
      </div>
    </>
  );
};

export default UserInfo;
