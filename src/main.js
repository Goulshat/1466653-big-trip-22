import { RenderPosition, render } from './render.js';
import TripFiltersView from './view/trip-filters-view.js';
import TripInfoView from './view/trip-info-view.js';
import TripsPresenter from './presenter/trips-presenter.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const headerMainContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('.trip-events');
const tripsPresenter = new TripsPresenter({container: tripEventsContainer});

render(new TripFiltersView(), filtersContainer);
render(new TripInfoView(), headerMainContainer, RenderPosition.AFTERBEGIN);

tripsPresenter.init();
