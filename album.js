new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: false,
      items: [
        {
          img1: "images/cat couple.jpg",
          img2: "images/cat couple2.jpg",
          img3: "images/cat couple3.jpg",
          title: "MI PRINCIPE Y AMIGOS",
          isOpen: false,
        },
        // {
        //   img1: "images/cat cute.jpg",
        //   img2: "images/cat cute 2.jpg",
        //   img3: "images/cat cute 3.jpg",
        //   title: "CUTE",
        //   isOpen: false,
        // },
        {
          img1: "images/cat baby2.jpg",
          img2: "images/cat baby.jpg",
          img3: "images/cat baby3.jpg",
          title: "FACU-AMIGOS",
          isOpen: false,
        },
        // {
        //   img1: "images/cat sleep.jpg",
        //   img2: "images/cat sleep2.jpg",
        //   img3: "images/cat sleep 3.jpg",
        //   title: "SLEEP",
        //   isOpen: false,
        // },
        // {
        //   img1: "images/CAT HERO1.jpg",
        //   img2: "images/cat hero2.jpg",
        //   img3: "images/cat hero3.jpg",
        //   title: "HERO",
        //   isOpen: false,
        // },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});


// const eyeballs = document.getElementsByClassName('eyeball');

// window.addEventListener('mousemove', (e) => {
//   for (let el of eyeballs) {
//     var x_cursor = e.pageX;
//     var y_cursor = e.pageY;

//     var rect = el.getBoundingClientRect();

//     var x_eyeball = rect.left + rect.width / 2;
//     var y_eyeball = rect.top + rect.height / 2;

//     var angle = -Math.atan2(x_cursor - x_eyeball, y_cursor - y_eyeball) * (180 / Math.PI) - 180;
    
//     el.style.transform = `rotate(${angle}deg)`;
//   }
// })