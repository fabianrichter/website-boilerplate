import React from 'react'
import Menu from './menu';

const Header = (props) => {
  return (
    <div>
        <Menu navigation={props.navigation} />
    </div>
  )
}

export default Header