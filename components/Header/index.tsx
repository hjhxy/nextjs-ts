import React, { useEffect, useState } from 'react'
import styles from './index.module.css';
import Link from 'next/link';

const listItems = [
  {
    id: '1',
    title: "首页",
    url:"/"
  },{
    id: '2',
    title: "沸点",
    url:"/pins"
  },{
    id: '3',
    title: "课程",
    url:"/course"
  },{
    id: '4',
    title: "直播",
    url:"/live"
  },{
    id: '5',
    title: "活动",
    url:"/events/all"
  },{
    id: '6',
    title: "竞赛",
    url:"/challenge"
  },{
    id: '7',
    title: "商城",
    url:""
  },{
    id: '8',
    title: "APP",
    url:""
  }, {
    id: '9',
    title: "商城",
    url: ""
  }
]
function Header() {
  const [currentUrl, setCurrentUrl] = useState("/");
  const [showHeader, setShowHeader] = useState(true);
  /* 监听滚动事件，当滑动到300px时隐藏，否则显示 */
  
  const scrollCallback = () => {
    const scrollTop=document.documentElement.scrollTop
    if (scrollTop >= 300) {
      setShowHeader(false);
    }
    else {
      setShowHeader(true);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', scrollCallback)
  },[])

  return (
    <div className={styles.root} style={{display:showHeader?"block":"none"}}>
      <div className={styles.container}>
        {/* 左侧列表 */}
        <a href='/' className={ styles.logo }>
          <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="" />
        </a>
          
        {/* 右侧布局 */}
        <div className={ styles.right_content }>
          <div className={ styles.navlist }>
            {listItems.map(item => {
              return (
                <Link href={ item.url } className={ currentUrl.match(item.url)?'active_class':undefined } key={ item.id }>
                  <div>{ item.title }</div>
                </Link>
              )
            })}
            <Link href={'/'}>
              <img src='https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c94f4f5c114a4bf4b5f40ae5a8d6b805~tplv-k3u1fbpfcp-no-mark:230:230:230:0.awebp'></img>
            </Link>
          </div>
          
          <div className={ styles.right }>
            <div className={ styles.input }>
              <input placeholder={'搜索稀土掘金'}></input>
              <span>搜</span>
            </div>
            <div className={ styles.add_grounp }>
              <button>创作者中心</button>
              <span className={ styles.more }>m</span>
            </div>
            <div className={ styles.vip }>
              vip
            </div>
            <div className={ styles.notice }>铃</div>
            <div className={ styles.person }>
              <img src={ 'https://p3-passport.byteimg.com/img/user-avatar/bd1b5c50055345a9dee169a1c33813cc~100x100.awebp' }></img>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header