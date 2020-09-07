import React from 'react';
import SHOPPAGE_DB from './ShopPage.db';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: SHOPPAGE_DB
        };
    }

    render() {
        return (
            <div className='shop-page'>
                {this.state.collections.map(({ id, title, items }) => (
                    <CollectionPreview key={id} title={title} items={items} />
                ))}
            </div>
        );
    }
}

export default ShopPage;