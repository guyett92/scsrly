import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Head({title, keywords, pageTitle}) {
    return (
        <Helmet
        title={`${title} | ${pageTitle}`}
        meta={[
            {name: "keywords", content: keywords}
        ]}
        />
    )
}