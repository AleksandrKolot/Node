import fs from "fs";
import path from "path";

// const contactPath = path.join("./db", "contacts.json");
// console.log(contactPath);
const contactPath = path.resolve("db/contacts.json");

async function getContacts() {
  try {
    const result = await fs.readFile(contactPath, "utf8");
    const contacts = JSON.parse(result);
    return contacts;
  } catch (err) {
    console.error(err);
  }
}

export async function listContacts() {
  try {
    const contacts = await getContacts();
    contacts.forEach((contact) => {
      console.log(contact.name);
    });
  } catch (err) {
    console.error(err);
  }
}
console.log(listContacts());

// function listContacts() {
//   fs.readFile(`${contactPath}`, "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   });
// }
// console.log(listContacts());

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
