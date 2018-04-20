import React from 'react';

const CheckBoxPrivacy = ({ onChange, value }) => (
  <div className="control-group">
    <label className="control control-checkbox">
      <input type="checkbox" onChange={onChange} value={value} />
      <div className="control_indicator"></div>
    </label>
    <div className="d-flex flex-column">
      <small>
        Please tick the box if you would like us to send you marketing information about our products or services.
        We may send you this information using e-mail, text, telephone, post, social media or through online advertising.
        You can ask us to stop marketing at any time. For further information about
        how we use your personal data, please see our Privacy Policy
      </small>
    </div>
    {/* <div className="checkbox-container d-flex">
    <input type="checkbox" name="newsletter" onChange={onChange} value={value}/>
    <div className="d-flex flex-column">
      <small>
        Please tick the box if you would like us to send you marketing information about our products or services.
        We may send you this information using e-mail, text, telephone, post, social media or through online advertising.
        You can ask us to stop marketing at any time. For further information about
        how we use your personal data, please see our Privacy Policy
      </small>
    </div>
</div> */}
  </div>
);

export default CheckBoxPrivacy;
