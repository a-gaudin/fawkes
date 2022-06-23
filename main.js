const cardName = [
  'concerts-collapse',
  'facebook-collapse',
  'twitter-collapse',
  'soundcloud-collapse',
  'videos-collapse',
  'instagram-collapse',
  'bio-collapse'
];

function toggleIronCollapses(numId) {
  for (let i = 0; i < cardName.length; i++) {
    const card = document.querySelector(`#${cardName[i]}`);
    if (i !== numId) {
      card.hide();
    } else {
      card.toggle();

      let collapse;
      let file = '';

      switch (numId) {
        case 1:
          collapse = $('#facebook-collapse');
          file = 'facebook.html';
          break;
        case 2:
          collapse = $('#twitter-collapse');
          file = 'twitter.html';
          break;
        case 3:
          collapse = $('#soundcloud-collapse');
          file = 'soundcloud.html';
          break;
        case 5:
          collapse = $('#instagram-collapse');
          file = 'instagram.html';
          break;
      }

      if ($.trim(collapse.html()) == '') { // Check whether the html tag has already been loaded
        collapse.load(file);
      }
    }
  }
}

function showPaypal() {
  $('form').css('visibility', 'visible');
}

function toggleDrawer() {
  const drawerPanel = document.querySelector('paper-drawer-panel');
  const selectedAttr = drawerPanel.getAttribute('selected');
  const zIndex = selectedAttr === 'main' ? 20 : 0; 
  $('#drawer').css('z-index', zIndex);

  drawerPanel.togglePanel();
}

$(document).ready(function() {
  const numOfVideos = 3;
  const randomNum = Math.ceil(Math.random() * numOfVideos); // Random integer between 1 and numOfVideos

  for (let i = 1; i < numOfVideos + 1; i++) {
    if (i !== randomNum) {
      $(`#video ${i}`).css('display', 'none');
    }
  }
});
