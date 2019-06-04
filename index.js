const request = require("request-promise");
const cheerio = require("cheerio");
const asciichart = require("asciichart");
const cron = require("node-cron");

const checkSubscriberCount = async channelUrl => {
  const response = await request(channelUrl);

  let $ = cheerio.load(response);

  const subscriberCount = $(
    '[class="yt-subscription-button-subscriber-count-branded-horizontal subscribed yt-uix-tooltip"]'
  ).attr("title");

  return subscriberCount.replace(/\,+/g, "");
};

(async () => {
  const youtubeChannelUrl = "https://www.youtube.com/PewDiePie";
  let subscribersArray = [];

  cron.schedule("*/2 * * * * *", async () => {
    const subs = await checkSubscriberCount(youtubeChannelUrl);

    if (subs) {
      subscribersArray.push(subs);
    }
    // console.log(`Time: ${new Date().toLocaleString()}`);
    // console.log(`Subscribers: ${subs}`);

    if (subscribersArray.length > 1) {
      console.log("\033[2J"); // clears console
      console.log(asciichart.plot(subscribersArray, { height: 30 }));
    }
  });
})();
