function create(words, event) {
   const contentElement = document.getElementById('content');
   console.log(event);
   const divElements = words
      .map(word => {
         const pElement = document.createElement('p');
         pElement.textContent = word;
         pElement.style.display = 'none';

         const divElement = document.createElement('div');
         divElement.appendChild(pElement);

     

         return divElement;
      });

   const divElementsFragment = document.createDocumentFragment();
   divElements.forEach(divElement => divElementsFragment.appendChild(divElement)); // Not efficient 
   contentElement.appendChild(divElementsFragment);

   contentElement.addEventListener('click', (e) => {
      if (e.target.tagName === 'DIV') {
         const pElement = e.target.querySelector('p');
         pElement.style.display = 'block';
      }
   });
}

function originalCreate(words) {
   const contentElement = document.getElementById('content');

   const divElements = words
      .map(word => {
         const pElement = document.createElement('p');
         pElement.textContent = word;
         pElement.style.display = 'none';

         const divElement = document.createElement('div');
         divElement.appendChild(pElement);

         divElement.addEventListener('click', () => {
            pElement.style.display = 'block';
         });

         return divElement;
      });


   divElements.forEach(divElement => contentElement.appendChild(divElement));
}
