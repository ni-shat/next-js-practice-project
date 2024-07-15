// // app/page.js
// 'use client'; // This makes it a client component

// export default function Home() {
//   const domain = typeof window !== 'undefined' ? window.location.origin : '';

//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       <p>Your Domain URL: {domain}</p>
//     </div>
//   );
// }



import { headers } from 'next/headers';

export default function Home() {
  const headersList = headers();

  headersList.get('host'); // to get domain
  headersList.get('next-url'); // to get url
  console.log("headersList")
  console.log(headersList.get('host'))

  return (
    <div className='mt-28 flex justify-between flex-col items-center gap-10'>
      <p>Welcome to home page</p>
      <p className='text-center font-extrabold'>{headersList.get('host')}</p>
    </div>
  )
}