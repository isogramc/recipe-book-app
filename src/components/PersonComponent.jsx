import {Link} from 'react-router-dom';

function PersonComponent({image, fullName, githubLink, linkedInLink}){
    return(
        <div className='avatar'>
            <img src={image} alt="student avatar"/>
            <div>{fullName}</div>
            <div><Link to={githubLink}>Github</Link></div>
            <div><Link to={linkedInLink}>LinkedIn</Link></div>
        </div>
    )
}
export default PersonComponent;