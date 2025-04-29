/* Função Dark Mode */
const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');
const switchBtn = document.getElementById('switch');
    const themeIcon = document.getElementById('theme-icon');

    switchBtn.addEventListener('change', () => {
        if (switchBtn.checked) {
            // Ativou o Dark Mode
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            // Voltou para o Light Mode
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });

// Verifica se o dark mode foi salvo no localStorage
if (localStorage.getItem('darkMode') === 'true') {
  $html.classList.add('dark-mode');
  $checkbox.checked = true;
}

$checkbox.addEventListener('change', function() {
  $html.classList.toggle('dark-mode');
  
  // Salva a preferência no localStorage
  if ($html.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'true');
  } else {
    localStorage.setItem('darkMode', 'false');
  }
});

/* Função Navbar Mobile */
function openNav() {
  const menuNav = document.getElementById("my-menu-nav");
  if (menuNav) {
    menuNav.style.width = "230px";
  }
}

function closeNav() {
  const menuNav = document.getElementById("my-menu-nav");
  if (menuNav) {
    menuNav.style.width = "0";
  }
}

window.addEventListener('resize', function() {
  const menuNav = document.getElementById("my-menu-nav");
  if (window.innerWidth > 880 && menuNav) { 
   
    menuNav.style.width = 'auto'; 
  }
});

/* Validação do Formulário */
const form = document.getElementById('agendamentoForm');
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      alert("Agendamento realizado com sucesso!");
    }

    form.classList.add('was-validated');
  });
}
