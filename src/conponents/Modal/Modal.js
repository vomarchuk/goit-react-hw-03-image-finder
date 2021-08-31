import PropTypes from 'prop-types';

import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) this.props.closeModal();
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <button
            type="button"
            onClick={() => {
              this.props.closeModal();
            }}
          >
            Close
          </button>
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.object,
  closeModal: PropTypes.func,
};
