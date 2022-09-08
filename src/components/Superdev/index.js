import "./superdev.scss";

function Superdev() {
    return(
    <div className="superdev">
            <div className="titleSuperDevs">
                <h2 id="title__superDevs">SuperDevs</h2>
            </div>
            <ul className="main__list">
                <ol className="main__list--perso">
                    <div className="list__perso--infos">
                        <div className="list__perso--image">
                            <img className="superdev_image" src="https://res.cloudinary.com/drjw8g2yn/image/upload/v1659636272/Super%20DEvs/thomas%20image.png" alt="photo Thomas" />
                        </div>
                        <h3 className="list__title--name">Thomas</h3>
                        <p className="perso__description">Je voulais devenir Astronaute et maintenant je suis chez O'clock</p>
                        <h4 className="superdev_lead">Scrum Master</h4>
                    </div>
                </ol>
                <ol className="main__list--perso">
                    <div className="list__perso--infos">
                        <div className="list__perso--image">
                            <img className="superdev_image" src="https://res.cloudinary.com/drjw8g2yn/image/upload/v1659464072/Super%20DEvs/Stella%20image.png" alt="photo Stella" />
                        </div>
                        <h3 className="list__title--name">Stella</h3>
                        <p className="perso__description">Je voulais devenir Globe-trotteuse et maintenant je voyage en ligne</p>
                        <h4 className="superdev_lead">Lead Dev Front</h4>
                    </div>
                </ol>
                <ol className="main__list--perso">
                    <div className="list__perso--infos">
                        <div className="list__perso--image">
                            <img className="superdev_image" src="https://res.cloudinary.com/drjw8g2yn/image/upload/v1659463835/Super%20DEvs/JM%20image.png" alt="photo Jean-Michel" />
                        </div>

                        <h3 className="list__title--name">Jean-Michel</h3>
                        <p className="perso__description">Je voulais devenir un méchant et maintenant je suis un gentil</p>
                        <h4 className="superdev_lead">Lead Dev Back</h4>
                    </div>
                </ol>
                <ol className="main__list--perso">
                    <div>
                        <div className="list__perso--image">
                            <img className="superdev_image" src="https://res.cloudinary.com/drjw8g2yn/image/upload/v1659464123/Super%20DEvs/Emilia%20Image.jpg" alt="photo Emilia" />
                        </div>
                        <h3 className="list__title--name">Emilia</h3>
                        <p className="perso__description">Je voulais devenir caissière et maintenant je code un marketplace</p>
                        <h4 className="superdev_lead">Product Owner</h4>
                    </div>
                </ol>
                <ol className="main__list--perso">
                    <div className="list__perso--infos">
                        <div className="list__perso--image">
                            <img className="superdev_image" src="https://res.cloudinary.com/drjw8g2yn/image/upload/v1659463564/Super%20DEvs/Anthoine%20image.png" alt="photo Anthoine" />
                        </div>
                        <h3 className="list__title--name">Anthoine</h3>
                        <p className="perso__description">Je voulais devenir arachnologue et maintenant je suis arachnophobe</p>
                        <h4 className="superdev_lead">Git Master</h4>
                    </div>
                </ol>
            </ul>
    </div>
    )
}

export default Superdev;