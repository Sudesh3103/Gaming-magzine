export default function Play(props){
    let playing = props.sec4;
    return(
        <>

        {
        playing.map((x)=>{
            return(
                <div className="container mt-5 mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-white">
                            <h2>{x.h2}</h2>
                        </div>
                        <div className="playing"></div>
                        <div className="play-list d-none d-lg-block">
                            <ul className="list-unstyled d-flex justify-content-between align-items-center pt-3">
                                <a href=""  className="icons-section"><li>{x.li1}</li></a>
                                <a href=""  className="icons-section"><li>{x.li2}</li></a>
                                <a href=""  className="icons-section"><li>{x.li3}</li></a>
                                <a href=""  className="icons-section"><li>{x.li4}</li></a>
                                <a href=""  className="icons-section"><li>{x.li5}</li></a>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div>
                                <figure className="figure">
                                    <img src={x.img1} alt="" className="img-fluid" />
                                    <figcaption className="figcaption bg-dark text-white p-3">
                                        <span className="text-danger">{x.span1}</span>
                                        <h4>{x.h4}</h4>
                                        <span>{x.span2}</span>
                                        <span>{x.span3}</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                        <div>
                                <figure className="figure">
                                    <img src={x.img2} alt="" className="img-fluid" />
                                    <figcaption className="figcaption bg-dark text-white p-3">
                                        <span className="text-danger">{x.span}</span>
                                        <span className="ps-4 text-danger">{x.span21}</span>
                                        <h4>{x.h24}</h4>
                                        <span>{x.span22}</span>
                                        <span>{x.span23}</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                        <div>
                                <figure className="figure">
                                    <img src={x.img3} alt="" className="img-fluid" />
                                    <figcaption className="figcaption bg-dark text-white p-3">
                                        <span className="text-danger">{x.span31}</span>
                                        <h4>{x.h34}</h4>
                                        <span>{x.span32}</span>
                                        <span>{x.span33}</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                
            )
        })
    }
        </>
    )
}