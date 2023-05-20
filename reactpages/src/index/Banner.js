import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <a href="index.html">
                    <img
                        className="logo"
                        src={process.env.PUBLIC_URL + "/img/baco.png"}
                        alt="Drawing of Baco, the Roman God of wine"
                    />
                    <span className="brandname">BACO</span>
                </a>
                {/* <div className="logotext">Divine wine, plebeian prices</div> */}
            </div>
        );
    }
}

export default Banner;
