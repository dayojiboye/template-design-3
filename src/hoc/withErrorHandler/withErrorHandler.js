import React, { Component, Fragment } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
      isModal: false,
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((request) => {
        this.setState({ error: null, isModal: false });
        return request;
      });

      this.resInterceptor = axios.interceptors.response.use(
        (response) => {
          return response;
        },

        (error) => {
          this.setState({ error: error, isModal: true });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorDismissModal = () => {
      this.setState({ error: null, isModal: false });
    };

    render() {
      return (
        <Fragment>
          <Modal
            isModal={this.state.isModal}
            dismissModal={this.errorDismissModal}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
