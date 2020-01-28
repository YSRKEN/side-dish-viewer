import { ViewMode } from "constaint/other";
import { Action } from "store/action";

export interface ApplicationStore {
    viewMode: ViewMode;
    dispatch: (action: Action) => void;
};
