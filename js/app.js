document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const form =
  document.querySelector('#new-form');

  const deletButton = document.querySelector('#delete-all');

  const handleDeleteButton = function(event) {
    const favourites =
    document.querySelector('#favourites');
    favourites.innerHTML = '';
  }

  deletButton.addEventListener('click', handleDeleteButton);

  const handleFormInfo = function(event){
    console.log('hello', event);
    event.preventDefault();

    const name = event.target.name.value;
    const sport = event.target.sport.value;
    const nationality = event.target.nationality.value;

    const favourites =
    document.querySelector('#favourites')

    const favouriteDetails =
    document.createElement('div');
    const namePara = document.createElement('p');
    const sportPara =
    document.createElement('p');
    const nationalityPara = document.createElement('p')

    namePara.textContent = name;
    sportPara.textContent = sport;
    nationalityPara.textContent = nationality;

    favouriteDetails.appendChild(namePara);
    favouriteDetails.appendChild(sportPara);
    favouriteDetails.appendChild(nationalityPara);

    favourites.appendChild(favouriteDetails);

    form.reset();
  }
  form.addEventListener('submit', handleFormInfo)

});
