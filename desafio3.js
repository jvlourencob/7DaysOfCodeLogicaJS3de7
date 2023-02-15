const area = prompt(
    "Você quer seguir para a área de Front-End ou de Back-End? Digite o nome da área:"
  );

  let linguagem = "";

  if (area == "Front-End") {
    linguagem = prompt("Você quer aprender React ou Vue");
  } else if (area == "Back-End") {
    linguagem = prompt("Você quer aprender C# ou Java?");
  } else {
    alert("Área digitada não é valida!");
  }
  
  const especialidadeOuFullstack = prompt(
    "Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack"
  );

  if (especialidadeOuFullstack == 1) {
    alert(
      `Continue se especializando em ${linguagem} e será um otimo profissional na área de ${area}!`
    );
  } else if (especialidadeOuFullstack == 2) {
    alert(
      `Você precisa aprender outras linguagens além de ${linguagem} se quiser se tornar Fullstack!`
    );
  } else {
    alert("Você não inseriu um texto válido, digite corretamente por favor!");
  }
  
  let msg = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo´."
  )

  while (msg === "ok") {
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é uma tecnologia muito boa!`);
    msg = prompt(
      "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo"
    );
  }
