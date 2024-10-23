const axios = require('axios');

const sendSlackNotification = async (message) => {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    await axios.post(slackWebhookUrl, { text: message });
};

module.exports = sendSlackNotification;