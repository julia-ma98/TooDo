const addInput = document.getElementsByClassName('button_add')[0];
const toDo = document.getElementsByClassName('toDo')[0];


function createTodoElement() {
   const wrapper = document.createElement('div');
   wrapper.classList.add('input__wrapper');
   wrapper.innerHTML =
       `  <div class="control">
                <button class="button button_check"><img class="icon" src="./img/img_3.png" alt="Галочка"></button>
            </div>
            <div class="input__control">
                <input type="text" class="input__text" placeholder="напишите задачу">
            </div>
            <div class="control">
                <button class="button button_up"><img class="icon" src="./img/img_2.png" alt="Стрелка вверх"></button>
            </div>
            <div class="control">
                <button class="button button_down"><img class="icon" src="./img/img_1.png" alt="Стрелка вниз"></button>
            </div>
            <div class="control">
                <button class="button button_delete"><img class="icon" src="./img/img.png" alt="Крестик"></button>
            </div>`
   let buttonDel = wrapper.getElementsByClassName('button_delete')[0]
   buttonDel.addEventListener('click', () => {
      wrapper.remove()
      })
   let buttonColor = wrapper.getElementsByClassName('button_check')[0]
   // buttonColor.style.backgroundColor = 'rgba(255, 255, 255, 0.93)'; ??????
   buttonColor.addEventListener('click', () => {
      if (buttonColor.style.backgroundColor === 'rgba(249, 250, 249, 0.86)') {
         buttonColor.style.backgroundColor = 'rgba(49,236,34,0.68)';
      } else {
         buttonColor.style.backgroundColor = 'rgba(249, 250, 249, 0.86)';
         buttonDel.style.borderColor = 'rgba(219, 220, 219, 0.55)';
      }
   })
   return wrapper
}

addInput.onclick = function () {
   const newTodo = createTodoElement();
   toDo.appendChild(newTodo);// Добавляем новый элемент
};

