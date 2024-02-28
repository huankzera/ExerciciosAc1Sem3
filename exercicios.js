// 1. Classe Usuario com atributos nome e idade
class Usuario {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  
  // Criando array de objetos Usuario
  const usuarios = [
    new Usuario("Matheus", 21),
    new Usuario("Henrique", 39),
    new Usuario("Isaque", 25)
  ];
  
  // Criando novo array apenas com os nomes dos usuários em letras maiúsculas
  const nomesMaiusculos = usuarios.map(usuario => usuario.nome.toUpperCase());
  console.log("Nomes em maiúsculas:", nomesMaiusculos);
  
  // Mostrando os números ímpares em um intervalo de 0 a 100
  console.log("Números ímpares de 0 a 100:");
  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }
  
  // 2. Filtrando usuários com idade superior a 18 anos
  const maioresDe18 = usuarios.filter(usuario => usuario.idade > 18);
  console.log("Usuários com idade superior a 18 anos:", maioresDe18);
  
  // 3. Encontrando o primeiro usuário com idade entre 25 e 30 anos
  const usuarioEntre25e30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);
  console.log("Primeiro usuário com idade entre 25 e 30 anos:", usuarioEntre25e30);
  
  // 4. Criando array de números, filtrando pares e mapeando para o dobro
  const numeros = Array.from({ length: 101 }, (_, i) => i); // Array de 0 a 100
  const numerosParesDobro = numeros.filter(num => num % 2 === 0).map(num => num * 2);
  console.log("Números pares dobrados:", numerosParesDobro);
  
  // 5. Classe Animal com subclasses Cachorro e Gato
  class Animal {
    emitirSom() {
      console.log("O animal emite um som.");
    }
  
    correr() {
      console.log("O animal corre.");
    }
  }
  
  class Cachorro extends Animal {
    emitirSom() {
      console.log("O cachorro late.");
    }
  }
  
  class Gato extends Animal {
    emitirSom() {
      console.log("O gato mia.");
    }
  }
  
  // 6. Classe Livro com atributos título e páginas
  class Livro {
    constructor(titulo, paginas) {
      this.titulo = titulo;
      this.paginas = paginas;
    }
  }
  
  // Criando array de objetos Livro e filtrando os com mais de 300 páginas
  const livros = [
    new Livro("Livro 1", 200),
    new Livro("Livro 2", 400),
    new Livro("Livro 3", 500)
  ];
  
  const livrosComMaisDe300Paginas = livros.filter(livro => livro.paginas > 300);
  console.log("Livros com mais de 300 páginas:", livrosComMaisDe300Paginas);
  
  // 7. Classe Carro com atributos marca e ano
  class Carro {
    constructor(marca, ano) {
      this.marca = marca;
      this.ano = ano;
    }
  }
  
  // Criando array de objetos Carro e encontrando o primeiro Toyota fabricado após 2010
  const carros = [
    new Carro("Toyota", 2015),
    new Carro("Honda", 2019),
    new Carro("Toyota", 2009)
  ];
  
  const primeiroToyotaApos2010 = carros.find(carro => carro.marca === "Toyota" && carro.ano > 2010);
  console.log("Primeiro carro Toyota fabricado após 2010:", primeiroToyotaApos2010);
  
  // 8. Classe Produto com atributos nome e preco
  class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  // Criando array de objetos Produto e mapeando os preços para aumentar 10%
  const produtos = [
    new Produto("Produto 1", 50),
    new Produto("Produto 2", 150),
    new Produto("Produto 3", 200)
  ];
  
  const produtosComPrecoAumentado = produtos.map(produto => ({
    nome: produto.nome,
    preco: produto.preco * 1.1
  }));
  console.log("Produtos com preço aumentado em 10%:", produtosComPrecoAumentado);
  
  // 9. Encontrando o primeiro produto com preço superior a R$ 100,00 e alterando seu nome
  const produtoCaro = produtos.find(produto => produto.preco > 100);
  if (produtoCaro) {
    produtoCaro.nome = "Produto Caro";
  }
  console.log("Primeiro produto com preço superior a R$ 100,00:", produtoCaro);
  
  // 10. Criando array de números, filtrando divisíveis por 3 e mapeando para o quadrado
  const numerosDivisiveisPor3 = numeros.filter(num => num % 3 === 0).map(num => num * num);
  console.log("Números divisíveis por 3 e elevados ao quadrado:", numerosDivisiveisPor3);
  