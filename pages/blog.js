import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import slug from './blogpost/[slug]'

function Blog(props) {
  const [blogs,setBlogs]=useState(props.allblogs)
  return (
    <>
<div className={styles.blog}>
        <p className={styles.description}>
        Latest Blog
        </p>
        {blogs.map((blogItm)=>{
         return <div className={styles.blogItem} key={blogItm.slug}>
            <Link href={`/blogpost/${blogItm.slug}`}>
          <h3>{blogItm.title}</h3>  
          </Link>
            <h6>{blogItm.content}</h6>
          </div>
        })}
        </div>

    </>
  )
}

export default Blog

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allblogs = await data.json();
  return {
    props: { allblogs},
  }
}
