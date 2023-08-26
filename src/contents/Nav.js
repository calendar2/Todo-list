import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/patrick'>민재의 todo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;