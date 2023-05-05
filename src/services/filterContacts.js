export const filterContacts = (contacts, filter) => {
  return contacts.filter(
    contact =>
      contact.number.toLowerCase().includes(filter.toLowerCase()) ||
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};