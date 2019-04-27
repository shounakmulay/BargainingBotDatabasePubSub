# BargainingBotDatabasePubSub
Cloud Function triggered on a pub/sub topic to add orders to firestore database

The Dialogflow NLP platform has a limit of 5 sec to recieve a response form the webhook. Providing a response and updating the database was taking more than 5 sec in the [Dialogflow Webhook](https://github.com/shounakmulay/BargainingBotDialogflowWebhook).

Thus the database updating was extracted to a separate function that is triggerd on a message in the Pub/Sub topic. 
All this functions does is
```Typescript
export const addToFirestorePubSub = functions.pubsub.topic('add-to-firestore')
    .onPublish(async (message) => {

        const db = admin.firestore()

        const collectionName = message.json.collectionName
        const data = message.json.data
        await db.collection(collectionName).add(data)
            .then((id) => console.log(`Added a new document with ID ${id}`))
    })
```

#### View the entire System Architecture [here](https://github.com/shounakmulay/BargainingBot)
