import React, { useEffect } from "react";

const Modal = ({ open, dataId, onClose }) => {
  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="card">
        <div className="modal-container">
          <div className="left-part">
            <h3>{dataId.name}</h3>
            <div className="img-container">
              <img src={dataId.image} alt={dataId.name + "image"} />
            </div>
          </div>
          <div className="right-part">
            <button className="close-btn" onClick={onClose}>
              X
            </button>
            <div className="content">
              <p id="status">
                {dataId.status == "unknown" ? "" : `Status : ${dataId.status}`}
              </p>
              <p id="gender">Gender : {dataId.gender}</p>
              <p id="lastLocation">
                {dataId.location.name == "unknown"
                  ? ""
                  : `Last time seen in : ${dataId.location.name}`}
              </p>

              <p id="species">
                {dataId.species ? `Species : ${dataId.species}` : ""}
              </p>
              <p id="numberEpisodes">
                {dataId.episode.length > 1
                  ? `Seen in ${dataId.episode.length} episodes`
                  : `Seen in ${dataId.episode.length} episode`}
              </p>

              <p id="origin">
                {dataId.origin.name == "unknown"
                  ? ""
                  : `Comming from : ${dataId.origin.name}`}
              </p>
              <p id="type">{dataId.type ? `Type : ${dataId.type}` : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
