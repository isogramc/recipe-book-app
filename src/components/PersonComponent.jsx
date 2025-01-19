import { Link } from "react-router-dom";

function PersonComponent({ image, fullName, githubLink, linkedInLink }) {
  return (
    <div className="avatar">
      <img src={image} alt={`${fullName}'s avatar`} />
      <div>{fullName}</div>
      <div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <div>
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default PersonComponent;
