document.getElementById('startButton').addEventListener('click', function () {
    document.querySelector('.start-screen').style.display = 'none';
    document.getElementById('calculator').classList.remove('hidden');
  });
  
  function calcular() {
    const input = document.getElementById("inputNumbers").value;
  
    // Validação para garantir que só números e vírgulas sejam inseridos
    const invalidChar = /[^0-9,.\s]/;
    if (invalidChar.test(input)) {
      alert("Por favor, insira apenas números e vírgulas.");
      return;
    }
  
    // Transformar o input em uma lista de números
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
  
    if (numbers.length === 0) {
      alert("Por favor, insira números válidos.");
      return;
    }
  
    // Média
    const media = (numbers.reduce((acc, num) => acc + num, 0) / numbers.length).toFixed(2);
  
    // Mediana
    numbers.sort((a, b) => a - b);
    const meio = Math.floor(numbers.length / 2);
    const mediana = (numbers.length % 2 !== 0) ? numbers[meio] : ((numbers[meio - 1] + numbers[meio]) / 2).toFixed(2);
  
    // Moda
    const frequencias = {};
    numbers.forEach(num => frequencias[num] = (frequencias[num] || 0) + 1);
    const maxFreq = Math.max(...Object.values(frequencias));
    const modas = Object.keys(frequencias).filter(num => frequencias[num] === maxFreq);
  
    document.getElementById("media").textContent = media;
    document.getElementById("mediana").textContent = mediana;
    document.getElementById("moda").textContent = modas.length === numbers.length ? "Nenhuma" : modas.join(', ');
  }
  