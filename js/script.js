

// // 设置中心位置
// let currentIndex = 0;

// // 更新中心图片
// function updateCenter(index) {
//   const slideWidth = slides[0].getBoundingClientRect().width;
//   track.style.transform = `translateX(${-index * (slideWidth + 20)}px)`;

//   const title = slides[index].querySelector('.movie-title').textContent;
//   description.innerHTML = `<h2>${title}</h2><p>Details about ${title}...</p>`;
// }

// // 添加事件监听
// slides.forEach((slide, index) => {
//   slide.addEventListener('click', () => {
//     currentIndex = index;
//     updateCenter(index);
//   });
// });



// // 添加滚轮事件
// document.addEventListener('wheel', (event) => {
//   if (event.deltaY > 0) {
//     currentIndex = Math.min(currentIndex + 1, slides.length - 1);
//   } else {
//     currentIndex = Math.max(currentIndex - 1, 0);
//   }
//   updateCenter(currentIndex);
// });

// // 初始化中心图片
// updateCenter(currentIndex);

const magic = document.getElementById('magic');
const header = document.querySelector('header');
const nav = document.querySelector('nav')
nav.style.opacity = '0';

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  const headerHeight = header.offsetHeight;

  // 检查 #magic 是否已经超过了 header 的底部
  if (scrollPosition > headerHeight / 2) {
    magic.style.opacity = '0'; // 先淡出文字
    setTimeout(() => {
      magic.innerHTML = ''; // 再清空文字内容
    }, 500); // 延迟500ms，等待过渡结束
    nav.style.opacity = '1';
  } else {
    magic.innerHTML = 'Explore the Magic World!'; // 重新设置文字
    magic.style.opacity = '1'; // 重新淡入
    nav.style.opacity = '0';
  }
  
});

// // scroll the movie
// const carousel = document.querySelector('.carousel-track');
//         const leftArrow = document.getElementById('left-arrow');
//         const rightArrow = document.getElementById('right-arrow');
//         const imgWidth = 400-80 // 图片宽度加上间距

//         leftArrow.addEventListener('click', () => {
//             // 滚动至左边
//             carousel.style.transform = `translateX(-${imgWidth}px)`;
//             setTimeout(() => {
//                 carousel.appendChild(carousel.firstElementChild); // 移动第一个图片到最后
//                 carousel.style.transition = 'none'; // 移除过渡
//                 carousel.style.transform = 'translateX(0)'; // 立即恢复
//                 setTimeout(() => {
//                     carousel.style.transition = 'transform 0.5s ease'; // 恢复过渡
//                 }, 0);
//             }, 500);
//         });

//         rightArrow.addEventListener('click', () => {
//             // 滚动至右边
//             carousel.style.transform = `translateX(${imgWidth}px)`;
//             setTimeout(() => {
//                 carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild); // 移动最后一个图片到最前
//                 carousel.style.transition = 'none'; // 移除过渡
//                 carousel.style.transform = 'translateX(0)'; // 立即恢复
//                 setTimeout(() => {
//                     carousel.style.transition = 'transform 0.5s ease'; // 恢复过渡
//                 }, 0);
//             }, 500);
//         });



