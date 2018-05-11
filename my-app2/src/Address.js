import React from 'react';

const Address = ({
  address,
  inputAddress,
  detailAddress,
}) => (
  <div className="Address">
    <input
      name="address"
      value={address}
      onChange={inputAddress}
      type="text"
      placeholder="address"
    />
    <input
      name="detailAddress"
      value={detailAddress}
      onChange={inputAddress}
      type="text"
      placeholder="detailAddress"
    />
  </div>
)

export default Address;
