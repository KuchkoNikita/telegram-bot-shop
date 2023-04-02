import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN_BOT, { polling: true });

export default async (req, res) => {
  bot.on('message', async (msg) => {
    console.log('msg: ', msg);
    const chatId = msg.chat.id;
    const { text } = msg;

    if (text === '/start') {
      await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup: {
          keyboard: [
            [{ text: 'Заполнить форму', web_app: { url: `${process.env.TELEGRAM_WEB_APP}/form` } }],
          ],
        },
      });

      await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Сделать заказ', web_app: { url: process.env.TELEGRAM_WEB_APP } }],
          ],
        },
      });
    }

    if (msg?.web_app_data?.data) {
      try {
        const data = JSON.parse(msg?.web_app_data?.data);
        console.log(data);
        await bot.sendMessage(chatId, 'Спасибо за обратную связь!');
        await bot.sendMessage(chatId, `Ваша страна: ${data?.country}`);
        await bot.sendMessage(chatId, `Ваша улица: ${data?.street}`);

        setTimeout(async () => {
          await bot.sendMessage(chatId, 'Всю информацию вы получите в этом чате');
        }, 3000);
      } catch (e) {
        console.log(e);
      }
    }
  });

  res.status(200).send('OK');
};
