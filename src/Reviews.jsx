export default function Game(props){
    let reviews = props.sec3;

    return (
        <>
        {
            reviews.map((x)=>{
                return(
                    <section className="text-white">
                        <div className="d-flex justify-content-center align-items-center pt-3 pb-3">
                            <div className="reviews"></div>
                            <div>
                                <h2 className="ps-3 pe-3">{x.span}</h2>
                            </div>
                            <div className="reviews"></div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div>
                                        <img src={x.img1} alt="" className="img-fluid game-review"/>
                                        <div className="reviews-div ps-2 ">
                                            <h5 className="fw-bold">{x.img1p}</h5>
                                            <span>{x.img1span1}</span>
                                            <span>{x.img1span2}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 d-none d-lg-block">
                                    <div>
                                        <img src={x.img2} alt="" className="img-fluid game-review" />
                                        <div className="reviews-div ps-2">
                                            <span>{x.img2span1}</span>
                                            <h5 className="fw-bold">{x.img2p}</h5>
                                            <span>{x.img2span2}</span>
                                            <span>{x.img2span3}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 d-none d-md-block">
                                    <div>
                                        <img src={x.img3} alt="" className="img-fluid game-review" />
                                        <div className="reviews-div ps-2 ">
                                            <h5 className="fw-bold">{x.img3p}</h5>
                                            <span>{x.img3span1}</span>
                                            <span>{x.img3span2}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })
        }
        </>
    )
}