function search() {
   const townList = document.getElementById('towns');
   const resultElement = document.getElementById('result');
   const searchText = document.getElementById('searchText').value;

   let matchCount = 0;
   const townElements = Array.from(townList.children);
   for (const townElement of townElements) {
      if(townElement.textContent.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())){
         townElement.style.textDecoration = 'underline';
         townElement.style.fontWeight = 'bold';
         matchCount++;
      }

   }
   resultElement.textContent = `${matchCount} matches found`;
}
