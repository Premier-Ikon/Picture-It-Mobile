import './profileCard.css';

function ProfileCard({name, role, imageSrc}) {
    return ( 
        <div>
            <div>
                <img style={{width: '320px', borderRadius: '8px'}} src={imageSrc}/>
            </div>
            <div style={{textAlign: 'center', marginTop: '-10px'}}>
                <h3 style={{fontSize: '20px'}}>{name}</h3>
                <p style={{color: 'rgb(102, 102, 102)', fontSize: '17px', marginTop: '-15px'}}>{role}</p>
            </div>
        </div>
     );
}

export default ProfileCard;