function PostItem({ post }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "12px",
                marginBottom: "12px",
            }}
        >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default PostItem;