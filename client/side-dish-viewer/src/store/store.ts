import { useState } from "react";
import { ViewMode } from "constaint/other";
import { Action } from "store/action";
import { ApplicationStore } from "store/application-store";

export const useStore = (): ApplicationStore => {
    const [viewMode, setViewMode] = useState<ViewMode>('recent');

    const dispatch = (action: Action) => {
        switch(action.type) {
            case 'setViewMode':
                setViewMode(action.message as ViewMode);
                break;
        }
    };

    return {
        viewMode,
        dispatch
    };
};
