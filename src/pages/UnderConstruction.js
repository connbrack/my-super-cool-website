import { Link } from 'react-router-dom';
import '../css/main.css';

export default function UnderConstruction() {
  return (
    <div>
      <h1>Under Construction !!</h1>
      <h1>🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧</h1>
      <div>This page will be completed soon :)</div>
      <br />
       <li> <Link to="/">Take me back home plz</Link> </li>
    </div>
  );
}
