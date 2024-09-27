export default function section2(props){
    let games =props.sec2;
    return(
        <>
        {
            games.map((b)=>{
                return(
                    
                    <section className="games">
                        <div className="container pt-3 pb-3">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div>
                                        <img src={b.img1} alt="" className="img-fluid"/>
                                    </div>
                                    <div className=" text-white car ps-3">
                                        <span>{b.span}</span>
                                        <h4 className="fw-bold">{b.p}</h4>
                                        <span>{b.span1}</span>
                                        <span>{b.span2}</span>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div>
                                        <img src={b.img2} alt="" className="img-fluid"/>
                                    </div>
                                    <div className=" text-white car ps-3">
                                        <span>{b.img2span}</span>
                                        <span>{b.img2span3}</span>
                                        <h4 className="fw-bold">{b.p2}</h4>
                                        <span>{b.img2span1}</span>
                                        <span>{b.img2span2}</span>
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