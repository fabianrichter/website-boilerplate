import React from 'react'

const PageTitle = (props) => {
  return (
    <h1>{props.data.content && props.data.content}</h1>
  )
}

export default PageTitle