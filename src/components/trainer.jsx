import coach1 from "./images/coach1.png";
import coach2 from "./images/coach2.png";
import coach3 from "./images/coach3.png";
import coach4 from "./images/coach4.png";



function Trainer(){
    return (
        <section className="trainer" id="trainer">
            <h1 className="heading">our trainers</h1>

            <div className="box-container">

                <div className="box">
                    <img src={coach1} alt=""/>
                    <div className="info">
                        <h3>john</h3>
                    </div>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={coach2} alt=""/>
                    <div className="info">
                        <h3>moris</h3>
                    </div>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={coach3} alt=""/>
                    <div className="info">
                        <h3>cipher</h3>
                    </div>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={coach4} alt=""/>
                    <div className="info">
                        <h3>watson</h3>
                    </div>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trainer;