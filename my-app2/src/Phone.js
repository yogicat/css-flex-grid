import React from 'react'

const Phone = ({
  phoneNumber,
  inputPhoneNumber
}) => (
  <div className="Phone">
    <input
      name="phoneNumber"
      value={phoneNumber}
      onChange={inputPhoneNumber}
      type="text"
      placeholder="phone number"
    />
  </div>
)

export default Phone;
