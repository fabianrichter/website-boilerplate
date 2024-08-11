const getAbsoluteImagePath = (path) => {
  let next_public_strapi_url = false;
  if (process.env.NEXT_PUBLIC_STRAPI_HOST && process.env.NEXT_PUBLIC_STRAPI_PORT) {
    next_public_strapi_url = `https://${process.env.NEXT_PUBLIC_STRAPI_HOST}:${process.env.NEXT_PUBLIC_STRAPI_PORT}`;
  }

  if (next_public_strapi_url) {
    return next_public_strapi_url + path;
  }
  
  return "http://localhost:1337" + path;
};



export { getAbsoluteImagePath }