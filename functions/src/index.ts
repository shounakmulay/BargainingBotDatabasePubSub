import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase)

admin.firestore().settings({ timestampsInSnapshots: true })

export const addToFirestorePubSub = functions.pubsub.topic('add-to-firestore')
    .onPublish(async (message) => {


        const db = admin.firestore()



        const collectionName = message.json.collectionName
        const data = message.json.data
        await db.collection(collectionName).add(data)
            .then((id) => console.log(`Added a new document with ID ${id}`))


    })