export default function Platforms(props){
    let section5 = props.sec5;

    return(
        <>
        {
            section5.map((x)=>{
                return(
                    <div className="container">
                        <div className="row">
                          <div className="col-12 col-md-6 text-white">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="pe-3">
                                    <h2 className="fw-bold ">{x.h4}</h2>
                                </div>
                                <div className="platform"></div>
                                <div className="ps-3">
                                   <i class="fa-solid fa-chevron-left"></i>
                                   <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>

                            <div className="row">
                            <div className="col-12 col-md-12 col-lg-6">
                                <figure className="figure">
                                    <img src={x.img2} alt="" className="img-fluid" />
                                    <figcaption className="figcaption text-white bg-dark p-3">
                                        <h5>{x.h5}</h5>
                                        <span>{x.span1}</span>
                                        <span>{x.span2}</span>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className="col-12 col-md-12 col-lg-6">
                            <figure className="figure">
                                    <img src={x.img1} alt="" className="img-fluid" />
                                    <figcaption className="figcaption text-white bg-dark p-3">
                                        <h5>{x.img2span}</h5>
                                        <span>{x.span1}</span>
                                        <span>{x.span2}</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                          </div>

                          <div className="col-12 col-md-6 text-white">
                          <div className="d-flex justify-content-between align-items-center">
                                <div className="pe-3">
                                    <h2 className="fw-bold ">{x.sec2h4}</h2>
                                </div>
                                <div className="platform"></div>
                                <div className="ps-3">
                                   <i class="fa-solid fa-chevron-left"></i>
                                   <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>

                            <div className="row">
                            <div className="col-12 col-md-12 col-lg-6">
                                <figure className="figure">
                                    <img src={x.sec2img} alt="" className="img-fluid" />
                                    <figcaption className="figcaption text-white bg-dark p-3">
                                        <h5>{x.sec2span1}</h5>
                                        <span>{x.span1}</span>
                                        <span>{x.span2}</span>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className="col-12 col-md-12 col-lg-6">
                            <figure className="figure">
                                    <img src={x.sec2img2} alt="" className="img-fluid" />
                                    <figcaption className="figcaption text-white bg-dark p-3">
                                        <h5>{x.sec2span2}</h5>
                                        <span>{x.span1}</span>
                                        <span>{x.span2}</span>
                                    </figcaption>
                                </figure>
                            </div>
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