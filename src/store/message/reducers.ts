import { getType } from "typesafe-actions";

import { MessageState, MessageAction } from "./types";
import * as actions from "./actions";

const initialState: MessageState = {
    error: null,
    messageData: {
        _id: '',
        createdAt: '',
        owner: {
            _id: '',
            login: '',
            nick : '',
            avatar: {
                _id: '',
                url: ''
            }
        },
        chat: {
            _id: '',
            owner: {
                _id: '',
                login: '',
                nick : '',
                avatar: {
                    _id: '',
                    url: ''
                }
            },
            title: '',
            createdAt: '',
            members: [],
            messages: [],
            avatar: {
                _id: '',
                url: ''
            }
        },
        text: ''
    }
}

export default (state: MessageState = initialState, action: MessageAction): MessageState => {
    switch (action.type) {
        case getType(actions.sendMessage.success):
            return {
                ...state,
                error: null,
                messageData: action.payload
            }
        case getType(actions.sendMessage.failure):
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}