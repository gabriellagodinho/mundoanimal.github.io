var currentImageIndex = 0;
var galleryImages = document.querySelectorAll('.gallery img');

// Função para lidar com o envio do formulário de agendamento
function handleAgendamentoSubmit(event) {
    event.preventDefault();

    // Obter os dados do formulário
    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;

    // Você pode adicionar a lógica para processar o agendamento aqui
    console.log(`Agendamento: ${nome} - ${servico} - ${data}`);
}

// Adicionar um evento de clique suave para navegar entre as seções
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            // Rolar suavemente até a seção de destino
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Vincular a função handleAgendamentoSubmit ao formulário de agendamento
const agendamentoForm = document.getElementById('agendamento-form');
agendamentoForm.addEventListener('submit', handleAgendamentoSubmit);

// Função para abrir o modal com a imagem ampliada
function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
// Função para lidar com o envio do formulário de agendamento
function handleAgendamentoSubmit(event) {
    event.preventDefault();

    // Obter os dados do formulário
    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;

    // Você pode adicionar a lógica para processar o agendamento aqui
    console.log(`Agendamento: ${nome} - ${servico} - ${data}`);
}

// Função para abrir o modal com a imagem ampliada
function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Iniciar o carrossel automaticamente
let currentIndex = 0;
const galleryImages = document.querySelectorAll('.gallery img');

function rotateCarousel() {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    const translateValue = -currentIndex * 100;
    document.querySelector('.gallery').style.transform = `translateX(${translateValue}%)`;
}

setInterval(rotateCarousel, 5000); // Roda o carrossel a cada 5 segundos

// Vincular a função handleAgendamentoSubmit ao formulário de agendamento
const Form = document.getElementById('agendamento-form');
agendamentoForm.addEventListener('submit', handleAgendamentoSubmit);
// Função para abrir o modal com a imagem clicada
function openModal(imageId) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var clickedImage = document.getElementById(imageId);

    modal.style.display = "block";
    modalImage.src = clickedImage.src;
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

<html defer src="index.html"></html>



