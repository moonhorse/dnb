dojo.provide('model.session');

Session = {};

Session.getSessionNum = function() {
  var session = this.getSessionItem();
  var day = this.getDateString();
  if (session && session[day]) {
    return session[day];
  } else {
    return 0;
  }
};

Session.incSessionNum = function() {
  var session = this.getSessionItem();
  var day = this.getDateString();
  if (session[day]) {
    session[day] = parseInt(session[day], 10) + 1;
  } else {
    session[day] = 1;
  }
  localStorage.setItem('session', JSON.stringify(session));
};

Session.getSessionItem = function() {
  var session = localStorage.getItem('session');
  var sessionObj = (session) ? JSON.parse(session) : {};
  return sessionObj;
};

Session.getDateString = function() {
  var dateObj = new Date(); 
  var year = dateObj.getUTCFullYear();
  var month = dateObj.getUTCMonth();
  var day = dateObj.getUTCDate();
  return year + '/' + month + '/' + day;
};
