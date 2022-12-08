import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

function slug(props) {
    const [blogs,setBlogs] = useState(props.myBlogs);
  return (
    <div className={styles.blogContain}>
     <h1>Learn {blogs && blogs.slug} from Scratch.</h1> <hr/>
     <p className={styles.blogtext}>
      {blogs && blogs.content}
     </p>

    </div>
  )
}

export default slug

export async function getServerSideProps(context) {
  const {slug} = context.query;
  let data = await  fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlogs = await data.json();
  return {
    props: { myBlogs},
  }
}