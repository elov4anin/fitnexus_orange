export enum PagesEnum {
    VIDEOS = 'VIDEOS',
    GET_STARTED = 'GET_STARTED',
    VIDEO_ITEM = 'VIDEO_ITEM',
    CHALLENGE = 'CHALLENGE',
    CHALLENGES = 'CHALLENGES'
}

export const PagesEnum2IconActiveMapping: Record<PagesEnum, string> = {
    VIDEOS: '',
    GET_STARTED: '',
    VIDEO_ITEM: '',
    CHALLENGE: '',
    CHALLENGES: ''
};


export const PagesEnum2RoutingMapping: Record<PagesEnum, string> = {
    VIDEOS: 'videos',
    GET_STARTED: 'get-started',
    VIDEO_ITEM: 'video-item',
    CHALLENGE: ':id',
    CHALLENGES: 'challenges'
};


export const PagesEnum2NamesMapping: Record<PagesEnum, string> = {
    VIDEOS: '',
    GET_STARTED: '',
    VIDEO_ITEM: 'Core yoga for beginners',
    CHALLENGE: 'Challenge - run 5.5k',
    CHALLENGES: ''
};
