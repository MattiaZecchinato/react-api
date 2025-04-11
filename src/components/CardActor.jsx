export default function CardActor({ actor }) {
    
    let awards = actor.awards;

    if (typeof(awards) === 'string') {

        const convertedAwards = awards.split(", ");
        awards = convertedAwards;
    }

    return <div className="card-box">

        <div className="img-box">
            <img src={actor.image} alt={actor.name} />
        </div>

        <div className="name-box">
            <h2>{actor.name}</h2>
        </div>

        <div className="info-box">
            <div className="birth-box">
                <h4>BIRTH YEAR</h4>
                <p>{actor.birth_year}</p>
            </div>
            <div className="nat-box">
                <h4>NATIONALITY</h4> 
                <p>{actor.nationality}</p>
            </div>
        </div>

        <div className="bio-box">
            <h4>BIOGRAPHY</h4>
            <p>{actor.biography}</p>
        </div>

        <div className="awards-box">
            <h4>AWARDS</h4>
            <ul>
                {awards.map((elem, i) => <li key={i}>{elem}</li>)}
            </ul>
        </div>

    </div>
}