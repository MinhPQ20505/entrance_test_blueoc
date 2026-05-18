import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPostsAPI } from "./services/postService";

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (_, thunkAPI) => {
        try {
            return await fetchPostsAPI();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.unshift(action.payload);
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })

            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;