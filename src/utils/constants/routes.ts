export const ROUTES = {
  MAIN: "/",
  DUNGEON: "/dungeon",
  SETTINGS: "/settings",
  SHOP: "/shop",
  REGISTER: "/register",
  LOGIN: "/login",
  PROFILE: "/profile",
  NEWS: "/news",
  HELP: "/help",
  USERS: "/users",
};

type RouteType = (typeof ROUTES)[keyof typeof ROUTES];

interface pathWithSlugParams {
  router: RouteType | RouteType[];
  slug: string | number | Array<string | number> | undefined;
}

export const pathWithSlug = ({ router, slug }: pathWithSlugParams) => {
  const currentRouter = Array.isArray(router) ? router.join("") : router;
  const currentSlug = Array.isArray(slug) ? slug.join("/") : slug;

  return `${currentRouter}/${currentSlug}`;
};
