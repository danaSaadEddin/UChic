import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './collectionPreview.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title display-4 text-center'>{title}</h1>
        <div className='preview' >
            {items.filter((item, index) => index < 4)
                .map(({ id, ...restProps }) => (
                    <CollectionItem key={id} {...restProps} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;
