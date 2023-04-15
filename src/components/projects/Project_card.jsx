import styles from './projects.module.css'


function Project_card(props) {
    return (
        <div className={styles.projects_show}>
            <a href={props.link}>
                <img src={props.imgURL} />
            </a>
            <div className={styles.infoimg}>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Project_card; 