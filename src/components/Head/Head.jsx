import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head({title, keywords, pageTitle}) {
    return (
        <Helmet
        title={`${title} | ${pageTitle}`}
        />
    )
}