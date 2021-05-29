const { Router } = require("express");
const router = Router();

const asana = require("../asana");
const { bot, chatId } = require("../bot");

// buy one coffee (in one click)
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
        <b>Нова Заявка:</b>\n\n<b>Iм'я:</b> ${name}\n<b>Номер:</b> ${phone}\n<b>Хоче:</b> ${coffeName} (${coffePrice} грн.)\n\n#заявка #в_один_клік
        `,
        { parse_mode: 'HTML' }
      )
    
    response.status(200).json({ msg: "success!" });
  } catch (err) {
    response.status(500).json({ msg: "server responded error", err: err });
  }
});

// buy few cars (cart)
router.post("/cart", async (request, response) => {
  const {
    name = "", // user name
    phone = "", // user phone
    items,
    totalCost
  } = request.body;

  let productsFormatedString = "";
  items.forEach(item => {
    productsFormatedString += `\n- <b>${item.name}:</b> ${item.qty}кіл. * ${item.price}грн. = ${item.totalPrice}грн.`
  })

  try {
    // create tg bot notification
    bot
      .sendMessage(
        chatId,
        `
        <b>Нова Заявка:</b>\n\n<b>Iм'я:</b> ${name}\n<b>Номер:</b> ${phone}\n<b>Загальна вартісь:</b> ${totalCost}грн.\n<b>Хоче:</b>${productsFormatedString}\n\n#заявка #корзина
        `,
        { parse_mode: 'HTML' }
      );
    
    // create asana task
    asana.createTask("Нова Заявка!", 0);

    response.status(200).json({ msg: "success!" });
  } catch (err) {
    response.status(500).json({ msg: "server responded error", err: err });
  }
});

module.exports = router;