import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../postsSlice";

import {
    selectPosts,
    selectLoading,
    selectError,
} from "../postsSelectors";

import PostItem from "./PostItem";

function PostsList() {
    const dispatch = useDispatch();

    const posts = useSelector(selectPosts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    // console.log(posts);
    
    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>
            <h2>Posts List</h2>

            {posts.slice(0, 10).map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostsList;