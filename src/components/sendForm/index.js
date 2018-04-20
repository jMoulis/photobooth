/**
 * Npm Import
 */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
/**
 * Local import
 */
import Input from '../form/input';
import Button from '../form/button';
import SelectBox from '../form/select';
import LogoMaskMenu from '../global/logoMaskMenu';
import ErrorDisplay from '../global/errorDisplay';
import CheckBoxPrivacy from './checkBoxPrivacy';
/**
 * Code
 */

class SendForm extends React.Component {
  state = {
    form: {
      gender: '',
      name: '',
      first_name: '',
      phone: '',
      email: '',
      country:'',
      im: '',
      newsletter: '',
    },
    showMenu: false,
  }
  componentDidMount() {
    // Fetch the countries list
    const { fetchCountriesAction } = this.props;
    fetchCountriesAction();
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    const { sendFormAction } = this.props;
    // pass the form
    sendFormAction(evt.target);
  }
  handleCancel = (evt) => {
    evt.preventDefault();
    const { history } = this.props;
    history.push('/start');
  }
  handleInputChange = (evt) => {
    // Set the value of the active input into
    // the state
    const { name, value } = evt.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      }
    }));
  }
  handleCheckBoxChange = (evt) => {
    const status = evt.target.checked;
    // Pass the checked status
    this.setState((prevState) => ({
      ...prevState,
      newsletter: status,
    }));
  }
  render() {
    const { error, sending, status } = this.props.mail;
    // if the form is valid redirect the confirmation page
    if (status && !error)
      return <Redirect to="/confirmation" />
    return (
      <section id="final-form" className="col d-flex flex-column align-items-center">
      {/* If the form has errors displays the error message*/}
        {error !== null ? <ErrorDisplay value={error} /> : ''}
        <ul className="d-flex unstyled justify-content-between">
          <li>
            <Link to="/preview">
              <LogoMaskMenu />
            </Link>
          </li>
        </ul>
        
        <h1>Please fill the following information</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input-container">
            <SelectBox
              name="gender"
              label="Gender"
              options={[
                {value: 'Female', name: 'Female' },
                {value: 'Male', name: 'Male' },
              ]}
              required={true}
              onChange={this.handleInputChange}
            />
            <Input
              type="text"
              placeholder="Name"
              nameField="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
              autocomplete="off"
            />
            <Input
              type="text"
              placeholder="First Name"
              nameField="first_name"
              value={this.state.firstname}
              onChange={this.handleInputChange}
              required
              autocomplete="off"
            />
            <Input
              type="email"
              placeholder="Email"
              nameField="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
              autocomplete="off"
            />
            <Input
              type="text"
              placeholder="Phone"
              nameField="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              required
              autocomplete="off"
            />
            <Input
              type="text"
              placeholder="IM"
              nameField="im"
              value={this.state.im}
              onChange={this.handleInputChange}
              autocomplete="off"
            />
            <SelectBox
              name="country"
              label="Country"
              options={this.props.countries && this.props.countries}
              onChange={this.handleInputChange}
              required={true}
            />
            <CheckBoxPrivacy
              onChange={this.handleCheckBoxChange}
              value={this.state.newsletter}
            />
          </div>
          <div className="btn-container">
            {/* the disabled will be set if the mail is in sending status */}
            <Button
              type="cancel"
              name="cancel"
              nameBtn="Cancel"
              onClick={this.handleCancel}
              disabled={sending && true}
            />
            {/* if spinner, the btn will displays a spinner on sending status */}
            <Button
              type="submit"
              name="send"
              nameBtn="Send"
              disabled={sending && true}
              spinner={true}
            />
          </div>
        </form>
        <a
          href="http://www.rogerdubuis.com/app/uploads/2015/10/150821_Terms-of-Use_Version-03_2015_MRD_1EN_EU-ENGLISH-F.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Privacy Policy
        </a>
      </section>
    )
  }
}

export default SendForm;
