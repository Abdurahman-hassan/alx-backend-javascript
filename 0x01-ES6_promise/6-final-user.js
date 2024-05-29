import signUpUser from './4-user-promise.js'; // eslint-disable-line
import uploadPhoto from './5-photo-reject.js'; // eslint-disable-line

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.map(({ status, value, reason }) => ({
      status,
      value: status === 'fulfilled' ? value : reason,
    })));
}

export default handleProfileSignup;
