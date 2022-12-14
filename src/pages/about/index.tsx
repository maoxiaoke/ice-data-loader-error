import { Link, useData, defineDataLoader } from 'ice';
import url from '../ice.png';

interface Data {
  name: string;
}

export default function About() {
  const data = useData<Data>();

  console.log('render About Page data', data);

  return (
    <>
      <h2>About Page</h2>
      <Link to="/">home</Link>
      <img src={url} height="40" width="40" />
      <span className="mark">new</span>
      <div>page data: {JSON.stringify(data)}</div>
      <Link to="/about/another">Go to about/another</Link>
    </>
  );
}

export const dataLoader = defineDataLoader(() => {
  console.log('fetching data before rendering /about');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: `${Math.random()}about`,
      });
    }, 1 * 100);
  });
});
