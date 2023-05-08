axios.get('https://swapi.dev/api/films/').then( response => {
    const results = response.data.results;
    const FilterTitle = results.map(el => el.title);
    console.log(FilterTitle);
 })


 // site no qual peguei as informações :  https://www.swapi.tech/documentation


 //site do axios https://github.com/axios/axios#installing usando o cdn com script direto (html)

 //