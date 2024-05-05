import HomePage from "../pages/HomePage";
import PersonDetail from "../pages/PersonDetail";
import FavoriteList from "../pages/FavoriteList";
import MediaDetail from "../pages/MediaDetail";
import MediaList from "../pages/MediaList";
import MediaSearch from "../pages/MediaSearch";
import PasswordUpdate from "../pages/PasswordUpdate";
import ReviewList from "../pages/ReviewList";
import ProtectedPage from "../components/common/ProtectedPage";
import Books from "../pages/Books";
import Categories from "../pages/Categories";
import Reading from "../pages/Reading";

export const routesGen = {
  home: "/",
  mediaList: (type) => `/${type}`,
  mediaDetail: (type, id) => `/${type}/${id}`,
  mediaSearch: "/search",
  person: (id) => `/person/${id}`,
  favoriteList: "/favorites",
  reviewList: "/reviews",
  passwordUpdate: "password-update",
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/person/:personId",
    element: <PersonDetail />,
    state: "person.detail",
  },
  {
    path: "/discover",
    element: <MediaSearch />,
    state: "discover",
  },
  {
    path: "/password-update",
    element: (
      <ProtectedPage>
        <PasswordUpdate />
      </ProtectedPage>
    ),
    state: "password.update",
  },
  {
    path: "/favorites",
    element: (
      <ProtectedPage>
        <FavoriteList />
      </ProtectedPage>
    ),
    state: "favorites",
  },
  {
    path: "categories",
    element: <Categories />,
    state: "categories",
  },
  {
    path: "/:mediaType",
    element: <MediaList />,
  },
  {
    path: "/book/:id",
    element: <MediaDetail />,
  },
  {
    path: "books/:top",
    element: <Books />,
    state: "top-books",
  },
  {
    path: "reading",
    element: <Reading />,
    state: "reading",
  },
];

export default routes;
