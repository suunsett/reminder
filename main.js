const { app, Notification} = require('electron');


app.whenReady().then(() => {
    setInterval(showEyeReminder, 20 * 60 * 1000);
    setInterval(showReminder, 50 * 60 * 1000);
});

const reminders = [
    "Time for a 10-minute break! 🚶‍♂️ Stand up, stretch, and refresh your mind!",
    "Shake those legs! 🦵 Take a quick walk or do some light stretching for 10 minutes.",
    "Posture check! 🪑 Sit up straight, roll your shoulders, and take a deep breath.",
    "10-minute movement break! 🤸‍♀️ Stretch your back, roll your neck, and recharge!",
    "Stand up and move! 🚶‍♀️ Walk around for a bit—your body will thank you!",
    "Hydration time! 💧 Grab a glass of water and take a short stretch break.",
    "Breathe in... Breathe out... 🌬️ Take a mindful break and reset your focus.",
    "You’ve been sitting for a while! ⏳ Step away for 10 minutes and refresh!"
]

function getRandomReminders(){
    const randomIndex = Math.floor(Math.random() * reminders.length);
    return reminders[randomIndex];
}

function showReminder() {
    new Notification({
        title: "Rest",
        body: getRandomReminders(),
    }).show();
}

function showEyeReminder() {
    new Notification({
        title: "Rest your eyes",
        body: "Look at something 6 meters away for 20 seconds.👀",
    }).show();
}

app.on('window-all-closed', (event) => {
    event.preventDefault();
});