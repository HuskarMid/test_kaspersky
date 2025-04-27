import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { mockData } from '../data'
import { IData_SnippetNews } from '../types/types'

interface SnippetsState {
  list: IData_SnippetNews[]
}

const initialState: SnippetsState = {
  list: [mockData, { ...mockData, ID: 2 }, { ...mockData, ID: 3, SENT: 'Positive' }]
}

const snippetsSlice = createSlice({
  name: 'snippets',
  initialState,
  reducers: {
    addSnippet: (state, action: PayloadAction<IData_SnippetNews>) => {
      state.list.push(action.payload)
    },
    deleteSnippet: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(snippet => snippet.ID !== action.payload)
    },
    updateSnippet: (state, action: PayloadAction<IData_SnippetNews>) => {
      const index = state.list.findIndex(snippet => snippet.ID === action.payload.ID)
      if (index !== -1) {
        state.list[index] = action.payload
      }
    }
  }
})

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['list'],
  debug: process.env.NODE_ENV !== 'production'
}

const persistedReducer = persistReducer(persistConfig, snippetsSlice.reducer)

export const { addSnippet, deleteSnippet, updateSnippet } = snippetsSlice.actions

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      snippets: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          ignoredPaths: ['snippets.list']
        }
      })
  })

  return store
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
