import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";
import { argv } from "./lib/yargs.js";

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;
    case "get":
      getContactById();
      break;
    case "add":
      addContact(name, email, phone);
      break;
    case "remove":
      removeContact(id);
      break;
    default:
      console.warn("Unknown action type!");
  }
}
invokeAction(argv);
