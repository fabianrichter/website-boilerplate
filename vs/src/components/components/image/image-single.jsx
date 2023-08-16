import StrapiImage from '@/components/strapi/image/image';
import React from 'react'

const ImageSingle = (props) => {
  return (
    <div>
        <StrapiImage data={props.data} />
    </div>
  )
}

export default ImageSingle