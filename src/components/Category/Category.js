import React from 'react';
import { withRouter } from 'react-router-dom';
import './category.scss';


const Category = ({ title, imageUrl, medium, linkURL, match, history }) => {

    return (
        <div className={`category ${medium}`} style={{
            backgroundImage: `url(${imageUrl})`,
            color: '#fff'
        }}>
            <div className=" content text-center text-white"
                onClick={() => history.push(`${match.url}${linkURL}`)}
            >
                <h2 className="title ">{title}</h2>
                <span className="subtitle mt-4">subtitle</span>
            </div>
        </div >
    );
}

export default withRouter(Category);