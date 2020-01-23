import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

import style from './header.module.css'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 203, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className={style.header_main}>
      <div className={style.logo}>
        <Img
          className={style.image}
          fixed={data.file.childImageSharp.fixed}
          alt="BVI or Cayman 经济实质申报之前，请先准确分类"
        />
      </div>
      <div className={style.header_info}>
        <ul className={style.header_nav_list}>
          <li><a href="/">TOP</a></li>
          <li><a href="/about/">关于世贸</a></li>
          <li><a href="/business/">世贸服务</a></li>
          <li><a href="/case/">案例分享</a></li>
          <li><a href="/news/">最新动态</a></li>
          <li><a href="/faq/">常见问题</a></li>
          <li><a href="/contact/">联系我们</a></li>
        </ul>
        <ul className={style.header_language}>
          <li><a href="#">EN</a></li>
          <li className={style.current}><a href="/">简</a></li>
          <li><a href="#">繁</a></li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
