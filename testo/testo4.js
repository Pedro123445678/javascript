for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // Pula para a próxima iteração se i for igual a 3
    }
    console.log(i); // Será executado para i = 1, 2, 4, 5
  }
  