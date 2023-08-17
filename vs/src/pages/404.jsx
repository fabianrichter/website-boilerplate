import Error404 from '@/components/system/404';
import withLayout, { getStaticProps } from '@/lib/with-layout';
import React from 'react'

const Custom404 = () => {
  return (
    <Error404 />
  )
}

export { getStaticProps };

export default withLayout(Custom404);