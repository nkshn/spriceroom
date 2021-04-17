const { Router } = require("express");
const router = Router();

const { bot, chatId } = require("../bot");

// add new one coffee
router.post("/", async (request, response) => {
  const {
    name = "", // user name
    phone = "", // user phone
    coffeName = "", // coffee name
    coffePrice = 0, // coffee price
  } = request.body;

  try {
    bot
      .sendMessage(
        chatId,
        `
        <b>Нова Заявка:</b>\n\n<b>Iм'я:</b> ${name}\n<b>Номер:</b> ${phone}\n<b>Хоче:</b> ${coffeName} (${coffePrice} грн.)
        `,
        { parse_mode: 'HTML' }
      )
    
    response.status(200).json({ msg: "success!" });
  } catch (err) {
    response.status(500).json({ msg: "server responded error", err: err });
  }
});

router.post("/cart", async (request, response) => {
  const {
    cart,
    totalCartSum
  } = request.body;

  console.log(`cart: ${cart}, sum: ${totalCartSum}`);

  try {
    response.status(200).json({ msg: "success!" });
  } catch (err) {
    response.status(500).json({ msg: "server responded error", err: err });
  }
});

module.exports = router;