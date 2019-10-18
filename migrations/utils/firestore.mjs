import admin from 'firebase-admin'
import service from '../.service-account.json'

/* Singleton for intialized app */
let app
export const initialize = () => {
  if (app) return app
  app = admin.initializeApp({ credential: admin.credential.cert(service) })
  return app
}

export const firestore = () => initialize().firestore()
export const database = () => initialize().database()

export const batch = () => firestore().batch()
export const collection = (name) => firestore().collection(name)
