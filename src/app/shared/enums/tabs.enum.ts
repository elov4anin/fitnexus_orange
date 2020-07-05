import {PagesEnum2RoutingMapping} from './pages.enum';

export enum TabsEnum {
    CLUB = 'CLUB',
    CALENDAR = 'CALENDAR',
    VIDEO = 'VIDEO',
    STATS = 'STATS',
    MEALS = 'MEALS',
}

export const TabsEnum2IconMapping: Record<TabsEnum, string> = {
    CLUB: 'club.svg',
    CALENDAR: 'calendar.svg',
    STATS: 'stat.svg',
    MEALS: 'food.svg',
    VIDEO: 'video.svg',
};
export const TabsEnum2IconActiveMapping: Record<TabsEnum, string> = {
    CLUB: 'club-active.svg',
    CALENDAR: 'calendar-active.svg',
    STATS: 'stat-active.svg',
    MEALS: 'food-active.svg',
    VIDEO: 'video-active.svg',
};


export const TabsEnum2RoutingMapping: Record<TabsEnum, string> = {
    CLUB: PagesEnum2RoutingMapping.CLUB,
    CALENDAR: PagesEnum2RoutingMapping.CALENDAR,
    STATS: PagesEnum2RoutingMapping.ADD_DEVICE,
    MEALS: PagesEnum2RoutingMapping.MEALS,
    VIDEO: PagesEnum2RoutingMapping.VIDEOS,
};

export const TabsEnum2ActivePagesMapping: Record<TabsEnum, string[]> = {
    CLUB: [PagesEnum2RoutingMapping.CLUB],
    CALENDAR: [PagesEnum2RoutingMapping.CALENDAR, PagesEnum2RoutingMapping.MY_BOOKINGS],
    STATS: [
        'stat-by-device',
        PagesEnum2RoutingMapping.ADD_DEVICE,
        PagesEnum2RoutingMapping.ADD_BODY_COMP,
        PagesEnum2RoutingMapping.WELCOME_PROGRAMMES,
        PagesEnum2RoutingMapping.CHALLENGES,
        PagesEnum2RoutingMapping.NEW_PROGRAMME,
        PagesEnum2RoutingMapping.STAT_PROGRAMME,
        PagesEnum2RoutingMapping.BEFORE_AFTER,
        PagesEnum2RoutingMapping.BEFORE_AFTER_LIST,
        PagesEnum2RoutingMapping.ADD_MEASUREMENTS,
        PagesEnum2RoutingMapping.MEASUREMENTS,
        'stat-measurements',
        'measurement-detail',
        PagesEnum2RoutingMapping.LIBRARY_PROGRAMMES,
        PagesEnum2RoutingMapping.MY_PROGRAMMES
    ],
  /*  CALENDAR: ['calendar', 'my-bookings', 'class', 'feedback'],
    RATING: ['challenges', 'leaderboard'],*/
    MEALS: [PagesEnum2RoutingMapping.MEALS, PagesEnum2RoutingMapping.MEAL_PLANNER],

    VIDEO: [PagesEnum2RoutingMapping.VIDEOS]
};
