import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type ContactsAction = ActionType<typeof actions>

export interface ContactsState {
    readonly contactsData: UserData[]
    readonly error: string | null
}

export interface UserData {
    readonly _id: string
    readonly createdAt: string
    readonly login: string
    readonly nick : string | null
    readonly avatar: UserAvatarData | null
    // readonly acl: [string]
    // readonly chats: [ChatData]
}

export interface UserAvatarData {
    readonly _id: string | null
    readonly url: string | null
}