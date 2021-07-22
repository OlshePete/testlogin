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
        console.log("You are succefully login by ", loginData.username,)
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
        setUsers(state, action) {
            state.users = action.payload;
        },
        setFetching(state, action) {
            state.isFetching = !state.isFetching;
        }

    },
    extraReducers: {
        [getToken.fulfilled]: (state, action) => {
            localStorage.setItem("token", action.payload.token);
            console.log("token was getted and included to localstorage", localStorage.token);
            // state.isFetching = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            console.log("Users was gotted and included to state ", state.users);
            state.isSuccess = true;
        }
    },
});

export const { setUsers, setFetching, incrementByAmount, setToken } = slice.actions;
export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};

// export const selectCount = state => state.counter.value;

export default slice.reducer;
