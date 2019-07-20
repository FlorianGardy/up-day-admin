import moment from "moment";

export const getUserEventsSelector = state => state.UserEvents.userEvents;

export const getUserNameSelector = state => state.UserEvents.userName;

const _eventsGroupedByDay = events =>
  events.reduce((r, e) => {
    // RegExp to get day, month and year
    const date = moment(e.date).format("LL");

    // if date dd/mm/yyyy does not exist
    if (r[date] === undefined) {
      // create an object with Date as key
      r[date] = { date, events: [] };
    }

    // push event in assets, and convert full date as hh:mm:ss
    r[date].events.push({
      ...e,
      date: moment(e.date).format("HH:mm")
    });

    return r;
  }, {});

const _sortDaysByDate = daysList => {
  return daysList.sort((a, b) => {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });
};

const _arrayOfDays = dictionary => {
  // Create an array which each element is a key of events
  const events = [];
  for (let key in dictionary) {
    events.push(dictionary[key]);
  }

  return events;
};

// TODO : replace magic string by automatic initialsation
const _arrDaysWithEmptyCounter = events => {
  const natureCounter = "natureCounter";
  const natureNames = ["Boisson", "Défécation", "Miction", "Sport"];
  return events.map(day => {
    return day.events.reduce((a, e) => {
      if (day[natureCounter] === undefined) {
        day[natureCounter] = {};
      }
      natureNames.map(natureName => (day[natureCounter][natureName] = 0));
      return day;
    }, {});
  });
};

const _arrDaysWithCountedNature = events => {
  const natureCounter = "natureCounter";
  events.map(day => {
    return day.events.reduce((a, e) => {
      let eventNature = e.nature;
      return day[natureCounter][eventNature]++;
    }, 0);
  });
  return events;
};

//TODO : test it
export const getUserEventsGroupedByDay = state => {
  const events = getUserEventsSelector(state);

  return _sortDaysByDate(
    _arrDaysWithCountedNature(
      _arrDaysWithEmptyCounter(_arrayOfDays(_eventsGroupedByDay(events)))
    )
  );
};
