import service from './.key.json'
import admin from 'firebase-admin'

const colRef = admin
  .initializeApp({
    credential: admin.credential.cert(service)
  })
  .firestore()
  .collection('locations')


colRef
  .where('type', '==', 'country')
  .get()
  .then(snapshot => snapshot.empty
        ? console.log('No matching doc')
        : snapshot.forEach(doc => console.log(doc.data())))
