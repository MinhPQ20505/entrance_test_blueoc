import PostForm from "../features/posts/components/PostForm";
import PostsList from "../features/posts/components/PostsList";

function Home() {
    return (
        <div
            style={{
                width: "800px",
                margin: "0 auto",
                padding: "20px",
            }}
        >
            <h1>React Redux Posts App</h1>

            <PostForm />

            <hr />

            <PostsList />
        </div>
    );
}

export default Home;