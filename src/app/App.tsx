import { BrowserRouter, Route, Routes } from "react-router"
import { routeConfig } from "./providers/router/routerConfig"
import { Suspense } from "react"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={
            <Suspense key={route.path} fallback={<>loading...</>}>
              {route.element}
            </Suspense>
          }/>
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
