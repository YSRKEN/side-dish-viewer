import { ActionType } from "constaint/action-type";

export interface Action {
    type: ActionType;
    message: string;
}
