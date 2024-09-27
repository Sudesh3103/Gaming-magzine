export default function hero(props){
    let images = props.carousel;
    return(
        <>
        {
            images.map((z)=>{
                return(
                <section className="position-relative">
                    <div className="container home-images align-content ">
                        <div id="example" className="carousel carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active ">
                                    <img src={z.img} alt="" className="img-fluid" />
                                </div>

                                <div className="carousel-item ">
                                    <img src={z.img1} alt="" className="img-fluid" />
                                </div>

                                <div className="carousel-item ">
                                    <img src={z.img2} alt="" className="img-fluid" />
                                </div>
                            </div>

                            <button type="button" className="carousel-control-prev" data-bs-target="#example" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>

                            <button type="button" className="carousel-control-next" data-bs-target="#example" data-bs-slide="next">
                               <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>


                        <div className="img-div text-center text-white position-absolute home-div p-4 d-none d-md-block">
                            <span>{z.span}</span>
                            <h5 className="pt-3">{z.h5}</h5>
                            <span>{z.span2}</span>
                            <span className="ps-5">{z.span3}</span>
                        </div>
                    </div>
                </section>
                )
            })
        }
        </>
    )
}