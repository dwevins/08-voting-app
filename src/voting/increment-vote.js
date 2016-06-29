export default function incrementVote(options, optionIndex) {
  const localOptions = [];
  let newOption = {};

  for (let i = 0; i < options.length; i++) {
    newOption = { name: `${options[i].name}`, votes: options[i].votes };
    localOptions.push(newOption);
  }

  localOptions[optionIndex].votes++;

  return localOptions;
}
