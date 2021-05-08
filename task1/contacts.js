import * as fs from "fs/promises";

import * as path from "path";
import { v4 as generateId } from "uuid";

const ENCODING = "utf8";

const contactsPath = path.join("./db", "contacts.json");

async function getContacts() {
  try {
    const result = await fs.readFile(contactsPath, ENCODING);
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

export async function getContactById(contactId) {
  try {
    const contacts = await getContacts();
    const requiredContact = contacts.filter(({ id }) => id === contactId);
    console.table(requiredContact);
  } catch (error) {
    handleError(error);
  }
}

export async function removeContact(contactId) {
  try {
    const contacts = await getContacts();
    if (contacts.find(({ id }) => id === contactId)) {
      const updatedContactList = contacts.filter(({ id }) => id !== contactId);
      await fs.writeFile(contactsPath, JSON.stringify(updatedContactList));
      console.log(`contact with id ${contactId} was deleted`);
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
    const contacts = await getContacts();
    const newContact = {
      id: generateId(),
      name,
      email,
      phone,
    };
    const updatedContactList = [...contacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(updatedContactList));
    console.log(`contact ${name} was added`);
    listContacts();
  } catch (err) {
    console.error(err);
  }
}
