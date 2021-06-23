import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export function UsersList() {
    const [usersData, setUsersData] = useState(null);

    function fetchData(postRoute) {
        fetch(`http://localhost:3001${postRoute}`)
            .then(res => res.json())
            .then(data => setUsersData(data));
    }
    useEffect(() => {
        fetchData('/users')
    }, [])
    if (!usersData) {
        return <div>Waiting for data...</div>
    }

    return (
        <div>

            {usersData.results.map(user =>
                <div className='User' key={user.id}>
                    <h1>{user.name}</h1>
                    <Link to={`/users/${user.id}`}>
                    <img alt='' src={user.profileImageUrl}/>
                    </Link>
                </div>
            )}
            {usersData.previous && <button onClick={() => fetchData(usersData.previous)}>Previous</button>}
            {usersData.next && <button onClick={() => fetchData(usersData.next)}>Next</button>}
        </div>
    )
}
