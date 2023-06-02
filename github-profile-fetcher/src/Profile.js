import React from 'react'

const Profile = () => {
    const profile= fetch('https://api.github.com/users/kabinathapa')
    console.log(profile)
    .then((response)=>response.json())
  return (
    <div>Profile</div>
  )
}

export default Profile