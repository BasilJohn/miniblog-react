import { LOAD_ARTICLE_LIST, ADD_ARTICLE, UPDATE_ARTICLE } from "./types";

export const addArticle = text => {
    return {
        type: ADD_ARTICLE,
        payload: text
    };
};

export const updateArticle = text => {
    return {
        type: UPDATE_ARTICLE,
        payload: text
    };
};

export const loadArticle = text => {
    return {
        type: LOAD_ARTICLE_LIST,
        payload: text
    };
};
