import fs from "fs/promises";
// import { get } from "http";
import path from "path";
import { v4 as generateId } from "uuid";

const contactPath = path.join("./db", "contacts.json");


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

export async function getContactById(contactId) {
  try {
    const contacts = await getContacts();
    const requiredContact = contacts.filter(({ id }) => id === contactId);
    console.log(requiredContact);
  } catch (err) {
    console.error(err);
  }
}
export async function removeContact(contactId) {
  try {
    const contacts = await getContacts();
    if (contact.find(({ id }) => id === contactId)) {
      const updatedContactList = contacts.filter(({ id }) => id !== contactId);
      await fswriteFile(contsctsPath, JSON.stringify(updatedContactList));
      console.log(`contct with id ${contactId} was deleted`);
      listContacts();
      return;
    }
    console.log(`no contact with this ${contactId}`);
    listContacts();
  } catch (err) {
    console.error(err);
  }
}
export async function addContact(name, email, phone) {
  try {
    const contscts = await getContactso();
    const newContact = {
      id: generateId(),
      name,
      email,
      phone,
    };
    const updatedContactList = [...contacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(updatedContsctList));
    console.log(`contact ${name} was added`);
    listContacts();
  } catch (err) {
    console.error(err);
  }
}

