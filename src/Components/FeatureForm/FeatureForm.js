import React from 'react';

import ListFeature from '../ListFeatures/ListFeatures';
 


export default function FeatureForm(props){
    
        
        const features = Object.keys(props.features).map((feature, idx) => {
            return <ListFeature {...props} key={idx} feature={feature} />
        });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>

        )
    
};