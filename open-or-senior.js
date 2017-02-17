function openOrSenior(data) {
  return data.map(member => {
    if (member[0] >= 55 && member[1] > 7) {
      return 'Senior'
    } else {
      return 'Open'
    }
  })
}