/* Função Dark Mode */
const $html = document.querySelector('html'); // Seleciona o elemento HTML
const $checkbox = document.querySelector('#switch'); // Seleciona o checkbox que ativa o modo escuro

// Verifica se o dark mode foi salvo no localStorage
if (localStorage.getItem('darkMode') === 'true') {
  $html.classList.add('dark-mode'); // Adiciona a classe 'dark-mode' ao elemento HTML se o modo escuro estiver ativado
  $checkbox.checked = true; // Marca o checkbox como selecionado
}

// Adiciona um evento de mudança ao checkbox
$checkbox.addEventListener('change', function() {
  $html.classList.toggle('dark-mode'); // Alterna a classe 'dark-mode' no elemento HTML
  
  // Salva a preferência no localStorage
  if ($html.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'true'); // Salva 'true' se o modo escuro estiver ativado
  } else {
    localStorage.setItem('darkMode', 'false'); // Salva 'false' se o modo escuro estiver desativado
  }
});

/* Função Navbar Mobile */
function openNav() {
  const menuNav = document.getElementById("my-menu-nav"); // Seleciona o menu de navegação
  if (menuNav) {
    menuNav.style.width = "230px"; // Define a largura do menu de navegação para 230px ao abrir
  }
}

function closeNav() {
  const menuNav = document.getElementById("my-menu-nav"); // Seleciona o menu de navegação
  if (menuNav) {
    menuNav.style.width = "0"; // Define a largura do menu de navegação para 0 ao fechar
  }
}

// Adiciona um evento de redimensionamento da janela
window.addEventListener('resize', function() {
  const menuNav = document.getElementById("my-menu-nav"); // Seleciona o menu de navegação
  if (window.innerWidth > 880 && menuNav) { 
    menuNav.style.width = 'auto'; // Define a largura do menu de navegação como 'auto' se a largura da janela for maior que 880px
  }
});

/* Validação do Formulário */
const form = document.getElementById('agendamentoForm'); // Seleciona o formulário de agendamento
if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    if (form.checkValidity() === false) {
      event.stopPropagation(); // Para a propagação do evento se o formulário não for válido
    } else {
      alert("Agendamento realizado com sucesso!"); // Exibe um alerta de sucesso se o formulário for válido
    }

    form.classList.add('was-validated'); // Adiciona a classe 'was-validated' ao formulário para mostrar o estado de validação
  });
}
