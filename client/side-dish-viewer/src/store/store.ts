import { useState } from "react";
import { ViewMode } from "constaint/other";
import { Action } from "store/action";
import { ApplicationStore } from "store/application-store";
import { paddingNumber } from "service/utility";

export const useStore = (): ApplicationStore => {
    const [viewMode, setViewMode] = useState<ViewMode>('recent');
    const [logData, setLogData] = useState('');

    const dispatch = (action: Action) => {
        switch(action.type) {
            case 'setViewMode':
                setViewMode(action.message as ViewMode);
                break;
            case 'addLog':
                const nowDate = new Date();
                const paddingHour = paddingNumber(nowDate.getHours(), 2);
                const paddingMinute = paddingNumber(nowDate.getMinutes(), 2);
                const paddingSecond = paddingNumber(nowDate.getSeconds(), 2);
                const dateString = `${paddingHour}:${paddingMinute}:${paddingSecond}`;
                const addedLogData = logData + `\n${dateString}　` + action.message;
                setLogData(addedLogData);
                break;
        }
    };

    return {
        viewMode,
        logData,
        dispatch
    };
};
