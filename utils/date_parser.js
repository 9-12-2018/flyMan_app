import moment from 'moment';

const dates = (date) => {
  const hour = date.substring(11,19);
  const day = date.substring(8,10);
  const month = date.substring(5,7);
  const year = date.substring(0,4);
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
  const { day, month, year, hour } = dates(date);
  return `${hour}`;
}

const dateToDate = (date) => {
  return new Date(date)
}

export const getHoursToReservations = (date) => {
  const startTime = new Date(date);
  return Math.round(Math.abs(startTime - new Date().getTime()) / 3600000);
}

export const getTimeDifference = (reservationStartTime) => {
  const duration = moment.duration(moment.utc(reservationStartTime).diff(moment().subtract(3, 'hours')));
  const hours = duration.asHours();
  const minutes = duration.asHours() >= 0 ? 
    parseFloat(String(parseFloat(duration.asHours().toString().split('.')[1])).slice(0,2))*60/100
  : -1;
  // const minutes = duration.asHours()*60 / 100;
  console.log(minutes + 1);
  return { 
    hours: Math.trunc(hours), 
    minutes: parseInt(minutes < 60 ? String(minutes).slice(0,2) : String(minutes).slice(0,1)) + 1
  };
}
