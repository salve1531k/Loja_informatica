// Função para controlar o carrossel de imagens
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function changeImage() {
    // Move as imagens para a esquerda
    currentIndex = (currentIndex + 1) % totalImages;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Função para alterar o slide
function changeSlide(direction) {
  // Seleciona o container das imagens
  const carouselImages = document.querySelector('.carousel-images');
  
  // Calcula o número total de imagens
  const totalSlides = carouselImages.children.length;

  // Atualiza o índice da imagem atual com base na direção (1 = próxima, -1 = anterior)
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  // Calcula o deslocamento necessário para exibir a imagem correta
  const offset = -currentIndex * 100;

  // Aplica o deslocamento ao container para mostrar a imagem desejada
  carouselImages.style.transform = `translateX(${offset}%)`;
}


// Configura a troca automática de imagens no carrossel
setInterval(changeImage, 3000); // Troca a cada 3 segundos

// Função para adicionar produto ao carrinho (simulado)
document.getElementById('add-to-cart')?.addEventListener('click', function() {
    alert("Produto adicionado ao carrinho!");
});

// Limpa o formulário de cadastro quando o botão de envio for clicado
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário
    alert("Cadastro realizado com sucesso!");
    
    // Limpa os campos do formulário
    document.getElementById('signup-form').reset();
});
