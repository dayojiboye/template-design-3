import React, { Component, Fragment } from 'react';
import classes from './Business.module.css';

import SectionComponent from '../../../hoc/SectionComponent/Section';
import EmblaCarousel from '../../../components/Embla/EmblaCarousel';
import CardComponent from '../../../hoc/CardComponent/Card';
import cardImg from '../../../assets/images/vw-beetle-3523940_960_720.jpg';
import Modal from '../../../components/UI/Modal/Modal';
import ModalContent from './BusinessModalContent';

class Business extends Component {
  state = {
    isModalOpen: false,
  };

  showModalHandler = () => {
    this.setState({ isModalOpen: true });
  };

  hideModalHandler = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <Fragment>
        <SectionComponent class={classes.Business}>
          <div className={classes.BusinessHeader}>
            <h2>Donec et Auctor tortor nec porttitor orci.</h2>
            <p>
              Nulla id ultrices enim. Etiam eget suscipit purus. Maecenas in
              dignissim lectus.
            </p>
          </div>
          <EmblaCarousel>
            <CardComponent class={classes.Card} normal>
              <div className={classes.CardImg} onClick={this.showModalHandler}>
                <img src={cardImg} alt="card img" />
              </div>
              <div className={classes.Content}>
                <h3>Maecenas in dignissim</h3>
                <p>
                  Fusce interdum faucibus consectetur. Duis hendrerit velit id
                  nisi interdum tincidunt. Vestibulum eu eleifend metus. Duis
                  safr iu glemit ous en mitme fusce lorem.
                </p>
                <button
                  className={classes.ModalTrigger}
                  onClick={this.showModalHandler}
                >
                  <ion-icon name="add-circle-outline"></ion-icon> See more
                  details
                </button>
              </div>
            </CardComponent>
            <CardComponent class={classes.Card} normal>
              <div className={classes.CardImg} onClick={this.showModalHandler}>
                <img src={cardImg} alt="card img" />
              </div>
              <div className={classes.Content}>
                <h3>Maecenas in dignissim</h3>
                <p>
                  Fusce interdum faucibus consectetur. Duis hendrerit velit id
                  nisi interdum tincidunt. Vestibulum eu eleifend metus. Duis
                  safr iu glemit ous en mitme fusce lorem.
                </p>
                <button
                  className={classes.ModalTrigger}
                  onClick={this.showModalHandler}
                >
                  <ion-icon name="add-circle-outline"></ion-icon> See more
                  details
                </button>
              </div>
            </CardComponent>
            <CardComponent class={classes.Card} normal>
              <div className={classes.CardImg} onClick={this.showModalHandler}>
                <img src={cardImg} alt="card img" />
              </div>
              <div className={classes.Content}>
                <h3>Maecenas in dignissim</h3>
                <p>
                  Fusce interdum faucibus consectetur. Duis hendrerit velit id
                  nisi interdum tincidunt. Vestibulum eu eleifend metus. Duis
                  safr iu glemit ous en mitme fusce lorem.
                </p>
                <button
                  className={classes.ModalTrigger}
                  onClick={this.showModalHandler}
                >
                  <ion-icon name="add-circle-outline"></ion-icon> See more
                  details
                </button>
              </div>
            </CardComponent>
            <CardComponent class={classes.Card} normal>
              <div className={classes.CardImg} onClick={this.showModalHandler}>
                <img src={cardImg} alt="card img" />
              </div>
              <div className={classes.Content}>
                <h3>Maecenas in dignissim</h3>
                <p>
                  Fusce interdum faucibus consectetur. Duis hendrerit velit id
                  nisi interdum tincidunt. Vestibulum eu eleifend metus. Duis
                  safr iu glemit ous en mitme fusce lorem.
                </p>
                <button
                  className={classes.ModalTrigger}
                  onClick={this.showModalHandler}
                >
                  <ion-icon name="add-circle-outline"></ion-icon> See more
                  details
                </button>
              </div>
            </CardComponent>
            <CardComponent class={classes.Card} normal>
              <div className={classes.CardImg} onClick={this.showModalHandler}>
                <img src={cardImg} alt="card img" />
              </div>
              <div className={classes.Content}>
                <h3>Maecenas in dignissim</h3>
                <p>
                  Fusce interdum faucibus consectetur. Duis hendrerit velit id
                  nisi interdum tincidunt. Vestibulum eu eleifend metus. Duis
                  safr iu glemit ous en mitme fusce lorem.
                </p>
                <button
                  className={classes.ModalTrigger}
                  onClick={this.showModalHandler}
                >
                  <ion-icon name="add-circle-outline"></ion-icon> See more
                  details
                </button>
              </div>
            </CardComponent>
          </EmblaCarousel>
        </SectionComponent>
        <Modal
          isModal={this.state.isModalOpen}
          dismissModal={this.hideModalHandler}
        >
          <ModalContent />
        </Modal>
      </Fragment>
    );
  }
}

export default Business;
