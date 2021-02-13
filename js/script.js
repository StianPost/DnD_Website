const mainAPI = 'http://www.dnd5eapi.co/api';
// filler
// DO WORK YOU DUMB DUMB

async function getDnd(url) {
  response = await fetch(url);
  console.log(response);
  result = await response.json();
  console.log(result);
  console.log(result.classes);
}

getDnd(mainAPI);
