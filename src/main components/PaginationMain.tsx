import { useEffect, useState } from 'react';
import PaginationPosts from '../components/PaginationPosts';
import { Post } from '../model';
import Pagination from '../components/Pagination';

const PaginationMain = () => {
  // states
  const [posts, setPosts] = useState<Post[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [postsPerPage, setPostsPerPage] = useState<number>(10);
  const [postsPerPage] = useState<number>(10);

  // this fetch function is used to get posts for Pagination component
  const fetchPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // get index of last post and first post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <PaginationPosts posts={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts?.length || 0} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default PaginationMain;
