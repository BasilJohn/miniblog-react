import { LOAD_ARTICLE_LIST, UPDATE_ARTICLE, ADD_ARTICLE } from "../actions/types";

const INITIAL_STATE = {
    articleList: [],
    isAdded: false,
    isUpdated: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_ARTICLE_LIST:
            return { ...state, articleList: action.payload };
        case UPDATE_ARTICLE:
            return { ...state, isUpdated: action.payload };
        case ADD_ARTICLE:
            return { ...state, isAdded: action.payload };
        default:
            return state;
    }
};
