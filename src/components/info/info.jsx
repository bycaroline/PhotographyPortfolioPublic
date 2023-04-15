import styles from './info.module.css'


function Info() {
    return (
        <section className={styles.about}>
            <div className={styles.CEtext}>
                <h2>photographer</h2>
                <p>As a photographer I revel in working with a creative point of view through my lense, capturing moments to be remembered by my clients. <br />
                    <br />
                    I seek to tell the story behind each moment, smile, face and artifact that I have the opportunity to capture. When it comes to real estate photography my aim is to highlight each property’s key traits and attributes, while enticing the viewer to feel transferred and picturing themselves there.
                </p>
            </div>
            {/* <div className={styles.CE}> */}

            <img src={require('../../Assets/Images/CErund3.jpg')} />
            {/* </div> */}
        </section>
    )
}

export default Info; 