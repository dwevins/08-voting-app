export default function addOption(existingPoll, optionName) {
  const copyArray = [];
  const newOption = { name: `${optionName}`, votes: 0 };
  for (let i = 0; i < existingPoll.length; i++) {
    copyArray.push(existingPoll[i]);
  }
  copyArray.push(newOption);

  return copyArray;
}
