import React, { useEffect } from 'react';
import classes from './Cars.module.css';

import observer from '../../../utils/observers/imageObserver';
import SectionComponent from '../../../hoc/SectionComponent/Section';

const CarCards = (props) => {
  let cars = (
    <h2 className={classes.ErrorHeader}>
      Oops! Something went wrong! Please check your network connection!
    </h2>
  );

  useEffect(() => {
    const cards = document.querySelectorAll('.carCard');

    cards.forEach((card) => {
      observer(card);
    });
  }, []);

  if (props.cars) {
    cars = props.cars.map((car) => {
      return (
        <li key={car.name} className="carCard">
          <div className={classes.CarImg}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEXj4+O8vLzPz8/JycnY2Njm5ubf39/i4uK5ubnc3NzU1NTGxsa/v7/R0dHW1tbKysotAhxuAAADWElEQVR4nO3c63KjIABA4aiAQUTf/20XjUZaculOQCBzvn/r7AxyKl5q0ssFAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Ih8I/f+nUheeqXEZNu5M2Ycx6Zprh73T7fRmLm1g9Cqv3x5HNnrqXUdmm3yr62JXJ550OpLw0jtcjTvUzyK04yzuHxdlt6Ofzg0XoVpZpV7ElFJMX4UZGNzzyMiOcQo4o6V7mvWj7RxkrgoJvdcIomXZDlScs8mCjnFS+KizN+wfHTMJC6KrT+KilpkiSJyT+ljY+wmTVP5fYqc466c1Zh7Vh+Je37d1X2ejX4y2aJMFUdJcDK5qfaUItsUK2dlaj1QIt+Z+K5DpVGSrZxFlasn4cpZVPk0qFMWqXT1JF05i+pWT8xfEDxRzbVH9mIaFqmLOO06kFCFtxHGe0+T3DbUWPKTsjKnpAjbmD731J9JfKV5ZSw0yv2Bz3SbdJeecR/C7Btyz/6xbffcjcOdTZTEHC/gt4PzWuS7n/vTjbdNmqfT+ogOhyjxQJHdvsP+xjZNE/92bVugV/17j/KT+8nj6u3wGU32YQtcPHLfX//36ic0UduSvbbnz/mdo4n3AzuhidhPYyU3abzfIJ/QxFbRxJzZRM77tqKbNKc2uV/ty27i7XH6JvdtZTc57hTSN+nraHIdjo3zoxl97qh+PHcW3cS7zU70HrBp91OW9/BQdpPGaLUSyR6M7W0A3R2bCm+SBU1oQhOa0IQmNKHJLzQJ0SREkxBNQjQJ0SREk1DuJkW+B0z0uvzPTUr8sFKSr2D8hyI/lZP8w58vlfnlSZH1QCnwoxZOn/NAKfRrTjmblHjVWWRtUuDdyYImD4RNzNwlETYp75vYfa+0ePDWz9g2AduGI3VCL39oqAwuxmRvUw8P6TRN2gdNzK3WMGUvoyb7ek/Pa+KNZEXGLNOPHbXhns5pkrwfKd/3ndTPwyD4sMmYJsmjkX7uyZRz/SjtrR7bnZSkteb5SFboAs61t9Ps2sZ45kQnk3XibeePtG5a/sZdCTk8vVLaXZCnYdj6nMCNNAzTchnOfbV5q+/XQK6QmKI2ujWYhKuwduhLL/HOWkqtsTbiqeP/3D6kVf3kAQAAAAAAAAAAAAAAAAAAAAAAAAD4xD9zYTktgC4isgAAAABJRU5ErkJggg=="
              data-src={car.imgUrl}
              alt={car.name}
            />
          </div>
          <div className={classes.CarInfo}>
            <h3>{car.name}</h3>
            <p className={classes.CarColor}>{car.color}</p>
            <p className={classes.CarDesc}>{car.desc}</p>
          </div>
          <div className={classes.CardFooter}>
            <button
              className={classes.BuyCar}
              onClick={props.clicked.bind(
                this,
                car.name,
                car.imgUrl,
                car.price
              )}
            >
              <ion-icon name="cart-outline"></ion-icon>
            </button>
            <p className={classes.CarPrice}>
              ${car.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </p>
          </div>
        </li>
      );
    });
  }

  return (
    <SectionComponent class={classes.Cars}>
      <div className={classes.Header}>
        <h1>Buy affordable beetle cars</h1>
      </div>
      <div className={classes.CarsGrid}>
        <ul>{cars}</ul>
      </div>
    </SectionComponent>
  );
};

export default CarCards;
