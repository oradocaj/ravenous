import React from 'react';
import './Business.css';


class Business extends React.Component {
    render() {
        const { business } = this.props;
        return (
            <div className="Business">
                <div className="image-container">
                    <a href={business.businessUrl} target="_blank" rel="noreferrer">
                        <img src={business.imageSrc} alt=''/>
                    </a>
                </div>
                <h2>{business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <a href={`http://maps.google.com/?q=${business.address0}, ${business.address1}, ${business.country}`} target="_blank" rel="noreferrer">
                            <p>{business.address}</p>
                        </a>
                        <p>{business.city}</p>
                        <p>{business.state} {business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{business.category}</h3>
                        <h3 className="rating">{business.rating} stars</h3>
                        <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default Business;