//滚动电影
window.onload = function() {
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');
  // let currentIndex = 3;
  const carousel = document.querySelector('.carousel-track');
  const imgWidth = 400-60

  // 设置初始选中的海报
  // slides[currentIndex].classList.add('selected');

  // 更新 carousel-track 的位置
  function updateCarouselPosition() {
    // 更新选中海报
    // slides.forEach((slide, index) => {
    //   if (index === currentIndex) {
    //     slide.classList.add('selected');
    //   } else {
    //     slide.classList.remove('selected');
    //   }
    // });
  }

  // 向右移动
  rightArrow.addEventListener('click', function() {
    // 滚动至左边
    carousel.style.transform = `translateX(-${imgWidth}px)`;
    setTimeout(() => {
        carousel.appendChild(carousel.firstElementChild); // 移动第一个图片到最后
        carousel.style.transition = 'none'; // 移除过渡
        carousel.style.transform = 'translateX(0)'; // 立即恢复
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease'; // 恢复过渡
        }, 0);
    }, 500);
    // if (currentIndex < slides.length - 1) {
    //   currentIndex++;
    // } else {
    //   currentIndex = 0;  // 如果是最后一张，回到第一张
    // }
    updateCarouselPosition();
  });

  // 向左移动
  leftArrow.addEventListener('click', function() {
    // 滚动至右边
    carousel.style.transform = `translateX(${imgWidth}px)`;
    setTimeout(() => {
        carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild); // 移动最后一个图片到最前
        carousel.style.transition = 'none'; // 移除过渡
        carousel.style.transform = 'translateX(0)'; // 立即恢复
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease'; // 恢复过渡
        }, 0);
    }, 500);
    // if (currentIndex > 0) {
    //   currentIndex--;
    // } else {
    //   currentIndex = slides.length - 1;  // 如果是第一张，回到最后一张
    // }
    updateCarouselPosition();
  });


  // function scrollRight() {
  //   carouselTrack.style.transform = `translateX(-${imgWidth}px)`;
  //   setTimeout(() => {
  //     carouselTrack.appendChild(carouselTrack.firstElementChild);
  //     carouselTrack.style.transition = 'none';
  //     carouselTrack.style.transform = `translateX(0)`;
  //     setTimeout(() => {
  //       carouselTrack.style.transition = 'transform 0.5s ease';
  //     }, 0);
  //   }, 500);
  //   currentIndex = (currentIndex + 1) % slides.length;
  //   updateCarouselPosition();
  // }

  // // 向左滚动
  // function scrollLeft() {
  //   carouselTrack.style.transform = `translateX(${imgWidth}px)`;
  //   setTimeout(() => {
  //     carouselTrack.insertBefore(
  //       carouselTrack.lastElementChild,
  //       carouselTrack.firstElementChild
  //     );
  //     carouselTrack.style.transition = 'none';
  //     carouselTrack.style.transform = `translateX(0)`;
  //     setTimeout(() => {
  //       carouselTrack.style.transition = 'transform 0.5s ease';
  //     }, 0);
  //   }, 500);
  //   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  //   updateCarouselPosition();
  // }
  // // 触摸滑动事件
  // carouselTrack.addEventListener('touchstart', (event) => {
  //   startX = event.touches[0].clientX;
  // });

  // carouselTrack.addEventListener('touchend', (event) => {
  //   const endX = event.changedTouches[0].clientX;
  //   const deltaX = endX - startX;

  //   if (Math.abs(deltaX) > 50) {
  //     if (deltaX < 0) {
  //       scrollRight(); // 向右滑动
  //     } else {
  //       scrollLeft(); // 向左滑动
  //     }
  //   }
  // })

  // 初始化时设置位置
  updateCarouselPosition();
};

//翻转卡片
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

const bookDetails = {
  book1: {
    cover: "images/Harry_Potter_and_the_Philosopher's_Stone_Book_Cover.jpg",
    description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by the British author J. K. Rowling. It is the first novel in the Harry Potter series and was Rowling's debut novel. It follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school. With the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents but failed to kill Harry when he was just 15 months old.",
  },
  book2: {
    cover: 'images/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
    description: "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.",
  },
  book3: {
    cover: 'images/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
    description: "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by the British author J. K. Rowling. It is the third instalment in the Harry Potter series. The novel follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ron Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies.",
  },
  book4: {
    cover: 'images/Harry_Potter_and_the_Goblet_of_Fire_cover.png',
    description: "Harry Potter and the Goblet of Fire is a fantasy novel written by the British author J. K. Rowling. It is the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.",
  },
  book5: {
    cover: 'images/Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
    description: "Harry Potter and the Order of the Phoenix is a fantasy novel written by the British author J. K. Rowling. It is the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. It sold five million copies in the first 24 hours of publication.[1]",
  },
  book6: {
    cover: 'images/Harry_Potter_and_the_Half-Blood_Prince_cover.png',
    description: "Harry Potter and the Half-Blood Prince is a fantasy novel written by the British author J. K. Rowling. It is the sixth novel in the Harry Potter series, and takes place during Harry Potter's sixth year at the wizard school Hogwarts. The novel reveals events from the early life of Lord Voldemort, and chronicles Harry's preparations for the final battle against him.",
  },
  book7: {
    cover: 'images/Harry_Potter_and_the_Deathly_Hallows.jpg',
    description: "Harry Potter and the Deathly Hallows is a fantasy novel written by the British author J. K. Rowling. It is the seventh and final novel in the Harry Potter series. It was released on 21 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.",
  },
};

function showBookDetails(bookId) {
  const modal = document.getElementById('bookModal');
  const modalCover = document.getElementById('modalCover');
  const modalDescription = document.getElementById('modalDescription');

  modalCover.src = bookDetails[bookId].cover;
  modalDescription.textContent = bookDetails[bookId].description;

  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('bookModal');
  modal.style.display = 'none';
}

        
        

        
        
        