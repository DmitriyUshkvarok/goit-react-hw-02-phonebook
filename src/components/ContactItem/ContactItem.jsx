import PropTypes from 'prop-types';
import { FcCellPhone} from "react-icons/fc";

function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <>
      <a className="link" href="tel:{number}">
        <p className="name">{name}</p>
        <div className="numberWrapper">
                  <p className="number">{number}</p>
                  <FcCellPhone/>
        </div>
      </a>
      <button
        className="buttonDelete"
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};


