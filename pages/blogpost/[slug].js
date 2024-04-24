import React ,{useState,useEffect} from 'react'
import {useRouter} from 'next/router'; 
import styles from '../../styles/BlogPost.module.css';
//1.find the file corresponding to the slug
//2. populate them inside yhe page
const slug = ({allBlogs}) => {
  function createMarkup(c) {
    return {__html: c};
  }
 
  const [blog,setBlog]=useState(allBlogs);
  const router=useRouter();
    // useEffect(()=>{
    //   if(!router.isReady) return;
    //   const {slug}=router.query;
    //   fetch(`http://localhost:3000/api/getBlog?slug=${slug}`).then((a)=>{
    //     return a.json();
    //   })
    //   .then((parsed)=>{
    //     setBlog(parsed)
    //   })
    // },[router.isReady]);
    // const {slug}=router.query;
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
