const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');
listEl.style.display = "flex"
listEl.style.listStyle = "none"
listEl.style.gap = "30px"
const markup = images.map((images) => 
`<li><img src = "${images.url}" alt = "${images.alt}" width="250" height="250"></li>`).join("")
listEl.insertAdjacentHTML("afterbegin", markup)




// ================= VARIANT 2 =====================//

// const itemsArr = [];
// for (let i = 0; i < images.length; i+=1) {
//   const listItemEl = document.createElement('li');
//   const itemImgEl = document.createElement('img');
//   itemImgEl.setAttribute('url', `${images[i].url}`);
//   itemImgEl.setAttribute('alt', `${images[i].alt}`);
//   listItemEl.append(itemImgEl)
//   itemsArr.push(listItemEl);
// }
// const listRef = document.querySelector('.gallery')
// listRef.append(...itemsArr)