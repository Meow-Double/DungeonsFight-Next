export const ROUTES = {
  MAIN: "/main",
  DUNGEON: "/dungeon",
  SETTINGS: "/settings",
  SHOP: "/shop",
  REGISTER: "/register",
  LOGIN: "/login",
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
