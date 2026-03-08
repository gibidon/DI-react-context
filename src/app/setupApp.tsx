import { createBrowserRouter } from "react-router-dom";
import { todoRoutes } from "./todoStore.routes";
import { BaseLayout } from "./layouts/BaseLayout";

export const setupApp = () => {
  const router = createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [todoRoutes],
    },
  ]);

  return router;
};

