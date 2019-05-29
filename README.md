# BargainingBotDatabasePubSub
Cloud Function triggered on a pub/sub topic to add orders to firestore database

The Dialogflow NLP platform has a limit of **5 sec** to recieve a response form the webhook. Providing a response and updating the database was taking more than 5 sec in the [Dialogflow Webhook](https://github.com/shounakmulay/BargainingBotDialogflowWebhook).

Thus the database updating was extracted to a separate function that is triggerd on a message in the Pub/Sub topic. 
All this functions does is take the data from the topic and update the Firestore database.

This function is triggered on every message put in the pub sub topic.
* First you need to create a [Pub/Sub topic](https://cloud.google.com/pubsub/docs/quickstart-py-mac).
* Then deploy the code in this repo as a [Cloud Function that is triggered on the Pub/Sub topic you created](https://cloud.google.com/functions/docs/calling/pubsub#functions_calling_pubsub-node8-10).
* Once this is done, you have completed the backend setup for the [Bargaining Bot](https://github.com/shounakmulay/BargainingBot).
