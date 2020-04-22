import {PagesEnum2RoutingMapping} from './pages.enum';

export enum TabsEnum {
    VIDEO = 'VIDEO',
    STATS = 'STATS',
    MEALS = 'MEALS',
}

export const TabsEnum2IconMapping: Record<TabsEnum, string> = {
    STATS: 'stat.svg',
    MEALS: 'food.svg',
    VIDEO: 'video.svg',
};
export const TabsEnum2IconActiveMapping: Record<TabsEnum, string> = {
    STATS: 'stat-active.svg',
    MEALS: 'food-active.svg',
    VIDEO: 'video-active.svg',
};


export const TabsEnum2RoutingMapping: Record<TabsEnum, string> = {
    STATS: PagesEnum2RoutingMapping.ADD_DEVICE,
    MEALS: PagesEnum2RoutingMapping.MEALS,
    VIDEO: PagesEnum2RoutingMapping.VIDEOS,
};

export const TabsEnum2ActivePagesMapping: Record<TabsEnum, string[]> = {
    //NEWS: ['news-feed', 'members', 'members-connect'],
    STATS: [
        'stat-by-device',
        PagesEnum2RoutingMapping.ADD_DEVICE,
        PagesEnum2RoutingMapping.ADD_BODY_COMP,
        PagesEnum2RoutingMapping.WELCOME_PROGRAMMES,
        PagesEnum2RoutingMapping.CHALLENGES,
        'training',
        'stat-program',
        'before-after',
        'new-measurements',
        'stat-measurements',
        'measurement-detail',
        'library-programs',
        'my-programs'
    ],
  /*  CALENDAR: ['calendar', 'my-bookings', 'class', 'feedback'],
    RATING: ['challenges', 'leaderboard'],*/
    MEALS: [PagesEnum2RoutingMapping.MEALS, PagesEnum2RoutingMapping.MEAL_PLANNER],

    VIDEO: [PagesEnum2RoutingMapping.VIDEOS]
};
