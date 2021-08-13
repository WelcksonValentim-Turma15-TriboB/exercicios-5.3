function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek()
  

    // Escreva seu código abaixo.
  function createDaysOfTheMonth() {
    let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let dayList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let elementoDay = dezDaysList[index];
        let elementoLi = document.createElement('li');
        console.log(elementoDay);

        if (elementoDay === 24 || elementoDay === 31) {
            elementoLi.className = 'day holiday';
            elementoLi.innerHTML = elementoDay;
            dayList.appendChild(elementoLi);
        }
        else if (elementoDay === 4 || elementoDay === 11 || elementoDay === 18) {
            elementoLi.className = 'day friday';
            elementoLi.innerHTML = elementoDay;
            dayList.appendChild(elementoLi);
        }
        else if (elementoDay === 25) {
            elementoLi.className = 'day holiday friday';
            elementoLi.innerHTML = elementoDay;
            dayList.appendChild(elementoLi);   
        }
        else {
            elementoLi.className = 'day';
            elementoLi.innerHTML = elementoDay;
            dayList.appendChild(elementoLi);
        }
    }
  }
  createDaysOfTheMonth()

  function receveHolidays(nameButton){
      let dayHoliday = document.querySelector('.buttons-container');
      let newButton = document.createElement('button');
      newButton.id = 'btn-holiday';
      dayHoliday.appendChild(newButton);
      newButton.innerHTML = nameButton;
  }
  receveHolidays('Feriados');

