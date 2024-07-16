import axios from 'axios';

const Home = ({ domain }) => {
  return <h1>Hello, {domain}</h1>;
};

export async function getServerSideProps({ req }) {
  const host = req.headers.host; // e.g., 'chair.imran.com'
  
  // Make API call
  let domain = '';
  try {
    const response = await axios.get('https://studyindenmarkinfo.com/mock-api', {
      headers: {
        'domain': host,
      },
    });

    domain = response.data.domain;
  } catch (error) {
    console.error('Error fetching data:', error);
    domain = 'Error fetching data';
  }

  return {
    props: {
      domain,
    },
  };
}

export default Home;