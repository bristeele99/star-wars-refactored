

import { Link } from 'react-router-dom';

export default function StarshipCards({ starships }) {

    return (
        
            <div className="cards">
                {starships.map((starship, i) => (
                    <Link key={i} to={`starships/${i}`} className='container'>
                        {starship.name}
                    </Link>
                ))}
            </div>
       
    )
}