import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    //return (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel='Selected' 
        ariaHideApp={false}
        onRequestClose={props.hideModal}
    >
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.hideModal}>Okay</button>
    </Modal>
    //)
);

export default OptionModal;