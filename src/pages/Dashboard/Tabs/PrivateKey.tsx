import React from 'react';
import './privatekey.scss';
import { SecondaryButton } from '@components/Buttons/Buttons';

const PrivateKey = () => {
  return (
    <div className="privateKey">
      <div className="box">
        <label>Your Private Key</label>
        <div className="pkey">
          <input type="text" value="evi*****************************" />
          <SecondaryButton name="Copy" type="button" onClick={null} />
          <span> Copied...</span>
        </div>
      </div>
    </div>
  );
};

export default PrivateKey;
