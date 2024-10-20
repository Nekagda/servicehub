const header = document.getElementById('header')!;
const app = document.getElementById('app')!;
const footer = document.getElementById('footer')!;

if (!app || !header || !footer) {
  throw new Error('App element not found');
}

const currentPath = window.location.pathname;

if (currentPath === '/') {
  loadMainPage();
  loadCommon();
} else {
  load404Page();
  loadCommon();
}

function loadCommon() {
  fetch('/src/common/header/index.html')
    .then((response) => response.text())
    .then((html) => {
      header.innerHTML = html;
      import('./common/header/index')
    })
  fetch('/src/common/footer/index.html')
    .then((response) => response.text())
    .then((html) => {
      footer.innerHTML = html;
      import('./common/footer/index')
    })
}

function loadMainPage() {
  fetch('/src/main/index.html')
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      import('./main/index');
    });
}

function load404Page() {
  fetch('/src/404/index.html')
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      import('./404/index');
    });
}
