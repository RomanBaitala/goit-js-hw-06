const catList = document.querySelectorAll('.item');
console.log(`Number of categories: ${catList.length}`);

catList.forEach(item => {
    const category = item.querySelector('h2')
    const numberOfEl = item.querySelectorAll('li')
    console.log(`Category: ${category.textContent} \nElements: ${numberOfEl.length}`)
});