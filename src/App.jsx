import { Suspense } from "react"
import LocalizeProvider from "./Context/LocalizeContext"
import CustomRoutes from "./Routes/CustomRoutes"
import { AuthProvider } from "./Context/AuthContext"
function App() {
  return (
        <LocalizeProvider>
          <Suspense fallback={<>loading...</>}>
            <AuthProvider>
              <CustomRoutes />
            </AuthProvider>
          </Suspense>
        </LocalizeProvider>
  )
}

export default App
