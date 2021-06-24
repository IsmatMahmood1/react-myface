import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <div>
            <Link to='/users'>Users</Link>
            <Link to='/posts'>Posts</Link>
        </div>
    )

}