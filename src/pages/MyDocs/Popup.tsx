import React, { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '@components/Buttons/Buttons';
import ShareImage from '../../../public/pngs/share.png';
import DocImage from '../../../public/pngs/doc.png';
import TrackImage from '../../../public/pngs/track.png';
import GroupImage from '../../../public/pngs/group.png';

import './popup.scss';
interface DocProps {
  docId: string;
  docName: string;
}
interface PopupProps {
  popupname: string;
  cancel: () => void;
  doc: DocProps;
  openEvaultShare?: (np: DocProps) => void;
}
export const SharePopup = (props: PopupProps) => {
  const { popupname, cancel, doc, openEvaultShare } = props;
  return (
    <div className="popuppage">
      <div className="popup">
        <div className="box">
          <div className="head">
            <div>{doc.docId}</div>
            <div>{doc.docName}</div>
            <div>
              <img src={ShareImage} alt="" />
            </div>
          </div>
          <div className="middle">
            <div className="left">
              <PrimaryButton
                name="Generate E-Vault Id"
                type="button"
                onClick={null}
              />
              <PrimaryButton name="Create Link" type="button" onClick={null} />
              <PrimaryButton
                name="Share to E-Vault User "
                type="button"
                onClick={() => openEvaultShare(doc)}
              />
            </div>
            <div className="right">ghj</div>
          </div>
          <div className="end">
            <SecondaryButton name="Cancel" onClick={cancel} type="button" />
            <PrimaryButton name="Download" onClick={null} type="button" />
          </div>
        </div>
      </div>
      <div className="opacity"></div>
    </div>
  );
};

export const DownloadPopup = (props: PopupProps) => {
  const { popupname, cancel, doc } = props;
  return (
    <div className="popuppage">
      <div className="popup">
        <div className="box">
          <div className="head">
            <div>{doc.docId}</div>
            <div>{doc.docName}</div>
            <div>
              <img src={DocImage} alt="" />
            </div>
          </div>
          <div className="middle flex-col">
            <span>Enter Private Key</span>
            <input type="text" name="" id="" />
          </div>
          <div className="end">
            <SecondaryButton name="Cancel" onClick={cancel} type="button" />
            <PrimaryButton name="Download" onClick={null} type="button" />
          </div>
        </div>
      </div>
      <div className="opacity"></div>
    </div>
  );
};

export const ShareEvaultUserPopup = (props: PopupProps) => {
  const { popupname, cancel, doc } = props;
  return (
    <div className="popuppage">
      <div className="popup">
        <div className="box">
          <div className="head">
            <div>{doc.docId}</div>
            <div>{doc.docName}</div>
            <div>
              <img src={ShareImage} alt="" />
            </div>
          </div>
          <div className="middle flex-col">
            <div className="inputs">
              <input type="text" placeholder="E-vault userId" />
              <PrimaryButton name="Add" type="button" onClick={null} />
            </div>
            <div className="res">
              <div>
                {' '}
                CID-128 <span>X</span>
              </div>
              <div>
                {' '}
                CID-1278 <span>X</span>
              </div>
              <div>
                {' '}
                CID-78 <span>X</span>
              </div>
              <div>
                {' '}
                CID-178 <span>X</span>
              </div>
              <div>
                {' '}
                CID-1278 <span>X</span>
              </div>
            </div>
          </div>
          <div className="end">
            <SecondaryButton name="Cancel" onClick={cancel} type="button" />
            <PrimaryButton name="Share" onClick={null} type="button" />
          </div>
        </div>
      </div>
      <div className="opacity"></div>
    </div>
  );
};

export const TrackPopup = (props: PopupProps) => {
  const { popupname, cancel, doc } = props;
  return (
    <div className="trackpopup">
      <div className="popup">
        <div className="box">
          <div className="head">
            <label htmlFor="">Evdoc-1234</label>
            <div>
              {' '}
              <img src={TrackImage} alt="" />
            </div>
          </div>
          <div className="trackstatus">
            <div className="docimage">
              <img src={DocImage} alt="" />
              <label htmlFor="">Doc Name</label>
            </div>
            <div className="status">track need to do</div>
          </div>
          <div className="end">
            <SecondaryButton name="Back" type="button" onClick={cancel} />
          </div>
        </div>
      </div>
      <div className="opacity"></div>
    </div>
  );
};

interface UploadProps {
  cancel: () => void;
}

export const Upload = (props: UploadProps) => {
  const { cancel } = props;
  const [file, setFile] = useState(null);
  const updateFile = (nfile: any) => {
    console.log(nfile);
    setFile(nfile);
  };
  return (
    <div className="popuppage">
      <div className="popup">
        <div className="box">
          <div className="head">
            <div>evdoc-44</div>
            <div>
              <img src={DocImage} alt="" />
            </div>
          </div>
          <div className="middle flex-col">
            <span>Enter Document Name</span>
            <input type="text" name="" id="" />
            <input
              type="file"
              id="file"
              name="file"
              placeholder="Upload File"
              hidden
              onChange={(e) => updateFile(e.target.files[0])}
            />
            <label htmlFor="file">
              Upload File {file && '[' + file.name + ']'}
            </label>
          </div>
          <div className="end">
            <SecondaryButton name="Cancel" onClick={cancel} type="button" />
            <PrimaryButton name="Upload" onClick={null} type="button" />
          </div>
        </div>
      </div>
      <div className="opacity"></div>
    </div>
  );
};

interface GroupProps {
  cancel: () => void;
}
export const Group = (props: GroupProps) => {
  const { cancel } = props;
  return (
    <div className="popuppage">
      <div className="popup">
        <div className="box">
          <div className="head">
            <div>Group Documents</div>
            <div>
              <img src={GroupImage} alt="" />
            </div>
          </div>
          <div className="middle flex-col">
            <span>Enter Group Name</span>
            <input type="text" name="" id="" />
          </div>
          <div className="end">
            <SecondaryButton name="Cancel" onClick={cancel} type="button" />
            <PrimaryButton name="Make Group" onClick={null} type="button" />
          </div>
        </div>
      </div>
      <div className="opacity"></div>
    </div>
  );
};
