export default function Post(props){
    let section6 = props.sec6;
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      
      responsive:{
          0:{
              items:1
          },
          768:{
              items:3
          },
          992:{
              items:6
          }
      }
  })
    return(
        <>
        {
            section6.map((x)=>{
                return(
                    <div className="container text-white ">
                      <div className="row">
                        <div  className="col-12 col-md-12 col-lg-8">
                         <div className=" d-flex justify-content-between align-items-center">
                          <div>
                             <h3 className="fw-bold">{x.h2}</h3>
                          </div>
                          <div className="posts"></div>
                         </div>

                         <div className="row">
                            <div className="col-12 col-lg-12">
                               <figure className="figure d-md-flex">
                                  <img src={x.sec1img1} alt="" className="posts-figure"/>
                                  <figcaption className="figcaption ps-3 pt-2">
                                    <span className="text-danger">{x.sec1span1}</span>
                                    <h5 className="fw-bold pt-2 post">{x.sec1h5}</h5>
                                    <span className="fw-light">{x.sec1span2}</span>
                                    <p className="pt-3 fw-light">{x.sec1p1}</p>
                                  </figcaption>
                               </figure>
                               <hr/>
                            </div> 
                         </div>

                         <div className="row">
                            <div className="col-12 col-lg-12">
                               <figure className="figure d-md-flex">
                                  <img src={x.sec2img2} alt="" className="posts-figure"/>
                                  <figcaption className="figcaption ps-3 pt-2">
                                    <span className="text-danger">{x.sec2span1}</span>
                                    <h5 className="fw-bold pt-2 post">{x.sec2h5}</h5>
                                    <span className="fw-light">{x.sec2span2}</span>
                                    <p className="pt-3 fw-light">{x.sec2p1}</p>
                                  </figcaption>
                               </figure>
                               <hr/>
                            </div> 
                         </div>

                         <div className="row">
                            <div className="col-12 col-lg-12">
                               <figure className="figure d-md-flex">
                                  <img src={x.sec2img3} alt="" className="posts-figure"/>
                                  <figcaption className="figcaption ps-3 pt-2">
                                    <span className="text-danger">{x.sec3span1}</span>
                                    <h5 className="fw-bold pt-2 post">{x.sec3h5}</h5>
                                    <span className="fw-light">{x.sec3span2}</span>
                                    <p className="pt-3 fw-light">{x.sec3p1}</p>
                                  </figcaption>
                               </figure>
                               <hr/>
                            </div> 
                         </div>

                         <div className="row">
                            <div className="col-12 col-lg-12">
                               <figure className="figure d-md-flex">
                                  <img src={x.sec2img4} alt="" className="posts-figure"/>
                                  <figcaption className="figcaption ps-3 pt-2">
                                    <span className="text-danger">{x.sec4span1}</span>
                                    <h5 className="fw-bold pt-2 post">{x.sec4h5}</h5>
                                    <span className="fw-light">{x.sec4span2}</span>
                                    <p className="pt-3 fw-light">{x.sec4p1}</p>
                                  </figcaption>
                               </figure>
                               <hr/>
                            </div> 
                         </div>

                         <div className="row">
                            <div className="col-12 col-lg-12">
                               <figure className="figure d-md-flex">
                                  <img src={x.sec2img5} alt="" className="posts-figure"/>
                                  <figcaption className="figcaption ps-3 pt-2">
                                    <span className="text-danger">{x.sec5span1}</span>
                                    <h5 className="fw-bold pt-2 post">{x.sec5h5}</h5>
                                    <span className="fw-light">{x.sec5span2}</span>
                                    <p className="pt-3 fw-light">{x.sec5p1}</p>
                                  </figcaption>
                               </figure>
                               <hr/>
                            </div> 
                         </div>

                         <div className="row">
                            <div className="col-12 col-lg-12">
                               <figure className="figure d-md-flex">
                                  <img src={x.sec2img6} alt="" className="posts-figure"/>
                                  <figcaption className="figcaption ps-3 pt-2">
                                    <span className="text-danger">{x.sec6span1}</span>
                                    <h5 className="fw-bold pt-2 post">{x.sec6h5}</h5>
                                    <span className="fw-light">{x.sec6span2}</span>
                                    <p className="pt-3 fw-light">{x.sec6p1}</p>
                                  </figcaption>
                               </figure>
                               <hr/>
                            </div> 
                         </div>

                         <div className="row">
                            <div className="col-12 col-lg-12">
                               <figure className="figure d-md-flex">
                                  <img src={x.sec2img7} alt="" className="posts-figure"/>
                                  <figcaption className="figcaption ps-3 pt-2">
                                    <span className="text-danger">{x.sec7span1}</span>
                                    <h5 className="fw-bold pt-2 post">{x.sec7h5}</h5>
                                    <span className="fw-light">{x.sec7span2}</span>
                                    <p className="pt-3 fw-light">{x.sec7p1}</p>
                                  </figcaption>
                               </figure>
                               <hr/>
                            </div> 
                         </div>

                         <div className="row">
                            <div className="col-12 col-lg-12">
                               <figure className="figure d-md-flex">
                                  <img src={x.sec2img8} alt="" className="posts-figure"/>
                                  <figcaption className="figcaption ps-3 pt-2">
                                    <span className="text-danger">{x.sec8span1}</span>
                                    <h5 className="fw-bold pt-2 post">{x.sec8h5}</h5>
                                    <span className="fw-light">{x.sec8span2}</span>
                                    <p className="pt-3 fw-light">{x.sec8p1}</p>
                                  </figcaption>
                               </figure>
                               <hr/>
                            </div> 
                         </div>

                         <div className="row">
                            <div className="col-12 col-lg-12">
                               <figure className="figure d-md-flex">
                                  <img src={x.sec2img9} alt="" className="posts-figure"/>
                                  <figcaption className="figcaption ps-3 pt-2">
                                    <span className="text-danger">{x.sec9span1}</span>
                                    <h5 className="fw-bold pt-2 post">{x.sec9h5}</h5>
                                    <span className="fw-light">{x.sec9span2}</span>
                                    <p className="pt-3 fw-light">{x.sec9p1}</p>
                                  </figcaption>
                               </figure>
                               <hr/>
                            </div> 
                         </div>

                         <div className="row">
                            <div className="col-12 col-lg-12">
                               <figure className="figure d-md-flex">
                                  <img src={x.sec2img10} alt="" className="posts-figure"/>
                                  <figcaption className="figcaption ps-3 pt-2">
                                    <span className="text-danger">{x.sec10span1}</span>
                                    <h5 className="fw-bold pt-2 post">{x.sec10h5}</h5>
                                    <span className="fw-light">{x.sec10span2}</span>
                                    <p className="pt-3 fw-light">{x.sec10p1}</p>
                                  </figcaption>
                               </figure>
                               <hr/>
                            </div> 
                         </div>

                        </div>

                        
                        <div  className="col-12 col-md-12 col-lg-4">
                         <div className=" d-flex justify-content-between align-items-center">
                          <div>
                             <h3 className="fw-bold">{x.h3}</h3>
                          </div>
                          <div className="posts1"></div>
                          <div>
                             <i class="fa-solid fa-chevron-left"></i>
                             <i class="fa-solid fa-chevron-right"></i>
                          </div>
                         </div>

                         <div className="row">
                          <div className="col-12 col-md-12 col-lg-12">
                           <div id="client-item" className="owl-carousel">
                             <div className="client">
                                <img src={x.owlimg1} alt="" className="img-fluid"/>
                             </div>
                            <div className="client">
                                <img src={x.owlimg2} alt="" className="img-fluid"/>
                            </div>
                            <div className="client">
                                <img src={x.owlimg3} alt="" className="img-fluid"/>
                            </div>
                            <div className="client">
                                <img src={x.owlimg4} alt="" className="img-fluid"/>
                            </div>
                            
                           </div>

                          </div>
                         </div>

                         <div className="row">
                           <div className="d-flex justify-content-between align-items-center mt-4">
                              <div>
                                 <h4>{x.search}</h4>
                              </div>
                              <div className="search"></div>
                           </div>
                         </div>

                         <div className="">
                           <input type="text" placeholder="Type & heat enter" className="form-control border bg-transparent input mt-3" />
                         </div>

                         <div className="row">
                           <div className="d-flex justify-content-between align-items-center mt-4">
                              <div>
                                 <h4 className="text-uppercase">{x.category}</h4>
                              </div>
                              <div className="search"></div>
                           </div>
                         </div>

                         <div className="mt-3 mb-4">
                           <ul className="list-unstyled lh-5 fw-light">
                              <a href="" className="text-danger"><li>{x.li1}</li></a>
                              <a href="" className="icons-section"><li>{x.li2}</li></a>
                              <a href="" className="icons-section"><li>{x.li3}</li></a>
                              <a href="" className="icons-section"><li>{x.li4}</li></a>
                              <a href="" className="icons-section"><li>{x.li5}</li></a>
                              <a href="" className="icons-section"><li>{x.li6}</li></a>
                              <a href="" className="icons-section"><li>{x.li8}</li></a>
                           </ul>
                         </div>

                         
                         <div className="btn-group form-control bg-transparent" role="group" aria-label="Basic example">
                            <button type="button" className="btn  text-danger fw-bold">{x.btn1}</button>
                            <button type="button" className="btn fw-bold">{x.btn2}</button>
                            <button type="button" className="btn fw-bold">{x.btn3}</button>
                         </div>
                         

                         <div className="row">
                           <div className="col-12 mt-3">
                              <figure className="d-flex">
                                 <img src={x.figure1} alt="" className="figimg" />
                                 <figcaption className="figcaption ps-3 ">
                                    <p className="fw-bold m-0">{x.figh5}</p>
                                    <span className="fw-normal">{x.figspan1}</span>
                                 </figcaption>
                              </figure>
                           </div> 
                         </div>

                         <div className="row">
                           <div className="col-12 mt-3">
                              <figure className="d-flex">
                                 <img src={x.figure2} alt="" className="figimg" />
                                 <figcaption className="figcaption ps-3 ">
                                    <p className="fw-bold m-0">{x.fig2h5}</p>
                                    <span className="fw-normal">{x.fig2span}</span>
                                 </figcaption>
                              </figure>
                           </div>
                         </div>

                         <div className="row">
                           <div className="col-12 mt-3">
                              <figure className="d-flex">
                                 <img src={x.figure3} alt="" className="figimg" />
                                 <figcaption className="figcaption ps-3 ">
                                    <p className="fw-bold m-0">{x.fig3h5}</p>
                                    <span className="fw-normal">{x.fig3span}</span>
                                 </figcaption>
                              </figure>
                           </div>
                         </div>

                         <div className="row">
                           <div className="col-12 mt-3">
                              <figure className="d-flex">
                                 <img src={x.figure4} alt="" className="figimg" />
                                 <figcaption className="figcaption ps-3 ">
                                    <p className="fw-bold m-0">{x.fig4h5}</p>
                                    <span className="fw-normal">{x.fig4span}</span>
                                 </figcaption>
                              </figure>
                           </div>
                         </div>

                         <div className="row">
                           <div className="col-12 mt-3">
                              <figure className="d-flex">
                                 <img src={x.figure5} alt="" className="figimg" />
                                 <figcaption className="figcaption ps-3 ">
                                    <p className="fw-bold m-0">{x.fig5h5}</p>
                                    <span className="fw-normal">{x.fig5span}</span>
                                 </figcaption>
                              </figure>
                           </div>
                         </div>

                         <div className="row">
                           <div className="col-12 mt-3">
                              <figure className="d-flex">
                                 <img src={x.figure2} alt="" className="figimg" />
                                 <figcaption className="figcaption ps-3 ">
                                    <p className="fw-bold m-0">{x.fig2h5}</p>
                                    <span className="fw-normal">{x.fig2span}</span>
                                 </figcaption>
                              </figure>
                           </div>
                         </div>

                         <div className="row">
                           <div className="col-12 mt-3">
                              <figure className="d-flex">
                                 <img src={x.figure1} alt="" className="figimg" />
                                 <figcaption className="figcaption ps-3 ">
                                    <p className="fw-bold m-0">{x.figh5}</p>
                                    <span className="fw-normal">{x.figspan1}</span>
                                 </figcaption>
                              </figure>
                           </div> 
                         </div>

                         

                         <div className="row">
                           <div className="d-flex justify-content-between align-items-center mt-4">
                              <div>
                                 <h4 className="text-uppercase">{x.tags}</h4>
                              </div>
                              <div className="tags"></div>
                           </div>
                         </div>

                         <div className="row">
                           <div className="mt-3">
                              <a href="" className="tags-text icons-section">{x.tag1}</a>
                              <a href="" className="tags-text icons-section">{x.tag2}</a>
                              <a href="" className="tags-text icons-section">{x.tag3}</a>
                              <a href="" className="tags-text icons-section">{x.tag4}</a>
                              <a href="" className="tags-text icons-section">{x.tag5}</a>
                              <a href="" className="tags-text icons-section">{x.tag6}</a>
                              <a href="" className="tags-text icons-section">{x.tag7}</a>
                              <a href="" className="tags-text icons-section">{x.tag8}</a>
                              <a href="" className="tags-text icons-section">{x.tag9}</a>
                              <a href="" className="tags-text icons-section">{x.tag10}</a>
                           </div>
                         </div>

                         <div className="row">
                           <div className="mt-4 d-md-none d-lg-block">
                              <img src={x.controller} alt="" className="img-fluid"/>
                           </div>
                         </div>

                         <div className="row mt-3">
                           <div className="d-flex justify-content-between align-items-center mt-4">
                              <div>
                                 <h4 className="text-uppercase">{x.news}</h4>
                              </div>
                              <div className="tags"></div>
                           </div>

                           <div className="row">
                           <div className="mt-3 text-center fw-light">
                              <p className="p-2">{x.newsp}</p>
                           </div>
                           <div>
                              <input type="text" placeholder="Name..." className="form-control bg-transparent input2" />
                              <input type="email" placeholder="Email..." className="form-control bg-transparent input2 mt-3"/>
                              <button className="form-control btn border bg-transparent input2 mt-3 fw-bold">{x.subscriber}</button>
                           </div>
                         </div>
                         </div>

                         <div className="row mt-3">
                           <div className="d-flex justify-content-between align-items-center mt-4">
                              <div>
                                 <h4 className="text-uppercase">{x.touch}</h4>
                              </div>
                              <div className="touch"></div>
                           </div>

                           <div className="icons-section d-flex justify-content-evenly align-items-center mt-4">
                              <a href=""><i class="fa-brands fa-facebook icons-section"></i></a>
                              <a href=""><i class="fa-brands fa-x-twitter icons-section" ></i></a>
                              <a href=""><i class="fa-brands fa-instagram icons-section"></i></a>
                              <a href=""><i class="fa-brands fa-pinterest icons-section"></i></a>
                              <a href=""><i class="fa-brands fa-youtube icons-section"></i></a>
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