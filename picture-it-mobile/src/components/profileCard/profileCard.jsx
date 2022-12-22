import './profileCard.css';

function ProfileCard({name, role, imageSrc}) {
    return ( 
        <div>
            <div>
                <img className='profile-image' src={imageSrc} alt={'Profile Image'}/>
            </div>
            <div className='profile-content'>
                <h3 className='profile-name'>{name}</h3>
                <p className='profile-role' >{role}</p>
            </div>
        </div>
     );
}

export default ProfileCard;