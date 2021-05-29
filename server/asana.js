const asana = require('asana');

const helper = require('./helpers/index');

const asanaJsonFile = helper.getDataFromJson("./config/asana.json");

// connecting to asana api
const client = asana.Client
  .create({ "defaultHeaders": { "asana-enable": "string_ids,new_sections,new_user_task_lists" } })
  .useAccessToken(asanaJsonFile.privateAccessToken);

function createTask(taskName, from) {
  // html_notes: "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>",

  /**
   * cart docs:
   * if from === 0, its means that it was buyed from section: "cart"
   * if from === 1, its means that it was buyed from section: "buy in one click"
   */
  let tags = [];
  if(from !== undefined) {
    if(from === 0) { tags.push(asanaJsonFile.tags.cart); }
    if(from === 1) { tags.push(asanaJsonFile.tags.click); }
  } 
  
  try {
    const taskObj = {
      name: taskName,
      projects: asanaJsonFile.ids.project,
      workspace: asanaJsonFile.ids.workspace,
      section: asanaJsonFile.sections.todo,
      tags: tags,
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