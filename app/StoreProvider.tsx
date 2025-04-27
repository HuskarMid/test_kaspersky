'use client'
import { useRef, useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { makeStore, AppStore } from './lib/store/store'
import { persistStore, Persistor } from 'redux-persist'

const initializeStore = () => {
  const store = makeStore()
  const persistor = persistStore(store)
  return { store, persistor }
}

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const storeRef = useRef<{ store: AppStore; persistor: Persistor } | null>(null)

  if (!storeRef.current) {
    storeRef.current = initializeStore()
  }

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (typeof window === 'undefined' || isLoading) {
    return null
  }

  return (
    <Provider store={storeRef.current.store}>
      <PersistGate loading={null} persistor={storeRef.current.persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}