import React from 'react'
import Head from 'next/head'

interface propsType {
  title: string,
  content: string,
  iconPath: string,
  [x:string]:any // 传递任意类型的任意参数，消掉默认children带来的影响
}

function MyHead(props:propsType) {
  const {
    title="仿掘金博客",
    content="仿掘金博客项目",
    iconPath = "/favicon.ico"
  } = props;
  return (
    <Head>
        <title>{title}</title>
      <meta name="description" content={ content } />
      <link rel="icon" href={iconPath} />
    </Head>
  )
}

export default MyHead