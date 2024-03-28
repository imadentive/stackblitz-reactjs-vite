function Avatar({ person, size = 100 }) {
  return (
    <div>
      size:
      {size}
      /person:
      {person.name}
    </div>
  )
}

function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  )
}

export default Profile
