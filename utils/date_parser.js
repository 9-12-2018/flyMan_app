import moment from 'moment';

const dates = (date) => {
  const hour = date.substring(11, 19);
  const day = date.substring(8, 10);
  const month = date.substring(5, 7);
  const year = date.substring(0, 4);

  return {
    day,
    month,
    year,
    hour
  }
}

// Devuelve string -> dd/mm/yyyy - hh:mm:ss
export const dateToString = (date) => {
  const { day, month, year, hour } = dates(date);
  return `${day}/${month}/${year}`;
}

export const hours = (date) => {
  const startTime = moment(date).format('HH:mm');
  return `${startTime}`;
}

const dateToDate = (date) => {
  return new Date(date)
}

export const getHoursToReservations = (date) => {
  const startTime = new Date(date);
  return Math.round(Math.abs(startTime - new Date().getTime()) / 3600000);
}

export const getTimeDifference = (reservationStartTime) => {
  let duration = moment.utc(moment(reservationStartTime).diff(moment())).format("HH:mm");
  const hour = parseInt(String(duration.substring(0, 2)));
  const minutes = parseInt(String(duration.substring(3, 5)));
  return { hour, minutes: minutes + 1 };
}
