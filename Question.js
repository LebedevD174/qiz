class Question {
  #answers;

  #question;

  constructor({ question, answers }) {
    this.#answers = answers;
    this.#question = question;
  }

  #transform() {
    const answers = this.#answers.replace('\r\n', ' ').trim().split('\r\n');
    return answers;
  }

  get answers() {
    return this.#transform().map((answer, index) => {
      if (answer[0] === '$') {
        return { name: `${index + 1}) ${answer.slice(1)}`, value: 10 };
      }
      return { name: `${index + 1}) ${answer}`, value: 0 };
    });
  }

  get question() {
    return this.#question;
  }
}

// const cont = new Question({ question: 'Как спать', answers: 'Лежа\nСтоя\n\$За кодом' });
// const cooo = new Question({
//   question: '\r\n Как Андрею сделать лекции еще продуктивнее?\r\n',
//   answers: '\r\n' + 'Проводить их вместе с Даней\r\n'
//   + '$Купить новую клавиатуру\r\n' + 'Писать код на Python\r\n'
// });

// console.log(cooo.question);
// console.log(cooo.answers);

module.exports = Question;
