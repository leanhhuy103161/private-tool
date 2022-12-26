
import { authApi } from '@modules/auth/stores/services/auth'
import auth from '@modules/auth/stores/slices/auth'
import counter from '@modules/home/stores/slices/counter'
import flow from '@modules/home/stores/slices/flow'

const rootReducer = {
    [authApi.reducerPath]: authApi.reducer,
    counter,
    flow,
    auth,
}

export default rootReducer