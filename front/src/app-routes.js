import { HomePage, TasksPage, ProfilePage, UsersPage, EjemplosPage, FormPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    }, 
  {
    path: '/users',
    element: UsersPage
  }, 
  {
    path: '/ejemplos',
    element: EjemplosPage
  }, 
  {
    path: '/form',
    element: FormPage
  }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
