import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head({title, keywords, pageTitle, description}) {
    return (
        <Helmet>
            <title>{`${title} | ${pageTitle}`}</title>
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    )
}