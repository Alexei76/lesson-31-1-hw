import '../styles/style.scss';

import { cities } from '../data/cityPhoto.js';


function createCityDropdown(){
    let select = document.createElement('select');
    let target = document.querySelector('.locations');
    
    select.setAttribute('name','city-selector');
    select.setAttribute('id','city-selector');
    target.append(select);



}
createCityDropdown();

