export enum PagesEnum {
    VIDEOS = 'VIDEOS',
    GET_STARTED = 'GET_STARTED',
    VIDEO_ITEM = 'VIDEO_ITEM'
}

export const PagesEnum2IconActiveMapping: Record<PagesEnum, string> = {
    VIDEOS: '',
    GET_STARTED: '',
    VIDEO_ITEM: ''
};


export const PagesEnum2RoutingMapping: Record<PagesEnum, string> = {
    VIDEOS: 'videos',
    GET_STARTED: 'get-started',
    VIDEO_ITEM: 'video-item'
};


export const PagesEnum2NamesMapping: Record<PagesEnum, string> = {
    VIDEOS: '',
    GET_STARTED: '',
    VIDEO_ITEM: 'Core yoga for beginners'
};
