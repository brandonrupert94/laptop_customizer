import React from 'react';
import ListOptions from '../ListOptions/ListOptions';

export default function ListFeature(props) {

    const { feature, idx } = props;
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map((item, index) => {
        return <ListOptions {...props} item={item} key={index} />
    });

    return (
        <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{feature}</h3>
            </legend>
            {options}
        </fieldset>
    );
};