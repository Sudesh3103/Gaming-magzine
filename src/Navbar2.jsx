export default function nav2(props){
    let navbar2 = props.navbar2;
    return(
        <>
        {
            navbar2.map((y)=>{
                return(
                    <div className="text-white pt-2 d-none d-lg-block border-bottom border-top mb-2">
                    <div className="container">
                        <div className="row">
                            <ul className="d-flex justify-content-evenly align-items-center list-unstyled pt-2">
                                <a href="" className="icons-section"><li>{y.li1}</li></a>
                                <a href="" className="icons-section"><li>{y.li2}</li></a>
                                <a href="" className="icons-section"><li>{y.li3}</li></a>
                                <a href="" className="icons-section"><li>{y.li4}</li></a>
                                <a href="" className="icons-section"><li>{y.li5}</li></a>
                                <a href="" className="icons-section"><li>{y.li6}</li></a>
                                <a href="" className="icons-section"><li>{y.li7}</li></a>
                                <a href="" className="icons-section"><li>{y.li8}</li></a>
                                <a href="" className="icons-section"><i class="fa-solid fa-magnifying-glass"></i></a>
                            </ul>
                        </div>
                    </div>
                    
                    </div>
                )
            })
        }
        </>
    )
}