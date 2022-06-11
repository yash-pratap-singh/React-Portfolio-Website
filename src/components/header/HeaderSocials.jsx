import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/feed/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/yash-pratap-singh" target="_blank"><ImGithub/></a>
    </div>
  )
}

export default HeaderSocials