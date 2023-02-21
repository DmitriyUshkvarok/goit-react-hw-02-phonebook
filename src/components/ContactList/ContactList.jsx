import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className="contactList">
      {contacts.map(({ id, name, number }) => {
        return (
          <li className="item" key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
