function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(option) {
  switch (option) {
    case "*":
      return function (adjective) { return `You are *${adjective}*!` };
    case "||":
      return function (adjective) { return `You are ||${adjective}||!` };
  }
}

