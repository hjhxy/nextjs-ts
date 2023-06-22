import React from 'react'
import styles from '../styles/aritcleListItem.module.css';
import { NextPage } from 'next';

interface propsType {
    [key: string]: any,
    article: {
        id:string|number,
        nickname: string,
        time: string | number,
        keywords: string[],
        title: string,
        content: string,
        count: {
            read: number | string,
            up: number | string,
            comment: number | string
        }
    }
}

const ArticleListItem: NextPage<propsType> = (props) => {
    const { article } = props
    return (
        <div className={styles.container}>
            <div className={ styles.close }>x</div>

            <div className={ styles.meta}>
              <span >
                  <a href="" className={styles.nickname}>{article.nickname}</a>
              </span>
              <span className={ styles.time }>
                  {article.time}
              </span>
              <span className={ styles.keywords }>
                  { article.keywords?.map(item => {
                      return <a href='' key={item}>{item}</a> 
                  })}
            </span>  
          </div>

          <div className={styles.title}>
              { article.title }
          </div>
          <div className={styles.content}>
              { article.content }
          </div>
          <div className={ styles.count }>
            <span>{ article.count.read}</span>
            <span>{ article.count.up}</span>
            <span>{ article.count.comment}</span>
          </div>
        </div>
    )
}

export default ArticleListItem