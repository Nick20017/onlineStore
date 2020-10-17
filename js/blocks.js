var header = new Vue({
  el: '#header',
  components: {
    'app-head': {
      data: function() {
        return {
          name: 'Куплю, продам, отдам Николаев'
        }
      },
      template: '<div><h1 style="position: relative; top: -15px; margin-left: 5px;">{{ name }}</h1></div>'
    }
  }
});

var content = new Vue({
  el: '#content',
  data: {

  }
});

var navbar = new Vue ({
  el: '#left',
  components: {
    'app-navbar': {
      data: function() {
        return {
          menu: [
            'Главная',
            'Каталог',
            'О нас',
            'Контакты'
          ],
          links: [
            '/',
            'catalog',
            'about',
            'contact'
          ]
        }
      },
      template: '<div><p align="center" v-for="(item, index) in menu"><a :href="links[index]">{{ item }}</a></p></div>'
    }
  }
});
