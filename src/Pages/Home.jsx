import slider1 from '../assets/slider1.jpeg';
import slider2 from '../assets/slider2.jpeg';
import slider3 from '../assets/slider3.jpeg';
import aboutImage from '../assets/aboutimage.jpeg';
import '../assets/css/home.css'

const headingcolor = {
    color:"red",
    backgroundColor:"yellow",
    fontsize:"50"
}
const Home = () => {
    return (
        <>
            <section>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider1} className="d-block w-100" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={slider2} className="d-block w-100" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={slider3} className="d-block w-100" alt="Slide 3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>


            <section className="mt-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 p-4">
                            <h1>About Us</h1>
                            <p>Welcome to My Website! We provide the best services and solutions to make your experience simple and enjoyable. Explore our website to discover amazing features, learn new things, and achieve your goals with us.</p>
                            <p>We are passionate about providing creative ideas and innovative solutions for everyone. Our website is designed to offer useful information, quality services, and a great user experience. Join us and explore new opportunities to grow, learn, and succeed.</p>
                        </div>
                        <div className="col-md-6 p-4 text-center">
                            <img src={aboutImage} className="img-fluid w-100" alt="About Us Banner" />
                        </div>
                    </div>
                </div>
            </section>

               <section className="mt-5">
    <div className="container">
        <div className="row">
           <h1 className="p-3 ">Our Products</h1>
            <div className="col-md-4">
                <div className="card">
                    <img src={slider1} className="card-img-top" alt="Product 1" />
                    <div className="card-body">
                        <h5 className="card-title">Product 1</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card">
                    <img src={slider2} className="card-img-top" alt="Product 2" />
                    <div className="card-body">
                        <h5 className="card-title">Product 2</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card">
                    <img src={slider3} className="card-img-top" alt="Product 3" />
                    <div className="card-body">
                        <h5 className="card-title">Product 3</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<section>
    <h1 style={{color: "blue" ,backgroundColor: "black" }}>This is inline Css Example</h1>
    
    <h1 style={headingcolor}>This is Internal css Example</h1>

    <h1 className="mytext">This is External CSS Example</h1>
</section>
        
        </>
    );
}

export default Home;