const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('https://wildberris-1508e-default-rtdb.firebaseio.com/db.json')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('goods', JSON.stringify(data));
        console.log(data)
      });
  }

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      getData();
    });
  });

};

getGoods();