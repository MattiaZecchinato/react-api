export default function CardActor({ actor }) {
    

    return <div className="card-box">

        <div className="img-box">
            <img src={actor.image} alt={actor.name} />
        </div>

        <div className="info-box">
            <ul>
                <li>{actor.name}</li>
                <li>{actor.birth_year}</li>
                <li>{actor.nationality}</li>
            </ul>
        </div>

        <div className="bio-box">
            <p>{actor.biography}</p>
        </div>

        <div className="awards-box">
            <ul>
                {actor.awards.map((elem, i) => <li key={i}>{elem}</li>)}
            </ul>
        </div>

    </div>
}