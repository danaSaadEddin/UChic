import React from 'react'
import './collectionItem.scss';
const CollectionItem = ({ imageUrl, price, name }) => {
    return (
        <div className="ui special cards text-center">
            <div className="card">
                <div className="blurring dimmable image">
                    <img className="img" src={imageUrl} alt="item" />
                </div>
                <div className="content ">
                    <div className="header"> {name}</div>

                </div>
                <div className="extra content">
                    <div className="header center">{`${price} $`}</div>
                </div>
            </div>

        </div>

    )
}

export default CollectionItem;
