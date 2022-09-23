import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";


function Services(){
    return(
        <section className="service" id="service">
            <h1 className="heading">our services</h1>

            <div className="box-container">

                <div className="box">

                    <img src={img1} alt="" />

                    <div className="info">
                        <h3>treadmill</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
                        <a href="#"><button className="btn">more</button></a>
                    </div>
                </div>

                <div className="box">

                    <img src={img2} alt="" />

                    <div className="info">
                        <h3>yoga</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
                        <a href="#"><button className="btn">more</button></a>
                    </div>
                </div>

                <div className="box">

                    <img src={img3} alt="" />

                    <div className="info">
                        <h3>trainer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
                        <a href="#"><button className="btn">more</button></a>
                    </div>
                </div>

                <div className="box">

                    <img src={img4} alt="" />

                    <div className="info">
                        <h3>equipments</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
                        <a href="#"><button className="btn">more</button></a>
                    </div>
                </div>

                <div className="box">

                    <img src={img5} alt="" />

                    <div className="info">
                        <h3>boxing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
                        <a href="#"><button className="btn">more</button></a>
                    </div>
                </div>

                <div className="box">

                    <img src={img6} alt="" />

                    <div className="info">
                        <h3>weight lifting</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a distinctio excepturi libero eveniet amet id vel minima officiis doloribus.</p>
                        <a href="#"><button className="btn">more</button></a>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Services;