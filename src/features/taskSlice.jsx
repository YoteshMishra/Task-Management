import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    loading: false,
    error: null,
    status: 'All'
}

const fetchTodo = createAsyncThunk('tasks/fetchTodo', async () => {
    const response = await fetch('https://jsonplaceholder.typocode.com/todos?_limit=5')
})