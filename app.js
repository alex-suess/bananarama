var app = new Vue({
  el: '#app',
  data: {
    menu: [
        {
          link: "#about-section",
          linkText: "About",
          classList: " md:-ml-4"
        },
        {
          link: "#redraft-section",
          linkText: "Redraft",
          classList: ""
        },
        {
          link: "#dynasty-section",
          linkText: "Dynasty",
          classList: ""
        },
        {
          link: "#announcements-section",
          linkText: "Announcements",
          classList: ""
        },
        {
          link: "#podcast-section",
          linkText: "Podcast",
          classList: ""
        }
    ],
    news: [
      {
        title: 'Neue Website für die Liga',
        types: [
          'allgemein'
        ],
        text: 'Wenn du das liest, ist diese "Ankündigung" für dich schon ein alter Hut. Der Bananarama Podcast hat jetzt endlich ein eigenes Zuhause! Da die bisherigen Lösungen für alle Beteiligten eher unbefriedigend waren, haben sich die Schöpfer des Podcasts eine Alternative überlegt.',
        date: '29.11.2019',
        link: 'https://superkicker31.github.io/bananarama',
        linkText: "Die neue Bananarama Podcast Webseite"
      },
      {
        title: 'Neue Website für die Liga',
        types: [
          'allgemein'
        ],
        text: 'Wenn du das liest, ist diese "Ankündigung" für dich schon ein alter Hut. Der Bananarama Podcast hat jetzt endlich ein eigenes Zuhause! Da die bisherigen Lösungen für alle Beteiligten eher unbefriedigend waren, haben sich die Schöpfer des Podcasts eine Alternative überlegt.',
        date: '29.11.2019',
        link: 'https://superkicker31.github.io/bananarama',
        linkText: "Die neue Bananarama Podcast Webseite"
      },
      {
        title: 'Neue Website für die Liga',
        types: [
          'allgemein'
        ],
        text: 'Wenn du das liest, ist diese "Ankündigung" für dich schon ein alter Hut. Der Bananarama Podcast hat jetzt endlich ein eigenes Zuhause! Da die bisherigen Lösungen für alle Beteiligten eher unbefriedigend waren, haben sich die Schöpfer des Podcasts eine Alternative überlegt.',
        date: '29.11.2019',
        link: 'https://superkicker31.github.io/bananarama',
        linkText: "Die neue Bananarama Podcast Webseite"
      },
      {
        title: 'Neue Website für die Liga',
        types: [
          'allgemein'
        ],
        text: 'Wenn du das liest, ist diese "Ankündigung" für dich schon ein alter Hut. Der Bananarama Podcast hat jetzt endlich ein eigenes Zuhause! Da die bisherigen Lösungen für alle Beteiligten eher unbefriedigend waren, haben sich die Schöpfer des Podcasts eine Alternative überlegt.',
        date: '29.11.2019',
        link: 'https://superkicker31.github.io/bananarama',
        linkText: "Die neue Bananarama Podcast Webseite"
      }
    ],
    reviews: [
      {
        text: 'Zwei Flachzangen reden über die tollste Beschäftigung für Footballfans. Yes, please.',
        image: 'img/marvin.jpg',
        name: 'Marvin E., langjähriger Bananarama-Hörer'
      }
    ],
    announcementsCounter: 3,
    announcementsCollapsed: true,
    mobileMenuDisplayed: false,
    introText: "Im Bananarama Podcast begleitet der Host und allseits geliebte Comissioner Frank zusammen mit seinem treuen Helfer Alex die Bananarama Fantasy Football Ligen, getreu dem Motto: Sag was, egal was ... BANANARAMA!"
  },
  methods: {
    showThreeMoreAnnouncements: function () {
      if ( this.news.length > this.announcementsCounter + 3 ) {
        this.announcementsCounter =  this.announcementsCounter + 3;
      } else {
        this.announcementsCounter = this.news.length;
      }
      this.announcementsCollapsed = false;
    },
    showDefaultAnnouncements: function () {
      this.announcementsCounter = 3;
      this.announcementsCollapsed = true;
    },
    reviewCounterUp: function () {
      this.reviewCounter = this.reviewCounter++;
    },
    filterByTag: function (tag) {
      const articles = document.getElementsByClassName('news-item');
      const buttons = document.getElementsByClassName('filter-button');
      
      for (let button of buttons) {
        if (button.id == 'filter-button-' + tag) {
          button.classList.add('border-2');
        } else {
          button.classList.remove('border-2');
        }
      }

      for (let element of articles) {
        if (element.classList.contains(tag)) {
          element.classList.remove('hidden');
        } else {
          element.classList.add('hidden');
        }
      }
    },
    toggleMobileMenu: function () {
      this.mobileMenuDisplayed = !this.mobileMenuDisplayed;
      const btn = document.getElementById('mobile-menu-link'); 
      const overlay = document.getElementById('mobile-menu-overlay'); 
      const links = document.getElementsByClassName('menu-link');
      const icon = btn.childNodes[0];
      if (this.mobileMenuDisplayed) {
      window.scrollTo(0,0);
      } else {
      document.getElementById("header-title").style.display = "flex";
      }
      icon.classList.toggle('fa-times');
      icon.classList.toggle('fa-bars');

      overlay.classList.toggle('hidden');
      for (let link of links) {
        link.classList.toggle('hidden');
      }
    }
  },
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 50) {
  if (window.innerWidth > 920) {
    document.getElementById("header-title").style.height = "0";
    document.getElementById("header-title-text").style.display = "none";

  } else {
    document.getElementById("header-title").style.height = "60px";
  }
} else {
  document.getElementById("header-title-text").style.display = "flex";
  document.getElementById("header-title").style.height = "256px";
  document.getElementById("header-bg-overlay").style.display = "block";

}
}

// Loader
document.onreadystatechange = function () {
var state = document.readyState
if (state == 'interactive') {
     document.getElementById('app').style.visibility="hidden";
} else if (state == 'complete') {
       document.getElementById('interactive');
       document.getElementById('load').style.visibility="hidden";
       document.getElementById('app').style.visibility="visible";
}
}