function clickButtonHolidays() {
    let buttonHoliday = document.querySelector('#btn-holiday');
    let dayHoliday = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let newColor = 'yellow';
  
    buttonHoliday.addEventListener('click', function() {
      for (let index = 0; index < dayHoliday.length; index += 1) {
        if (dayHoliday[index].style.backgroundColor === newColor) {
            dayHoliday[index].style.backgroundColor = backgroundColor;
        } else {
            dayHoliday[index].style.backgroundColor = newColor;
        }
      }
    })
  };
      clickButtonHolidays();

      function buttonFriday(friday) {
      let dayFriday = document.querySelector('.buttons-container');
      let buttonFriday = document.createElement('button');
      buttonFriday.id = 'btn-friday';
      dayFriday.appendChild(buttonFriday);
      buttonFriday.innerHTML = friday;
  }
  buttonFriday('Sexta-feira');

  function clickButtonFriday(friday) {
    let buttonFriday= document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let dayFriday = 'friday =)';
    
    buttonFriday.addEventListener('click', function(){
    for (let index = 0; index < fridays.length; index += 1) {
        if (fridays[index].innerHTML !== dayFriday) {
            fridays[index].innerHTML = dayFriday;
        }
        else {
            fridays[index].innerHTML = friday[index]; 
        }
    }
    })
  };
  let dezFridays = [ 4, 11, 18, 25 ];
  clickButtonFriday(dezFridays);

  function mouseOver() {
    let days = document.querySelector('#days');
     days.addEventListener('mouseover', function(event) {
       event.target.style.fontSize = '40px';
     })
  }
  function mouseOut() {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
    })
  }
  mouseOver();
  mouseOut();

  function adicionaTarefas(notes) {
    let mytasks = document.querySelector('.my-tasks');
    let tarefas = document.createElement('span');
    tarefas.innerHTML = notes;
    mytasks.appendChild(tarefas);
  }
  let newNotes = 'cozinhar';
  adicionaTarefas(newNotes);

  function adicionaLegenda(cores) {
    let myColors = document.querySelector('.my-tasks');
    let colors = document.createElement('div');
    colors.className = 'task';
    colors.style.backgroundColor = cores;
    myColors.appendChild(colors);
  }
   adicionaLegenda('green');

  function atribuirCor() {
    let selecionado = document.querySelector('task selected');
    let naoSelecionado = document.querySelector('.task');
      naoSelecionado.addEventListener('click', function(event) {
        if (selecionado.length !== 'task selected') {
          event.target.className = 'task selected';
        }
        else {
          event.target.className = 'task';
        }
      })
  }
  atribuirCor();


  Gabarito dos exercícios
  A seguir, uma solução possível para os exercícios.
  Conteúdos
  Parte II - Conheça o addEventListener
  Copiar
  const firstLi = document.getElementById('first-li');
  const secondLi = document.getElementById('second-li');
  const thirdLi = document.getElementById('third-li');
  const input = document.getElementById('input');
  const myWebpage = document.getElementById('my-spotrybefy');
  
  // 1. Copie esse arquivo e edite apenas ele;
  
  // 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
  // 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
  function handleChangeTech(event) {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
  }
  
  firstLi.addEventListener('click', handleChangeTech);
  secondLi.addEventListener('click', handleChangeTech);
  thirdLi.addEventListener('click', handleChangeTech);
  
  
  // 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
  // com a classe 'tech';
  input.addEventListener('input', function(event) {
    const techElement = document.querySelector('.tech');
    techElement.innerText = event.target.value;
  });
  
  // 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
  // redirecione para alguma página;
  // 4.1. Que tal redirecionar para seu portifólio?
  myWebpage.addEventListener('dblclick', function() {
    window.location.replace('https://blog.betrybe.com/');
  });
  
  // 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
  // a cor do mesmo;
  
  myWebpage.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
  });
  
  myWebpage.addEventListener('mouseout', function(event) {
    event.target.style.color = 'unset';
  });
  Não se preocupe se cada fragmento dessa resolução não estiver totalmente claro, pois iremos passar por uma explicação mais detalhada.
  Copiar
  const firstLi = document.getElementById('first-li');
  const secondLi = document.getElementById('second-li');
  const thirdLi = document.getElementById('third-li');
  const input = document.getElementById('input');
  const myWebpage = document.getElementById('my-spotrybefy');
  Essa primeira parte se dedica à uma boa prática de colocar nomes que irão se repetir muito em variáveis. Além disso, evita que algumas linhas de código que veremos futuramente fiquem muito extensas.
  Também podemos observar que com essas constantes, nós temos poder de acesso e edição sobre essas Li's e Inputs.
  Copiar
  function handleChangeTech(event) {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
  }
  
  firstLi.addEventListener('click', handleChangeTech);
  secondLi.addEventListener('click', handleChangeTech);
  thirdLi.addEventListener('click', handleChangeTech);
  A seção acima atribui uma função ao evento de clique nas nossas Li's. Essa função, primeiramente recebe o "event" como parâmetro, que é um objeto que contém informações sobre o evento que foi disparado no momento. Dentro dele existe a chave "target", que é uma referência ao elemento que deu início ao evento.
  Na primeira linha dentro da função, atribuimos o elemento com a classe "tech" à uma variável e na linha seguinte, removemos essa classe do elemento. E após isso, atribuimos essa classe ao "event.target", que é a propriedade que discutimos no parágrafo anterior. Por fim, limpamos nosso input, inserindo uma string vazia em seu campo de texto.
  Resumindo, tiramos a classe "tech" da Div que possuir ela, inserimos essa mesma classe na Li em que a gente clicou e aí limpamos nosso input.
  Isso funciona como se estivéssemos selecionando a Li em que queremos escrever o título da música.
  Copiar
  input.addEventListener('input', function(event) {
    const techElement = document.querySelector('.tech');
    techElement.innerText = event.target.value;
  });
  
  myWebpage.addEventListener('dblclick', function() {
    window.location.replace('https://blog.betrybe.com/');
  });
  Vimos no bloco de código anterior que primeiro criamos uma função e depois chamamos seu nome no segundo parâmetro do "addEventListener". Mas é possível criarmos uma função diretamente nesse campo, inclusive, isso foi feito nessas duas funções. Percebe que elas não têm um nome? Isso é permitido e o nome desse recurso é "função anônima". Mais adiante no curso você aprenderá outras formas de criar funções como essa.
  A primeira função adiciona um evento "input" na nossa caixa de texto. Isso vai disparar uma função que irá adicionar o valor do input na Li que atualmente está com a classe "tech".
  Pedimos uma atenção ao nome do evento da segunda função, que é "dblclick", que significa que a função apenas será acionada quando houverem dois cliques em sequência. E a ação disparada é pegar a URL atual com window.location e substituir por outro link usando .replace('https://blog.betrybe.com/') .
  Copiar
  myWebpage.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
  });
  
  myWebpage.addEventListener('mouseout', function(event) {
    event.target.style.color = 'unset';
  });
  Agora temos mais duas funções, a primeira faz com que o texto do elemento fique com a fonte vermelha quando o mouse passar por ele, já a segunda adiciona o valor "unset" para a cor da fonte. Isso significa que esse estilo irá "resetar" a cor do elemento quando o mouse sair dele.
  Esse é o fim do script desse exercício de fixação. Lembre-se que não há problemas em não entender a matéria de primeira, apenas não esqueça de sempre tirar suas dúvidas e praticar muito. Nós garantimos que os resultados irão chegar o quanto antes ✌️✌️.
  Exercícios
  Exercício 1
  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
  Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
  Copiar
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  function createDaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');
  
    for (let index = 0; index < dezDaysList.length; index += 1) {
      let day = dezDaysList[index];
      let dayItem = document.createElement('li');
  
      if (day === 24 | day === 31) {
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 4 | day === 11 | day === 18) {
        dayItem.className = 'day friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 25) {
        dayItem.className = 'day holiday friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else {
        dayItem.innerHTML = day;
        dayItem.className = 'day';
        getDaysList.appendChild(dayItem);
      }
    };
  };
  createDaysOfTheMonth();
  
  Caso você não tenha conseguido fazer esse exercício, reforce seus estudos sobre DOM.
  Exercício 2
  Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
  Adicione a este botão a ID "btn-holiday" .
  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
  Copiar
  function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  };
  
  createHolidayButton('Feriados');
  
  Caso você não tenha conseguido fazer esse exercício, reforce seus estudos sobre DOM.
  Exercício 3
  Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
  É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
  Copiar
  function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  
  displayHolidays();
  Exercício 4
  Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
  Adicione a este botão o ID "btn-friday" .
  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
  Copiar
  function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  };
  
  createFridayButton('Sexta-feira');
  Exercício 5
  Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
  É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
  Copiar
  function displayFridays(fridaysArray) {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    })
  };
  
  let dezFridays = [ 4, 11, 18, 25 ];
  displayFridays(dezFridays);
  Exercício 6
  Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
  Copiar
  function dayMouseOver() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayMouseOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  dayMouseOver();
  dayMouseOut();
  Exercício 7
  Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
  O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
  Copiar
  function newTaskSpan(task) {
  
    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
  };
  
  newTaskSpan('Projeto:');
  Exercício 8
  Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
  O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
  O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
  Copiar
  function newTaskDiv(color) {
  
    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  };
  
  newTaskDiv('green');
  Exercício 9
  Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
  Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
  Copiar
  function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();
  Exercício 10
  Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
  Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
  Copiar
  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();