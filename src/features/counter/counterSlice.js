import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiClient } from './ThunkAPI'

const initialState = {
    users: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
}

export const getToken = createAsyncThunk(
    'counter/getTokenStatus',
    async (loginData) => {
        const response = await apiClient.post("/api-token-auth/", loginData)

        return response.data
    }
)

export const getUsers = createAsyncThunk(
    'counter/getUsersStatus',
    async () => {
        const response = await apiClient.get("/api/v1/users/")

        return response.data
    }
)



export const slice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
        setUsers(state, action) {
            state.users = action.payload;
        }
    },
    extraReducers: {
        [getToken.fulfilled]: (state, action) => {
            localStorage.setItem("token", action.payload.token);
            console.log("3 base - extrareducer - getToken", localStorage.token);
            state.isFetching = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            console.log("4 base - extrareducer -getUsers ", state.users);
            state.isSuccess = true;
        }
    },
});

export const { increment, decrement, incrementByAmount, setToken } = slice.actions;
export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};

// export const selectCount = state => state.counter.value;

export default slice.reducer;
