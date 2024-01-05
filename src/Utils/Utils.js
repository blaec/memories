import {RECENT_PERIOD} from "./Constants";

export const isAddedRecently = (added) => {
    return added !== undefined
        && (new Date() - new Date(added)) / (1000 * 60 * 60 * 24) < RECENT_PERIOD;
};
