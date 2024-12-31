// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/_index.tsx")] satisfies RouteConfig;

import { type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default flatRoutes({
  rootDirectory: "pages",
}) satisfies RouteConfig;