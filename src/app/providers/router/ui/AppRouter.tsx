import { Route, Routes } from "react-router"
import { Suspense } from "react"
import { routeConfig } from "../routerConfig"
import { PageLoader } from "../../../../widgets/PageLoader/PageLoader"

export const AppRouter = () => {
  return (
   <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={
            <Suspense key={route.path} fallback={<PageLoader/>}>
              {route.element}
            </Suspense>
          }/>
        ))}
    </Routes>
  )
}
