import { Post } from '../model';

interface Props {
  posts?: Post[];
}

const PaginationPosts = ({ posts }: Props) => {
  return (
    <div className="container">
      {posts?.map((post: Post) => (
        <div className="border border-black px-4 m-2" key={post?.id}>
          <h3>
            <span className="font-bold">Title:</span> {post?.title}
          </h3>
          <p>
            <span className="font-bold">Body paragraph:</span> {post?.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PaginationPosts;
