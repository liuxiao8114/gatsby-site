import { Link, useStaticQuery, graphql } from 'gatsby'

import React from 'react'
import Img from 'gatsby-image'
import style from './footer.module.css'


/*
site(siteMetadata: {datas: {}}) {
  siteMetadata {
    datas {
      footerLinks {
        name
        url
        isInternal
      }
    }
  }
}
*/

/*
const datas = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "img-qr_code.png" }) {
      childImageSharp {
        fixed(width: 111, height: 111) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)

const FooterLinks = links => {
  return (
    <div className={style.links}>
      <div className={style.inner}>
        <nav className={style.links_nav}>
          <div className={style.links_item}>
            <h2>关于世贸</h2>
            <ul>
              <li><a href="/about/#idea">公司理念</a></li>
              <li><a href="/about/#introduction">公司概况</a></li>
              <li><a href="/about/#history">公司传承</a></li>
            </ul>
          </div>
          <div className={style.links_item}>
            <h2>世贸服務</h2>
            <ul>
              <li><a href="/business/registered/">公司注册</a></li>
              <li><a href="/business/overseas_accout/">银行开户</a></li>
              <li><a href="/business/legal_services/">商标注册</a></li>
              <li><a href="/business/ec/">跨境电商</a></li>
              <li><a href="/business/">其他业务</a></li>
            </ul>
          </div>
          <div className={style.links_item}>
            <h2>案例分享</h2>
            <ul>
              <li><a href="/case/">案例一览</a></li>
            </ul>
            <h2 className={style.multiple}>最新动态</h2>
            <ul>
              <li><a href="/news/">最新动态一览</a></li>
            </ul>
            <h2 className={style.multiple}>常见问题</h2>
            <ul>
              <li><a href="/faq/">常见问题一览</a></li>
            </ul>
          </div>
          <div className={style.links_item}>
            <h2>联系我们</h2>
            <ul className={style.column_2}>
              <li><a href="#">上海总行</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

const Copyright = () => (
  <div className={style.copyright}>
    <div className={style.large_inner}>
      <div className={style.copyright_mian}>
        <p className={style.copyright_text}>2019 © 世贸企业咨询. All Rights Reserved.<a href="http://beian.miit.gov.cn/" target="_blank">沪ICP备19021479号</a></p>
        <p className={style.copyright_declaration}>声明：部分知识及图片来源于网络公开信息节选，如有侵权请作者联系我们进行协商</p>
      </div>
    </div>
  </div>
)

export default ({ pageContext: { footerLinks } }) => (
  <footer>
    <div className={style.contact}>
      <div className={style.inner}>
        <h2 className={style.section_title}><span>联系我们</span></h2>
        <div className={style.contact_main}>
          <p className={style.tel}>
            免费咨询热线
            <a href="tel:4008883301">400-888-3301</a>
          </p>
          <p className={style.mail}>
            咨询邮箱
            <span>sh-wtec@hkwtec.com</span>
          </p>
          <div className={style.qr_code}><Img fixed={datas.file.childImageSharp.fixed} /></div>
        </div>
        <dl className={style.contact_time}>
          <dt>营业时间</dt>
          <dd>9:00－18:00</dd>
        </dl>
      </div>
    </div>
    <FooterLinks links={footerLinks}/>
    <Copyright/>
  </footer>
)
*/

export default ({ pageContext: context }) => {
  return (
    <footer>
      <div className={style.contact}>
        <div className={style.inner}>
          <h2 className={style.section_title}><span>联系我们</span></h2>
          <div className={style.contact_main}>
            <p className={style.tel}>
              免费咨询热线
              <a href="tel:4008883301">400-888-3301</a>
            </p>
            <p className={style.mail}>
              咨询邮箱
              <span>sh-wtec@hkwtec.com</span>
            </p>

          </div>
          <dl className={style.contact_time}>
            <dt>营业时间</dt>
            <dd>9:00－18:00</dd>
          </dl>
        </div>
      </div>
      <FooterLinks links={context.footer} />
      <Copyright/>
    </footer>
  )
}

const Copyright = () => (
  <div className={style.copyright}>
    <div className={style.large_inner}>
      <div className={style.copyright_mian}>
        <p className={style.copyright_text}>2019 © 世贸企业咨询. All Rights Reserved.<a href="http://beian.miit.gov.cn/" target="_blank">沪ICP备19021479号</a></p>
        <p className={style.copyright_declaration}>声明：部分知识及图片来源于网络公开信息节选，如有侵权请作者联系我们进行协商</p>
      </div>
    </div>
  </div>
)

const FootLinkBlock = ({ title, links }) => {
  return (
    <div className={style.links_item}>
      <h2>{ title }</h2>
      <ul>
        {
          links.map(link => (
            <li key={ link.id }><Link to={ link.url }>{ link.name }</Link></li>
          ))
        }
      </ul>
    </div>
  )
}

const FooterLinks = ({ links }) => {
  const { banks } = links

  return (
    <div className={style.links}>
      <div className={style.inner}>
        <nav className={style.links_nav}>
          <div className={style.links_item}>
            <h2>关于世贸</h2>
            <ul>
              <li><a href="/about/#idea">公司理念</a></li>
              <li><a href="/about/#introduction">公司概况</a></li>
              <li><a href="/about/#history">公司传承</a></li>
            </ul>
          </div>
          <div className={style.links_item}>
            <h2>世贸服務</h2>
            <ul>
              <li><a href="/business/registered/">公司注册</a></li>
              <li><a href="/business/overseas_accout/">银行开户</a></li>
              <li><a href="/business/legal_services/">商标注册</a></li>
              <li><a href="/business/ec/">跨境电商</a></li>
              <li><a href="/business/">其他业务</a></li>
            </ul>
          </div>
          <div className={style.links_item}>
            <h2>案例分享</h2>
            <ul>
              <li><a href="/case/">案例一览</a></li>
            </ul>
            <h2 className={style.multiple}>最新动态</h2>
            <ul>
              <li><a href="/news/">最新动态一览</a></li>
            </ul>
            <h2 className={style.multiple}>常见问题</h2>
            <ul>
              <li><a href="/faq/">常见问题一览</a></li>
            </ul>
          </div>
          <FootLinkBlock title="联系我们" links={banks} />
        </nav>
      </div>
    </div>
  )
}
