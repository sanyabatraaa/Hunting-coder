import React ,{useState,useEffect} from 'react'
import {useRouter} from 'next/router'; 
import styles from '../../styles/BlogPost.module.css';

const slug = ({allBlogs}) => {
  function createMarkup(c) {
    return {__html: c};
  }
 
  const [blog,setBlog]=useState(allBlogs);
  const router=useRouter();
    
  return (
    <div className={styles.container}>
      <main className={`${styles.main}`}>
      <h1>{blog && blog.title}</h1>
      <hr/>
      <div>
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} />}
      </div>
      </main>
    </div>
  )
}
export async function getServerSideProps(context){
  console.log(context.query)
  const {slug}=context.query;
  let data=await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  let allBlogs = await data.json();
  return {
    props:{allBlogs}
  }
}

export default slug;
