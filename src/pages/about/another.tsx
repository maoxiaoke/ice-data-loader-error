import { Link, useData, definePageConfig, defineDataLoader } from 'ice';
import url from '../ice.png';

interface Data {
  name: string;
}

export default function About() {
  const data = useData<Data>();

  return (
    <>
      <h2>About/another Page</h2>
      <Link to="/about">Back to About</Link>
      <div>page data: {JSON.stringify(data)}</div>
    </>
  );
}

export const dataLoader = defineDataLoader(() => {
  console.log('fetching data before rendering /about/another');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: `${Math.random()}about/another`,
      });
    }, 1 * 100);
  });
});
