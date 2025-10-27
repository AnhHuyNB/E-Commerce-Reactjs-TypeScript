import { Suspense } from "react"
import { AppRouter } from "./providers/router/ui/AppRouter"

function App() {

  return (
    <Suspense fallback="loading...">
      <AppRouter />
    </Suspense>
  )
}

export default App
