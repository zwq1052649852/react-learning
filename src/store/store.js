import { configureStore } from "@reduxjs/toolkit";

//data
const initialState = {
    router: {
        name: "",
        path: "",
        lastPath: "",
        query: {},
    }
}

//mutation
function dispatchReducer(state = initialState, action) {
    if (action.type == "router/push") {
        return {
            ...state,
            router: {
                ...state.router,
                path: action.path,
                name: action.name,
                lastPath: action.path,
            }
        }
    }
    return state;
}

export function handleRouterPush() {
    store.dispatch("router/push",
        {
            path: 1,
            name: 2,
            lastPath: 1,
        })
}

//define
const store = configureStore({reducer: dispatchReducer});

//getter
const selectStateData = (state, key) => state[key];

export const router = selectStateData(store.getState())