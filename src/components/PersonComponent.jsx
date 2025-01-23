function PersonComponent({
  image,
  placeholderImg,
  fullName,
  githubLink,
  linkedInLink,
}) {
  return (
    <div className="avatar">
      {/* {(image===null||image===undefined) ? <img src={placeholderImg} alt={`${fullName}'s avatar`} /> : <img src={image} alt={`${fullName}'s avatar`} /> } */}
      <div style={{justifySelf:'center'}}><img src={placeholderImg} alt={`${fullName}'s avatar`} /></div>
      <div>{fullName}</div>
      <div style={{justifySelf:'center'}}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <div>
            <img className="side-bar-icon" src="https://res.cloudinary.com/dwyipecoa/image/upload/v1737447320/github-01_veu1l8.svg" alt="github logo"/>
          </div>
          GitHub
        </a>
      </div>
      <div>
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <div style={{justifySelf:'center'}}>
            <img className="side-bar-icon" src="https://res.cloudinary.com/dwyipecoa/image/upload/v1737447320/linkedin-01_t9dink.svg" alt="LinkedIn Logo"/>
          </div>
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default PersonComponent;
