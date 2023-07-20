
function UserProfile({name, email, imgURL}) {
    return (
        <>
            <ul>
                <li>Name: {name}</li>
                <li>Email: {email}</li>
                <li>Image: <img src={imgURL}></img></li>
            </ul>
        </>
    )
}

export default UserProfile;