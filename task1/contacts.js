import fs from "fs";
import path from "path";

const contactPath = path.join("./db", "contacts.json");
console.log(contactPath);

function listContacts() {
  fs.readFile(`${contactPath}`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}
console.log(listContacts());

// function getContactById(contactId) {
//   fs.readFile(`${contactPath}`, "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     return data;
//   }).find((contact) => contact.id === contactId);
// }
// console.log(getContactById(1));
