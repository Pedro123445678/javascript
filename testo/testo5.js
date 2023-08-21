try {
    // Código onde uma exceção pode ocorrer
    const resultado = 10 / 0; // Isso causará uma exceção de divisão por zero
    console.log(resultado); // Esta linha não será alcançada devido à exceção
  }catch{ (erro)
    // Código para lidar com a exceção
    console.error('Ocorreu um erro:', erro); // Exibirá a mensagem de erro
  }