function changeMap(location) {
    let mapSrc = '';

    switch(location) {
    case 'heredia':
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.673409365313!2d-84.11626812429449!3d9.96110677370138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb47947595fb%3A0x22390d1f420f5f7a!2sAGRECON!5e0!3m2!1ses-419!2scr!4v1745385710692!5m2!1ses-419!2scr'; 
        break;

    case 'puntarenas':
      mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21702.798601499784!2d-84.79642997198748!3d10.074655391863757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1746037657611!5m2!1ses-419!2scr';
      break;

    case 'cartago':
      mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18361.78859107985!2d-83.97840154789871!3d9.85857972993155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1746037284463!5m2!1ses-419!2scr';
      break;

    case 'guapiles':
      mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10258.009710866818!2d-83.90542904044648!3d10.214665464283861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1746037475928!5m2!1ses-419!2scr';
      break;

    default:
      mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.673409365313!2d-84.11626812429449!3d9.96110677370138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb47947595fb%3A0x22390d1f420f5f7a!2sAGRECON!5e0!3m2!1ses-419!2scr!4v1745385710692!5m2!1ses-419!2scr';
  }

  document.getElementById('map').src = mapSrc;
    }
