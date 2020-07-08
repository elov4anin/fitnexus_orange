export enum PagesEnum {
    VIDEOS = 'VIDEOS',
    GET_STARTED = 'GET_STARTED',
    VIDEO_ITEM = 'VIDEO_ITEM',
    CHALLENGE = 'CHALLENGE',
    CHALLENGES = 'CHALLENGES',
    ADD_DEVICE = 'ADD_DEVICE',
    CATEGORY = 'CATEGORY',
    ACCOUNT = 'ACCOUNT',
    MEALS = 'MEALS',
    MEAL_PLANNER = 'MEAL_PLANNER',
    WELCOME_PROGRAMMES = 'WELCOME_PROGRAMMES',
    ADD_BODY_COMP = 'ADD_BODY_COMP',
    NOTIFICATIONS = 'NOTIFICATIONS',
    FEEDBACK = 'FEEDBACK',
    MEASUREMENTS = 'MEASUREMENTS',
    ADD_MEASUREMENTS = 'ADD_MEASUREMENTS',
    BEFORE_AFTER = 'BEFORE_AFTER',
    BEFORE_AFTER_LIST = 'BEFORE_AFTER_LIST',
    LIBRARY_PROGRAMMES = 'LIBRARY_PROGRAMMES',
    MY_PROGRAMMES = 'MY_PROGRAMMES',
    NEW_PROGRAMME = 'NEW_PROGRAMME',
    STAT_PROGRAMME = 'STAT_PROGRAMME',
    STAT_BY_DEVICE = 'STAT_BY_DEVICE',
    CLUB = 'CLUB',
    CALENDAR = 'CALENDAR',
    MY_BOOKINGS = 'MY_BOOKINGS',
}

/*export const PagesEnum2IconActiveMapping: Record<PagesEnum, string> = {
    VIDEOS: '',
    GET_STARTED: '',
    VIDEO_ITEM: '',
    CHALLENGE: '',
    CHALLENGES: '',
    ADD_DEVICE: '',
    CATEGORY: '',
};*/


export const PagesEnum2RoutingMapping: Record<PagesEnum, string> = {
    VIDEOS: 'videos',
    GET_STARTED: 'get-started',
    VIDEO_ITEM: 'video-item',
    CHALLENGE: ':id',
    CHALLENGES: 'challenges',
    ADD_DEVICE: 'add-device',
    CATEGORY: 'category',
    ACCOUNT: 'account',
    MEALS: 'meals',
    MEAL_PLANNER: 'meal-planner',
    WELCOME_PROGRAMMES: 'welcome-programs',
    ADD_BODY_COMP: 'add-body-comp',
    NOTIFICATIONS: 'notifications',
    FEEDBACK: 'feedback',
    MEASUREMENTS: 'stat-measurements',
    ADD_MEASUREMENTS: 'new-measurements',
    BEFORE_AFTER: 'before-after',
    BEFORE_AFTER_LIST: 'before-after-list-photo',
    LIBRARY_PROGRAMMES: 'library-programmes',
    MY_PROGRAMMES: 'my-programmes',
    NEW_PROGRAMME: 'new-programme',
    STAT_PROGRAMME: 'stat-programme',
    STAT_BY_DEVICE: 'stat-by-device',
    CLUB: 'club',
    CALENDAR: 'calendar',
    MY_BOOKINGS: 'my-bookings',
};


export const PagesEnum2NamesMapping: Record<PagesEnum, string> = {
    VIDEOS: 'On-demand workouts',
    GET_STARTED: 'Welcome to fitnexus',
    VIDEO_ITEM: 'Core yoga for beginners',
    CHALLENGE: 'Challenge - run 5.5k',
    CHALLENGES: 'Tracking - Challenges',
    ADD_DEVICE: 'Tracking - wearables & apps',
    CATEGORY: 'Cardio',
    ACCOUNT: '',
    MEALS: 'Meals',
    MEAL_PLANNER: 'Meal planner',
    WELCOME_PROGRAMMES: 'Tracking - Programmes',
    ADD_BODY_COMP: 'Tracking - body comp',
    NOTIFICATIONS: 'Notifications',
    FEEDBACK: 'Feedback/Support',
    MEASUREMENTS: 'Body comp - new measurements',
    ADD_MEASUREMENTS: 'New measurement',
    BEFORE_AFTER: 'Tracking - body comp',
    BEFORE_AFTER_LIST: 'Tracking - body comp',
    LIBRARY_PROGRAMMES: 'Programme library',
    MY_PROGRAMMES: 'Programme library',
    NEW_PROGRAMME: 'new programme',
    STAT_PROGRAMME: 'Tracking - Programmes',
    STAT_BY_DEVICE:'Tracking - Wearables & Apps',
    CLUB: '',
    CALENDAR: 'Classes – upcoming',
    MY_BOOKINGS: 'Classes – upcoming',
};
