export default function incrementVote(options) {
  const localOptions = [];
  let newOption = {};

  for (let i = 0; i < options.length; i++) {
    newOption = { name: `${options[i].name}`, votes: options[i].votes };
    localOptions.push(newOption);
  }
  for (let i = 0; i < localOptions.length; i++) {
    localOptions[i].votes += 1;
  }

  return localOptions;
}
