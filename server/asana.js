const asana = require('asana');

const helper = require('./helpers/index');

const asanaJsonFile = helper.getDataFromJson("./config/asana.json");

// connecting to asana api
const client = asana.Client
  .create({ "defaultHeaders": { "asana-enable": "string_ids,new_sections,new_user_task_lists" } })
  .useAccessToken(asanaJsonFile.privateAccessToken);

function createTask(taskName, from, data) {
  // html_notes: "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>",

  /**
   * cart docs:
   * if from === 0, its means that it was buyed from section: "cart"
   * if from === 1, its means that it was buyed from section: "buy in one click"
   */
  let tags = [];
  let notesStr = `Нова заявка\n\n`;

  if(from !== undefined) {
    if(from === 0) {
      tags.push(asanaJsonFile.tags.cart);

      let nameStr = `Iм'я: ${data.name}\n`;
      let phoneStr = `Номер: ${data.phone}\n`;
      // let coffeeStr = `Хоче: ${data.coffeName} (${data.coffePrice} грн.)\n\n`;
      let bottomStr = `#заявка #корзина`;

      // notesStr += nameStr + phoneStr + coffeeStr + bottomStr;
    }
    if(from === 1) {
      tags.push(asanaJsonFile.tags.click);

      let nameStr = `Iм'я: ${data.name}\n`;
      let phoneStr = `Номер: ${data.phone}\n`;
      let coffeeStr = `Хоче: ${data.coffeName} (${data.coffePrice} грн.)\n\n`;
      let bottomStr = `#заявка #в_один_клік`;

      notesStr += nameStr + phoneStr + coffeeStr + bottomStr;
    }
  }

  let name = "adsd";
  let phone = "phone_number";
  let price = "total_amount";
  
  try {
    const taskObj = {
      name: taskName,
      projects: asanaJsonFile.ids.project,
      workspace: asanaJsonFile.ids.workspace,
      section: asanaJsonFile.sections.todo,
      tags: tags,
      notes: `Нова заявка\n\nІм'я: ${name}\nНомер: ${phone}\nЗагальна вартісь: ${price}\n`,
      assignee: asanaJsonFile.users.tappik
    };
    
    client.tasks
      .createTask(taskObj)
      .catch(err => console.log("error on creating task in asana, err: ", err));
  } catch (err) { }
}

module.exports = {
  createTask
};