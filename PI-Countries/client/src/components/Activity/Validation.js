export function validate(input) {
  let errors = {};
  if (!input.activityName) {
    errors.activityName = 'Name is required';
  } else if (!/^[a-zA-Z\s]*$/.test(input.activityName)) {
    errors.activityName = 'Name is invalid';
  }
  if (!input.dificulty) {
    errors.dificulty = 'Dificulty is required';
  }
  if (!input.duration) {
    errors.duration = 'Duration is required';
  }
  if (!input.season) {
    errors.season = 'Season is required';
  }
  return errors;
}