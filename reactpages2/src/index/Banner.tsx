import React from 'react';
import {Link} from "react-router-dom";

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <Link  to="/index">
                    <img
                        className="logo"
                        src={process.env.PUBLIC_URL + "/img/baco.png"}
                        alt="Drawing of Baco, the Roman God of wine"
                    />
                    <span className="brandname">BACO</span>
                </Link>
                {/* <div className="logotext">Divine wine, plebeian prices</div> */}
            </div>
        );
    }
}

export default Banner;
