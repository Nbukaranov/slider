const entities = [
    {
      img: './img/slider.jpg'
    },
    {
      img: './img/apartment.jpg'
    },
    {
      img: './img/bgrealize.jpg'
    }
  ]
  
  const text = document.querySelector('.text')
  const img = document.querySelector('.image')




  let menuItems = document.getElementsByClassName('main__apartment-link');
  let onClick = function (event) {
      event.preventDefault();
    
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('active');
      }
    
    event.currentTarget.classList.add('active');
  };
  
  for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', onClick, false);
  }



  
  const setEntity = (index) => {
    
    img.style.backgroundImage = `url(${entities[index].img})`
    
  }
  
  const prev = document.querySelector('.left__arrow')
  const next = document.querySelector('.right__arrow')
  let currentIndex = 0
 

  prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
  })


  next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
    
  })

  const mainOneSlide = document.querySelector('.main__apartment-item-one')

  mainOneSlide.addEventListener('click', () => {
    setEntity(currentIndex);
    currentIndex = 0;
  })

  const mainTwoSlide = document.querySelector('.main__apartment-item-two')

  mainTwoSlide.addEventListener('click', () => {
    setEntity(currentIndex);
    currentIndex = 1;
  })

  const mainThreeSlide = document.querySelector('.main__apartment-item-three')

  mainThreeSlide.addEventListener('click', () => {
    setEntity(currentIndex);
    currentIndex = 2;

  })

  const mainOne = document.querySelector('.circleOne')

  mainOne.addEventListener('click', () => {
    setEntity(currentIndex);
    currentIndex = 0;
  })

  const mainTwo = document.querySelector('.circleTwo')

  mainTwo.addEventListener('click', () => {
    setEntity(currentIndex);
    currentIndex = 1;
  })

  const mainThree = document.querySelector('.circleThree')

  mainThree.addEventListener('click', () => {
    setEntity(currentIndex);
    currentIndex = 2;

  })