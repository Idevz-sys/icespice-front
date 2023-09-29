import PropTypes from "prop-types";
import React from 'react'


const SEO = ( {title} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>{title} || Ice Spice - O maior Rent Place que você já viu!</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="A sua próxima snow trip será inesquecível! Esteja pronto para escolher as suas roupas de ski em um closet chique e fashion." />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;


