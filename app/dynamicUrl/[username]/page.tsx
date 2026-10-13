'use client';
import { useParams, useRouter } from 'next/navigation';
import react, { useEffect } from 'react';
const useUser = () => ({ user: "arif", loading: false });

const DynamicUrlUser = () => {
  const router = useRouter();
  const params = useParams<{ username: string }>();
  const user = useUser();

  useEffect(() => {
    if (user.user === null) {
      router.replace('/');
    }
  }, [router, user.user]);

  return (
    <>
      <h1>This is {params?.username} dynamic url</h1>
    </>
  );
};

export default DynamicUrlUser;
