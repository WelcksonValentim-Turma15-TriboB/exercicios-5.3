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
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    // Escreva seu código abaixo.
  function createDaysOfTheMonth() {
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
