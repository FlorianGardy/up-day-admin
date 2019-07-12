export const getUserEvents = state => state.UserEventsReducer.userEvents;

//TODO : test it

export const getUserEventsGroupedByDay = state => {
  const events = getUserEvents(state);

  return _sortDaysByDate(
    _arrDaysWithCountedNature(_arrayOfDays(_eventsGroupedByDay(events)))
  );
};

const _eventsGroupedByDay = events =>
  events.reduce((r, e) => {
    // RegExp to get day, month and year
    const date = e.date.match(/(\d+-\d+-\d+)/)[0].replace(/-/g, "/");

    // if date dd/mm/yyyy does not exist
    if (r[date] === undefined) {
      // create an object with Date as key
      r[date] = { date: date, events: [] };
    }

    // push event in assets, and convert full date as hh:mm:ss
    r[date].events.push({
      ...e,
      date: e.date.match(/(\d+:\d+)/)[0]
    });

    return r;
  }, {});

const _sortDaysByDate = daysList => {
  daysList.sort((a, b) => {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });

  return daysList;
};

const _arrayOfDays = dictionary => {
  // Create an array which each element is a key of events
  const events = [];
  for (let key in dictionary) {
    events.push(dictionary[key]);
  }

  return events;
};

const _arrDaysWithCountedNature = events => {
  const natureCount = "natureCount";
  events.map(day => {
    return day.events.reduce((a, e) => {
      let eventNature = e.nature;
      if (day[natureCount] === undefined) {
        day[natureCount] = {};
      }
      if (day[natureCount][eventNature] === undefined) {
        day[natureCount][eventNature] = 0;
      }
      return day[natureCount][eventNature]++;
    }, 0);
  });

  return events;
};
