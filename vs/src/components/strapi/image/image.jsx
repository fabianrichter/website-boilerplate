import { strapiUrl } from '@/config';
import React from 'react'

const StrapiImage = ({ data }) => {
  return (
    <img 
        src={strapiUrl + data.attributes.url}
        alt={data.attributes.alternativeText ? data.attributes.alternativeText : null}
    />
  )
}

export default StrapiImage