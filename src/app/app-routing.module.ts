import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {PagesEnum2RoutingMapping} from './shared/enums/pages.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'news-feed',
    loadChildren: () => import('./pages/news-feed/news-feed.module').then(m => m.NewsFeedPageModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./pages/members/members.module').then(m => m.MembersPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.ADD_DEVICE,
    loadChildren: () => import('./pages/add-device/add-device.module').then(m => m.AddDeviceModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.CHALLENGES,
    loadChildren: () => import('./pages/challenges/challenges.module').then(m => m.ChallengesModule)
  },
  {
    path: PagesEnum2RoutingMapping.MEALS,
    loadChildren: () => import('./pages/food/food.module').then(m => m.FoodPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.GET_STARTED,
    loadChildren: () => import('./pages/get-started/get-started.module').then(m => m.GetStartedPageModule)
  },
  {
    path: 'welcome-premium',
    loadChildren: () => import('./pages/welcome-premium/welcome-premium.module').then(m => m.WelcomePremiumPageModule)
  },
  {
    path: 'connect-tracker',
    loadChildren: () => import('./pages/connect-tracker/connect-tracker.module').then( m => m.ConnectTrackerPageModule)
  },
  {
    path: 'stat-by-device',
    loadChildren: () => import('./pages/stat-by-device/stat-by-device.module').then( m => m.StatByDevicePageModule)
  },
  {
    path: PagesEnum2RoutingMapping.WELCOME_PROGRAMMES,
    loadChildren: () => import('./pages/welcome-programmes/welcome-programmes.module').then( m => m.WelcomeProgrammesPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.LIBRARY_PROGRAMMES,
    loadChildren: () => import('./pages/library-programs/library-programs.module').then( m => m.LibraryProgramsPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.MY_PROGRAMMES,
    loadChildren: () => import('./pages/my-programs/my-programs.module').then( m => m.MyProgramsPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.NEW_PROGRAMME,
    loadChildren: () => import('./pages/training/training.module').then( m => m.TrainingPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.ADD_BODY_COMP,
    loadChildren: () => import('./pages/add-body-comp/add-body-comp.module').then( m => m.AddBodyCompPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.ADD_MEASUREMENTS,
    loadChildren: () => import('./pages/new-measurements/new-measurements.module').then( m => m.NewMeasurementsPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.BEFORE_AFTER,
    loadChildren: () => import('./pages/before-after/before-after.module').then( m => m.BeforeAfterPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.MEASUREMENTS,
    loadChildren: () => import('./pages/stat-measurements/stat-measurements.module').then( m => m.StatMeasurementsPageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./pages/leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.MEAL_PLANNER,
    loadChildren: () => import('./pages/meal-planner/meal-planner.module').then( m => m.MealPlannerPageModule)
  },
  {
    path: 'my-bookings',
    loadChildren: () => import('./pages/my-bookings/my-bookings.module').then( m => m.MyBookingsPageModule)
  },
  {
    path: 'class',
    loadChildren: () => import('./pages/class/class.module').then( m => m.ClassPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.FEEDBACK,
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'measurement-detail',
    loadChildren: () => import('./pages/measurement-detail/measurement-detail.module').then( m => m.MeasurementDetailPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.ACCOUNT,
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'members-connect',
    loadChildren: () => import('./pages/members-connect/members-connect.module').then( m => m.MembersConnectPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.STAT_PROGRAMME,
    loadChildren: () => import('./pages/stat-program/stat-program.module').then( m => m.StatProgramPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.NOTIFICATIONS,
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'stuff',
    loadChildren: () => import('./pages/messages-staff/messages-staff.module').then( m => m.MessagesStaffPageModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./pages/albums/albums.module').then( m => m.AlbumsPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.VIDEOS,
    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: PagesEnum2RoutingMapping.BEFORE_AFTER_LIST,
    loadChildren: () => import('./pages/before-after-list-photo/before-after-list-photo.module').then( m => m.BeforeAfterListPhotoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
