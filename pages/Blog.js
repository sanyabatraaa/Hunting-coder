import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const fetchData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };
  <InfiniteScroll
  dataLength={blogs.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
 
>
  {blogs}
</InfiniteScroll>
  return (
    <div>
      <main className={styles.main}>
      
        <h2>Popular Blogs</h2>
        {blogs.map((blogItem) => (
          <div className={styles.blogCard} key={blogItem.slug}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h3>{blogItem.title}</h3>
            </Link>
            <p>{blogItem.metadesc.substr(0, 140)}<Link href={`/blogpost/${blogItem.slug}`}> Read more...</Link></p>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json();
  return {
    props: { allBlogs },
  }
}

export default Blog;
