const inquirer = require("inquirer");

class QizView {
  constructor({ question, answers } = {}) {
    this.question = question;
    this.answers = answers;
  }

  async selectTopic(topics) {
    await inquirer
      .prompt([
        { type: "input", name: "username", message: "Введи пожалуйста имя:" },
        {
          type: "list",
          name: "topic",
          message: "Выбери пожалуйста тему",
          choices: topics,
        },
      ])
      .then((topics) => console.log(topics));
  }

  async displayQestion(question) {
    const card = await inquirer.prompt([
      {
        type: "list",
        name: "bonuses",
        message: this.question,
        choices: this.answers,
      },
    ]);
    console.log(card);
    if (card.bonuses === 60) {
      console.log("Ты умничка! Все твои ответы правильные");
    } else {
      console.log("Попробуй сыграть еще раз и у тебя все получится!");
    }
  }
}

// const question = new QizView({
//   question: "Как Андрею сделать лекции еще продуктивнее?",
//   answers: [
//     { name: "1) Проводить их вместе с Даней", value: 0 },
//     { name: "2) Купить новую клавиатуру", value: 10 },
//     { name: "3) Код на Python", value: 0 },
//   ],
// });

// console.log(question.displayQestion("Как Андрею сделать лекции еще продуктивнее?"));
// console.log(question.selectTopic([{ name: "Вкусно и точка" }, { name: "Подслушано Мишки" }]));

module.exports = QizView;
