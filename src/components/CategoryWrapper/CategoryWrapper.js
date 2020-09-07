import React from 'react';
import Category from '../Category/Category';
import './categoryWrapper.scss';
import CATEGORY_DB from './category.db';



class CategoryWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: CATEGORY_DB
        }
    }
    render() {
        return (
            <div className="categoryWrapper">
                {this.state.categories.map(({ id, ...restProps }) => (
                    <Category key={id} {...restProps} />
                ))}
            </div>
        )
    }
}

export default CategoryWrapper;