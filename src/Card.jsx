import profilePic from './assets/Photo.jpeg'

function Card(){
    return(
        <div className="card">
            <img className = "card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Selmy Nshuti</h2>
            <p className="card-text">I am a software developer and play video games</p>
        </div>
    );
}

export default Card