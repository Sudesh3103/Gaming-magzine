
export default function Nav(props){
    let navbar = props.header
    return(
        <>
        {
            navbar.map((x)=>{
                return(
                    <>
                    <section className="text-white p-3">
                    <header className=" d-flex justify-content-between align-items-center container ">
                        <div className="d-none d-md-flex list-unstyled ">
                            <a href="" className="icons-section"><li>{x.li1}</li></a>
                            <a href="" className="icons-section"><li  className="ps-2">{x.li2}</li></a>
                            <a href="" className="icons-section"><li  className="ps-2">{x.li3}</li></a>
                        </div>
                      
                        <div className="d-md-block">
                           <img src={x.img} alt="" className="logo" />
                        </div>

                        <div className="h-icons d-none d-md-flex justify-content-between">
                            <a href="" className="icons-section"><i class="fa-brands fa-facebook"></i></a>
                            <a href="" className="icons-section"><i class="fa-brands fa-x-twitter" ></i></a>
                            <a href="" className="icons-section"><i class="fa-brands fa-instagram"></i></a>
                            <a href="" className="icons-section"><i class="fa-brands fa-pinterest"></i></a>
                            <a href="" className="icons-section"><i class="fa-brands fa-youtube"></i></a>
                        </div>

                        <div className="d-md-none">
                           <button type="button" className="btn text-white fs-1" data-bs-toggle="offcanvas" data-bs-target="#demo">
                              <i class="fa-solid fa-bars"></i>
                           </button>

                           <div className="offcanvas offcanvas-start" id="demo">
                              <div className="offcanvas-header d-flex justify-content-end p-0">
                                <button className="btn btn-close m-2 " data-bs-dismiss="offcanvas"></button>
                              </div>

                              <div className="offcanvas-body bg-dark ">
                                <input type="email" placeholder="Type & Hit enter" className="p-1 bg-transparent border w-75" />
                                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                <ul className="list-unstyled mt-3">
                                    <a href=""><li>{x.li4}</li></a>< hr className="text-white" />
                                    <a href=""><li>{x.li5}</li></a><hr className="text-white"/>
                                    <a href=""><li>{x.li6}</li></a><hr className="text-white"/>
                                    <a href=""><li>{x.li7}</li></a><hr className="text-white" />
                                    <a href=""><li>{x.li8}</li></a><hr className="text-white"/>
                                    <a href=""><li>{x.li9}</li></a><hr className="text-white"/>
                                    <a href=""><li>{x.li10}</li></a><hr className="text-white"/>
                                    <a href=""><li>{x.li11}</li></a><hr className="text-white"/>
                                </ul>
                              </div>
                           </div>
                        </div>
                        
        


                        
                    
                    </header>
                    
                    </section>
                   
                    </>
                )
            })
        }
        
        </>
    )
}