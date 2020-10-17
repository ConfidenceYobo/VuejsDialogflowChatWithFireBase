module.exports = {
  Environment: {
    Debug: false,
    Port: 5000,
  },
  Dialogflow: {
    agent: "youth-alive-real",
  },
  app: {
    muted: true, // <- mute microphone by default
    googleIt: false, // <- ask users to google their request, in case of input.unknown action
    dialogflowUrl: "https://youth-alive.herokuapp.com/chat",
  },
  locale: {
    strings: {
      welcomeTitle: "Chat with Us",
      author: "Confidence Yobo",
      queryTitle: "Drop your complain ...",
      voiceTitle: "Go ahead, im listening...",
    },
    settings: {
      speechLang: "en-GB", // <- output language
      recognitionLang: "en-US", // <- input(recognition) language
    },
  },
};