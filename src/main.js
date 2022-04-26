`use strict`;

// Fetch the items from the JSON file
function loadItems() {
  return fetch(`data/data.json`)
    .then((response) => response.json())
    .then((json) => json.items);
  // 받아온 데이터들을 json으로 변환하고 그 중에서 items를 리턴해주는 함수
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(`.items`);
  //const html = items.map((item) => createHTMLString(item)).join(``);
  //console.log(html);
  container.innerHTML = items.map((item) => createHTMLString(item)).join(``);
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumnail">
    <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

//main
loadItems()
  .then((items) => {
    //console.log(items);
    displayItems(items);
    setEventListener(items);
  })
  .catch(console.log);
