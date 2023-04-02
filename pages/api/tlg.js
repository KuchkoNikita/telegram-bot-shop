import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN_BOT, { polling: true });

export default async (req, res) => {
  bot.on('message', async (msg) => {
    console.log('msg: ', msg);
    const chatId = msg.chat.id;
    const { text } = msg;

    if (text === '/start') {
      await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Сделать заказ', web_app: { url: process.env.TELEGRAM_WEB_APP } }],
          ],
        },
      });
    }
  });

  res.status(200).send('OK');
};
