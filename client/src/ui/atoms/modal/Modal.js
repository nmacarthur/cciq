import React, { Component } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

import Section from '../../atoms/section';
import Container from '../../atoms/container';
import Row from '../../atoms/row';
import Column from '../../atoms/column';

import './style.css';

import xsvg from '../../../assets/cross.svg';

const CloseButton = styled.div`
  background-color: #e6f500;
  padding: 0.5rem;
  position: absolute;
  right: 2.15625rem;
  top: 1rem;
  color: #1d1d1b;
  border: 4px solid #1d1d1b;
  cursor: pointer;
  border-radius: 2px;
  font-weight: 600;
  display: flex;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  -webkit-box-shadow: 5px 5px 0 0 #1d1d1b;
  box-shadow: 5px 5px 0 0 #1d1d1b;
  z-index: 9999;
  :hover {
    transform: translate(2.5px, 2.5px);
    -webkit-box-shadow: 0px 0px 0 0 #1d1d1b;
    box-shadow: 0px 0px 0 0 #1d1d1b;
  }
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.isVisible
    };

    this.children = this.props.children;
    this.modalChild = this.props.modalChild;

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  componentWillReceiveProps(newProps) {
    this.setState({ showModal: newProps.isVisible });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    this.props.updateOpenState();
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          ariaHideApp={false}
          className="Modal"
          overlayClassName="Overlay"
          style={{ overflow: 'scroll' }}
        >
          <Section>
            <Container>
              <Row alignItems="center" justifyContent="center">
                <Column sm={12}>
                  <div className="ModalChild">
                    {this.modalChild}
                    {this.children}
                  </div>
                  <CloseButton
                    onClick={() => {
                      this.handleCloseModal();
                    }}
                  >
                    <img src={xsvg} alt="_" />
                  </CloseButton>
                </Column>
              </Row>
            </Container>
          </Section>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;
