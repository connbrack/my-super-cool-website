import { Link } from 'react-router-dom';
import '../css/main.css';

export default function Home() {
  return (
    <div>
      <h1>Woah there !!</h1>
      <div>What the heck ! You're not supposed to be here 😠</div>
      <br />
       <li> <Link to="/">Take me back home plz</Link> </li>
    </div>
  );
}
