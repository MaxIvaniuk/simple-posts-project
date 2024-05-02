import { Link } from 'react-router-dom'
import classes from './Post.module.css'

const Post = ({ id, name, body }) => {
    return (
        <li className={classes.post}>
            <Link to={id}>
                <p className={classes.author}>{name}</p>
                <p className={classes.text}>{body}</p>
            </Link>
        </li>
    )
}

export default Post