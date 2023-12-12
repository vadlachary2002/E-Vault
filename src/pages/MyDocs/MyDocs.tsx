import React, { useState } from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { PrimaryButton, SecondaryButton } from '@components/Buttons/Buttons';
import DownloadImage from '../../../public/pngs/download.png';
import ShareImage from '../../../public/pngs/share.png';
import TrackImage from '../../../public/pngs/track.png';
import DocImage from '../../../public/pngs/doc.png';

import './mydocs.scss';
import {
  DownloadPopup,
  Group,
  ShareEvaultUserPopup,
  SharePopup,
  TrackPopup,
  Upload,
} from './Popup';

interface DocProps {
  docId: string;
  docName: string;
}
const defaultDocs: DocProps[] = [
  {
    docId: 'evdoc-234',
    docName: 'Insurance Papers',
  },
  {
    docId: 'evdoc-134',
    docName: 'Bond Papers',
  },
  {
    docId: 'evdoc-434',
    docName: 'Bike licence',
  },
  {
    docId: 'evdoc-23',
    docName: 'Academic',
  },
  {
    docId: 'evdoc-234',
    docName: 'Insurance Papers',
  },
];
const MyDocs = () => {
  const [docs, setDocs] = useState(defaultDocs);
  const [downloaPopup, setDownloadPopup] = useState(null);
  const [sharePopup, setSharePopup] = useState(null);
  const [shareEvaultUserPopup, setEvaultUserPopup] = useState(null);
  const [trackPopup, setTrackPopup] = useState(null);
  const [uploadPopup, setUploadPopup] = useState(false);
  const [groupPopup, setGroupPopup] = useState(false);
  const updatePopup = (newPopup: DocProps) => setDownloadPopup(newPopup);
  const updateSharePopup = (newPopup: DocProps) => setSharePopup(newPopup);
  const updateTrackPopup = (newPopup: DocProps) => setTrackPopup(newPopup);
  const toggleUploadPopup = () => setUploadPopup(!uploadPopup);
  const toggleGroupPopup = () => setGroupPopup(!groupPopup);
  const updateShareEvaultPopup = (newPopup: DocProps) => {
    setSharePopup((): any => {
      setEvaultUserPopup(newPopup);
      return null;
    });
  };

  return (
    <ErrorBoundary>
      {downloaPopup && (
        <DownloadPopup
          popupname={'download'}
          doc={downloaPopup}
          cancel={() => setDownloadPopup(null)}
        />
      )}
      {sharePopup && (
        <SharePopup
          popupname={'share'}
          doc={sharePopup}
          cancel={() => setSharePopup(null)}
          openEvaultShare={updateShareEvaultPopup}
        />
      )}
      {shareEvaultUserPopup && (
        <ShareEvaultUserPopup
          popupname={'share evault popup'}
          doc={shareEvaultUserPopup}
          cancel={() => setEvaultUserPopup(null)}
        />
      )}
      {trackPopup && (
        <TrackPopup
          popupname={'track popup'}
          doc={trackPopup}
          cancel={() => setTrackPopup(null)}
        />
      )}
      {uploadPopup && <Upload cancel={toggleUploadPopup} />}
      {groupPopup && <Group cancel={toggleGroupPopup} />}
      <div className="docPage">
        <div className="head">
          <div className="col">
            <div className="name">
              <h1>My Documents</h1>
              <span> 17 documents</span>
            </div>
          </div>
          <div className="search">
            <input type="text" placeholder="search" />
            <PrimaryButton name="Search" onClick={null} type="button" />
          </div>
        </div>
        <div className="head">
          <div className="buttons">
            <select name="connections" id="connections">
              <option value="All">All Documents </option>
              <option value="Requested">Shared Documents</option>
              <option value="Connected">Link Documents</option>
              <option value="Pending">Evault Documents</option>
            </select>
            <PrimaryButton
              name="Upload"
              onClick={toggleUploadPopup}
              type="button"
            />
            <PrimaryButton name="Share Selected" onClick={null} type="button" />
            <PrimaryButton
              name="Group Selected"
              onClick={toggleGroupPopup}
              type="button"
            />
          </div>
        </div>
        <div className="body">
          <div className="head">
            <div className="col col1">Select</div>
            <div className="col col2">Document Id</div>
            <div className="col col3">Document Name</div>
            <div className="col col4">Actions</div>
          </div>
          <div className="list">
            {docs.map((doc, index) => (
              <div className="each" key={index}>
                <div className="docimage">
                  <img src={DocImage} alt="" />
                </div>
                <div className="box">
                  <div className="input">
                    <input type="checkbox" />
                  </div>
                  <label htmlFor="">{doc.docId}</label>
                  <label htmlFor="">{doc.docName}</label>
                  <div className="actions">
                    <div onClick={() => updatePopup(doc)}>
                      <img src={DownloadImage} alt="" />
                      <label htmlFor="">Download</label>
                    </div>
                    <div onClick={() => updateSharePopup(doc)}>
                      <img src={ShareImage} alt="" />
                      <label htmlFor="">Share</label>
                    </div>
                    <div onClick={() => updateTrackPopup(doc)}>
                      <img src={TrackImage} alt="" />
                      <label htmlFor="">Track</label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default MyDocs;
