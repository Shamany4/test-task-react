import React, {useRef, useState} from "react";
import './main.scss';

const Main = () => {
  const desktopCheckboxRef = useRef();
  const mobileCheckboxRef = useRef();

  const tableData = [
    ['Набор продуктов 1', 'Яйца', 'Молоко'],
    ['Набор продуктов 2', 'Хлеб', 'Молоко / Сыр'],
    ['Набор продуктов 3', 'Колбаса', 'Сыр'],
    ['Набор продуктов 4', 'Груша', 'Молоко / Сыр'],
    ['Набор продуктов 5', 'Сыр', 'Сыр'],
    ['Набор продуктов 6', 'Яблоко', 'Молоко'],
  ]

  return (
    <div className="main">
      <p className="instruction">
        В зависимости от выбранного значения должно меняться отображение в таблице. <br/>
        <br/>
        Например, выбрано значение "Молоко", то должны отображаться следующие наборов продуктов: "Набор продуктов 1" и
        "Набор продуктов 6" <br/>
        Если выбрано значение "Сыр", то должны отображаться следующие наборов продуктов: "Набор продуктов 3" и
        "Набор продуктов 5" <br/>
        Если выбраны оба значения, то отображается вся таблица со всеми данными.
      </p>
      <div className="main__wrapper">
        <table className="table">
          <thead>
          <tr>
            <th>Заголовок 1</th>
            <th>Заголовок 2</th>
            <th>Заголовок 3</th>
          </tr>
          </thead>
          <tbody>
          {
            tableData.map((row, row_index) => {
              return (
                <tr key={row_index}>
                  {
                    row.map((cell, cell_index) => {
                      return (
                        <td key={cell_index}>
                          {cell}
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
          </tbody>
        </table>

        <div className="checkbox" ref={desktopCheckboxRef}>
          <div className="checkbox__title">Выберите значение</div>
          <div className="checkbox__wrapper">
            <div className="checkbox__block is-checked">
              <p className="checkbox__text">Молоко</p>
              <div className="checkbox__input"></div>
            </div>
            <div className="checkbox__block">
              <p className="checkbox__text">Сыр</p>
              <div className="checkbox__input"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;