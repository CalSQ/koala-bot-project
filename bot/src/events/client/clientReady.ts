import { Embed, EmbedBuilder, Events } from "discord.js"
import { event } from "../../interfaces"

const error = {
  name: `AxiosError`,
  message: `Request failed with status code 401`,
  stack: `Error
  at new AxiosError (/home/cs/Documents/Development/More/web-scrape/node_modules/axios/lib/core/AxiosError.js:21:4)
  at settle (/home/cs/Documents/Development/More/web-scrape/node_modules/axios/lib/core/settle.js:2:0)
  at handleStreamEnd (/home/cs/Documents/Development/More/web-scrape/node_modules/axios/lib/adapters/http.js:589:9)
  at endReadableNT (native)
  at processTicksAndRejections (native)
  at <anonymous> (/home/cs/Documents/Development/More/web-scrape/node_modules/axios/lib/core/Axios.js:49:17)
  at asyncFunctionResume (native)
  at promiseReactionJobWithoutPromiseUnwrapAsyncContext (native)
  at promiseReactionJob (native)
  at processTicksAndRejections (native)`,
}

export default event(Events.ClientReady, true, async ({ client }) => {
  console.log(`${client.user?.username} has logged in!`)
  await client.deploy()

  const channel = await client.channels.cache.get("1085873944751521792")
  if (channel?.isTextBased()) {
    const embed = new EmbedBuilder()
      .setTitle(error.name)
      .setDescription(
        `### Message\n\`\`\`cmd\n${error.message}\n\`\`\`\n### Stack\n\`\`\`cmd\n${error.stack}\n\`\`\``
      )
      .setFooter({ text: `Error occured at ` })
      .setTimestamp(new Date())
    channel.send({ embeds: [embed] })
  }
})
