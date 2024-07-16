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
import axios from 'axios';

export async function fetchData() {

  const headersList = headers();

  headersList.get('host'); // to get domain
  headersList.get('next-url'); // to get url
  console.log("headersList")
  console.log(headersList.get('host'))


  try {
    const headers = {
      'domain': headersList.get('host'),
    };

    // Make GET request with headers
    const response = await axios.get('https://studyindenmarkinfo.com/mock-api', { headers }); // Replace with your API endpoint

    // Print the response to the console
    console.log('API Response:', response.data);

    return {
      props: {
        data: response.data
      }
    };
  } catch (error) {
    console.error('API Request Error:', error);

    return {
      props: {
        data: null
      }
    };
  }
}


export default async function Home() {

  const data = await fetchData();
  // console.log("data", data)
  // console.log("data", data.props.data.domain)
  // console.log("type of data", typeof(data))
  // data.props

  return (
    <div className='mt-28 flex justify-between flex-col items-center gap-10'>
      <p>Welcome to home page!! Updated</p>
      <p className='text-center font-extrabold'>{data.props.data.domain}</p>
    </div>
  )
}