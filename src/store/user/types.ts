import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type UserAction = ActionType<typeof actions>

export interface UserState {
    readonly userData: UserData
    readonly error: string | null
}

export interface UserData {
    readonly id: string
    readonly createdAt: string
    readonly login: string
    readonly nick : string | null
    readonly avatar: UserAvatarData | null
    // readonly acl: [string]
    // readonly chats: [ChatData]
}

export interface UserAvatarData {
    readonly id: string | null
    readonly url: string | null
}