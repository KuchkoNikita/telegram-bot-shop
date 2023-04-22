import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN_BOT, { polling: true });

export default async (req, res) => {
  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const { text } = msg;

    if (text === '/start') {
      await bot.sendMessage(chatId, 'Вам уже исполнилось 18 лет?', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Сделать заказ', callback_data: 'yes' }],
            [{ text: 'Наш магазин', callback_data: 'no' }],
          ],
        },
      });

      await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup: {
          keyboard: [
            [
              { text: 'Каталог «Точки»', web_app: { url: process.env.TELEGRAM_WEB_APP } },
              { text: 'Мои заказы', callback_data: '2' },
            ],
            [{ text: 'Написать нам', url: '@tochka_vape_manager' }],
          ],
        },
      });
    }
  });

  res.status(200).send('OK');
};
