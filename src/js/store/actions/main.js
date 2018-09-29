import {
    LOAD_ARTICLE_LIST,
    ADD_ARTICLE,
    UPDATE_ARTICLE,
    SET_TITLE,
    SET_ARTICLE_TEXT,
    SET_DEFAULT,
    SET_VALUES
} from "./types";

export const addArticle = value => {
    return {
        type: ADD_ARTICLE,
        payload: value
    };
};

export const updateArticle = value => {
    console.log(value)
    return {
        type: UPDATE_ARTICLE,
        payload: value
    };
};

export const loadArticle = () => {
    return {
        type: LOAD_ARTICLE_LIST
    };
};

export const setTitle = text => {
    return {
        type: SET_TITLE,
        payload: text
    };
};

export const setArticleText = text => {
    return {
        type: SET_ARTICLE_TEXT,
        payload: text
    };
};

export const setToDefault=()=>{

    return {
        type: SET_DEFAULT
    };
}

export const setEditValues=value=>{
    return {
        type: SET_VALUES,
        payload:value
    };
}