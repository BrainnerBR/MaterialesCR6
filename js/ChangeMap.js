function changeMap(location) {
    let mapSrc = '';

    switch(location) {
    case 'heredia':
        mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.673409365313!2d-84.11626812429449!3d9.96110677370138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb47947595fb%3A0x22390d1f420f5f7a!2sAGRECON!5e0!3m2!1ses-419!2scr!4v1745385710692!5m2!1ses-419!2scr'; 
        break;

    case 'puntarenas':
      mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1964.1586986682405!2d-84.80176332495195!3d10.073058089035014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1745874004237!5m2!1ses-419!2scr';
      break;

    case 'cartago':
      mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.673409365313!2d-83.11626812429449!3d9.95110677370138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb47947595fb%3A0x22390d1f420f5f7a!2sCartago!5e0!3m2!1ses-419!2scr!4v1745385710692!5m2!1ses-419!2scr';
      break;

    case 'guapiles':
      mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.673409365313!2d-83.71626812429449!3d10.06110677370138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb47947595fb%3A0x22390d1f420f5f7c!2sGuapiles!5e0!3m2!1ses-419!2scr!4v1745385710692!5m2!1ses-419!2scr';
      break;

    default:
      mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.673409365313!2d-84.11626812429449!3d9.96110677370138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb47947595fb%3A0x22390d1f420f5f7a!2sAGRECON!5e0!3m2!1ses-419!2scr!4v1745385710692!5m2!1ses-419!2scr';
  }

  document.getElementById('map').src = mapSrc;
    }
