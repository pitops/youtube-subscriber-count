# Realtime youtube subscribers count (in command line)

This is a cron-based (1 second interval) scraper that checks the youtube subscribers count for a specific channel. The output can be a graph using [asciichart](https://github.com/kroitor/asciichart) or plain console.logs. You can take a look at `index.js` and choose the one you prefer.

## Setup

Change the default `PewDiePie` channel in `index.js` to the one you want to observe and you are good to go.

```bash
npm install # or yarn

node index.js
```

# Contributions Welcome
