const app = document.getElementById('app')!;

if (!app) {
  throw new Error('App element not found');
}

const currentPath = window.location.pathname;

if (currentPath === '/') {
  loadMainPage();
} else {
  load404Page();
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
