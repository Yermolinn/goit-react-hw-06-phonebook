import { useCallback } from 'react';
import { Contact } from './Contact';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'components/redux';
import { filterContacts } from 'services/filterContacts';
import css from './ContactList.module.css';

export const ContactList = () => {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const filtredContacts = useCallback(
    () => filterContacts(contacts, filter),
    [contacts, filter]
  );

  return (
    <ul>
      {filtredContacts().map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact name={name} number={number} />
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
