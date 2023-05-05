import { Section } from './section/Section';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

export const App = () => {
  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts:'}>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
