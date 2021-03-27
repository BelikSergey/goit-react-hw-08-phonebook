import styles from '../../App.module.css'
import {connect}  from 'react-redux';
import сontactsActions from '../../redux/contacts/contacts-actions'
import contactsSelectors from '../../redux/contacts/contacts-selectors'
import TextField from '@material-ui/core/TextField';

const Filter = ({ filter, onChange }) => {

  return (
       <TextField className={styles.FormInput}
       margin="normal"
       id="standard-basic"
       label="Find contacts by name"
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
    />
  );
};
const mapStateToProps = (state) => ({
  filter: contactsSelectors.filterContacts(state),
})

const mapDispatchToProps = dispatch => ({
  onChange:(event)=> dispatch(сontactsActions.filterItems(event.target.value))
})



export default connect(mapStateToProps, mapDispatchToProps)(Filter);

