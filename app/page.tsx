import Image from 'next/image';
// import screenshot from '../public/Screenshot.png';
// import { SessionProvider } from 'next-auth/react';
export default function Home() {
  return (
    <>
      {/* <SessionProvider> */}
        <div>
          <h1>Home</h1>
          {/* <Image
          src={screenshot}
          width={'100'}
          height={'100'}
          alt={'screen shot image'}
        /> */}
        </div>
      {/* </SessionProvider> */}
    </>
  );
}
