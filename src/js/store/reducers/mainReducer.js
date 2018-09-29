import {
    LOAD_ARTICLE_LIST,
    UPDATE_ARTICLE,
    ADD_ARTICLE,
    SET_TITLE,
    SET_ARTICLE_TEXT,
    SET_DEFAULT
} from "../actions/types";

const INITIAL_STATE = {
    articleList: [],
    isAdded: false,
    isUpdated: false,
    titleText: "",
    articleText: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_ARTICLE_LIST:
            return { ...state, articleList: action.payload };
        case UPDATE_ARTICLE:
            return { ...state, isUpdated: action.payload };
        case ADD_ARTICLE:
            return { ...state, articleList: [...state.articleList, action.payload] };
        case SET_TITLE:
            return { ...state, titleText: action.payload };
        case SET_ARTICLE_TEXT:
            return { ...state, articleText: action.payload };
        case SET_DEFAULT:
            return { ...state, titleText: "", articleText: "", isAdded: false, isUpdated: false };
        default:
            return state;
    }
};
