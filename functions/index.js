const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Anup the Boss!");
});

const createNotification = (notification) => {
    return admin
        .firestore()
        .collection("notifications")
        .add(notification)
        .then((doc) => console.log("Notification added", doc));
};

exports.thoughtCreated = functions.firestore
    .document("thoughts/{thoughtId}")
    .onCreate((doc) => {
        const thought = doc.data();
        const notification = {
            content: "added a new thought.",
            user: `${thought.authorFirstName} ${thought.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
        };

        return createNotification(notification);
    });

exports.userJoined = functions.auth.user().onCreate((user) => {
    return admin
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
            const newUser = doc.data();
            const notification = {
                content: "has joined PostMyThoughts!",
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp(),
            };

            return createNotification(notification);
        });
});
