export default function Footer(props){
    let section8= props.sec7;
    return(
        (
            <>
            {
                section8.map((x)=>{
                    return(
                        <>

                        <div className="container mt-5">
                          <div className="row">
                            <div className="col-12 col-md-12 col-lg-4 p-2 mt-3 footer">
                              
                                <div className="mt-2">
                                    <span className="bg-danger text-white fw-bold p-2">{x.footerbtn}</span>
                                    <i class="fa-solid fa-chevron-left ps-4 text-white"></i>
                                    <i class="fa-solid fa-chevron-right text-white"></i>
                                    <span className="text-white ps-3">{x.footertext}</span>
                                </div>
                                <div className="mt-4 text-white">
                                    <p>{x.footerp1}</p> <hr />
                                </div> 
                                <div className="mt-4 text-white">
                                    <p>{x.footerp2}</p> <hr />
                                </div>
                                <div className="mt-4 text-white">
                                    <p>{x.footerp3}</p> <hr />
                                </div>
                             
                            </div>

                            <div className="col-12 col-md-12 col-lg-5 footer  mt-3 ">
                             
                                <div className="text-white text-center">
                                    <img src={x.logo} alt=""  className="mt-3 w-25 h-25"/>
                                    <p className="ps-2 mt-4 fw-light">{x.footerp4}</p>
                                </div>
                                <div>
                                    <p className="text-center fw-bold text-white">{x.stay}</p>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email..." className="bg-transparent input2 border form-control" />
                                    <button className="form-control mt-2 fw-bold icons-section">{x.btn}</button>
                                </div>

                                <div className="icons-section d-flex justify-content-evenly align-items-center mt-4 mb-3">
                                    <a href=""><i class="fa-brands fa-facebook icons-section"></i></a>
                                    <a href=""><i class="fa-brands fa-x-twitter icons-section" ></i></a>
                                    <a href=""><i class="fa-brands fa-instagram icons-section"></i></a>
                                    <a href=""><i class="fa-brands fa-pinterest icons-section"></i></a>
                                    <a href=""><i class="fa-brands fa-youtube icons-section"></i></a>
                                </div>
                            </div>


                            <div className="col-12 col-md-12 col-lg-3 mt-3 footer">
                                <div className="row">
                                    <div className="p-3">
                                        <h5 className="text-white ">{x.user}</h5>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                          <ul className="list-unstyled fw-light">
                                            <a href="" className="icons-section"><li>{x.li1}</li></a>
                                            <a href="" className="icons-section"><li>{x.li2}</li></a>
                                            <a href="" className="icons-section"><li>{x.li3}</li></a>
                                            <a href="" className="icons-section"><li>{x.li4}</li></a>
                                            <a href="" className="icons-section"><li>{x.li5}</li></a>
                                            <a href="" className="icons-section"><li>{x.li6}</li></a>
                                            <a href="" className="icons-section"><li>{x.li7}</li></a>
                                           </ul>
                                        </div>

                                        <div className="col-12 col-md-6 ">
                                           <ul className="list-unstyled fw-light">
                                                <a href="" className="icons-section"><li>{x.li8}</li></a>
                                                <a href="" className="icons-section"><li>{x.li9}</li></a>
                                                <a href="" className="icons-section"><li>{x.li10}</li></a>
                                                <a href="" className="icons-section"><li>{x.li11}</li></a>
                                                <a href="" className="icons-section"><li>{x.li12}</li></a>
                                                <a href="" className="icons-section"><li>{x.li13}</li></a>
                                                <a href="" className="icons-section"><li>{x.li14}</li></a>

                                           </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>


                         <div className="text-white text-center mt-4">
                            <p>{x.copy} <span className="text-danger">{x.copyspan}</span> </p>
                         </div>
                        </div>

                        



                        </>
                        
                    )
                })
            }
            
            </>
        )
    )
}