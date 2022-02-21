
import { authApi } from '@modules/auth/stores/services/auth'
import auth from '@modules/auth/stores/slices/auth'
import counter from '@modules/home/stores/slices/counter'

const rootReducer = {
    [authApi.reducerPath]: authApi.reducer,
    counter,
    auth,
}

export default rootReducer