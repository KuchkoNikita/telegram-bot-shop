// const TelegramBot = require('node-telegram-bot-api');
// const express = require('express');
// const cors = require('cors');

// const TELEGRAM_TOKEN_BOT = '5894520273:AAFQNneXUjpiFoqab1KNCamJ2rhhG1oqPt0';
// const ANSWER_TELEGRAM_TOKEN_BOT = '';
// const TELEGRAM_WEB_APP = 'https://master--celadon-rabanadas-6e8c54.netlify.app/';

// const bot = new TelegramBot(TELEGRAM_TOKEN_BOT, { polling: true });
// const answerBot = new TelegramBot(ANSWER_TELEGRAM_TOKEN_BOT, { polling: true });

// const app = express();

// app.use(express.json());
// app.use(cors());

// bot.on('polling_error', (msg) => console.log(msg));

// bot.on('message', async (msg) => {
//   const chatId = msg.chat.id;
//   const { text } = msg;

//   if (text === '/start') {
//     await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
//       reply_markup: {
//         keyboard: [
//           [{ text: 'Заполнить форму', web_app: { url: `${TELEGRAM_WEB_APP}/form` } }],
//         ],
//       },
//     });

//     await bot.sendMessage(chatId, 'Заходи в наш интернет магазин по кнопке ниже', {
//       reply_markup: {
//         inline_keyboard: [
//           [{ text: 'Сделать заказ', web_app: { url: TELEGRAM_WEB_APP } }],
//         ],
//       },
//     });
//   }

//   if (msg?.web_app_data?.data) {
//     try {
//       const data = JSON.parse(msg?.web_app_data?.data);
//       console.log(data);
//       await bot.sendMessage(chatId, 'Спасибо за обратную связь!');
//       await bot.sendMessage(chatId, `Ваша страна: ${data?.country}`);
//       await bot.sendMessage(chatId, `Ваша улица: ${data?.street}`);

//       setTimeout(async () => {
//         await bot.sendMessage(chatId, 'Всю информацию вы получите в этом чате');
//       }, 3000);
//     } catch (e) {
//       console.log(e);
//     }
//   }
// });

// app.post('/web-data', async (req, res) => {
//   const { queryId, products = [], totalPrice } = req.body;
//   try {
//     await bot.answerWebAppQuery(queryId, {
//       type: 'article',
//       id: queryId,
//       title: 'Успешная покупка',
//       input_message_content: {
//         message_text: ` Поздравляю с покупкой, вы приобрели товар на сумму ${totalPrice}, ${products.map((item) => item.title).join(', ')}`,
//       },
//     });

//     return res.status(200).json({});
//   } catch (e) {
//     return res.status(500).json({});
//   }
// });

// const PORT = 8000;

// app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
