// import modular routes
import homeRoutes from "@modules/home/routes"
import authRoutes from "@modules/auth/routes"

const routers = [...homeRoutes, ...authRoutes]
 export default routers