import React,{Fragment} from 'react'
import { Link } from 'react-router-dom';

const Header = ({title, link}) => {
  return <Fragment>

<section className="page-title p-md-5">
        <div className="shape"></div>
        <div className="shape right s3"></div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="page-title__body">
                        <div className="page-title__main">
                            <h4 className="title">{title}</h4>
    
                            <ul className="breacrumb">
                                <li><Link to="/">Home</Link></li>
                                <li><Link>{link}</Link></li>
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>





  </Fragment>
}

export default Header;