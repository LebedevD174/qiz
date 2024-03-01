const inquirer = require('inquirer');

class QizView {
  // constructor({ question, answers } = {}) {
  //   this.question = question;
  //   this.answers = answers;
  // }

  async selectTopic(topics) {
    return await inquirer
      .prompt([
        { type: 'input', name: 'username', message: 'Введи пожалуйста имя:' },
        {
          type: 'list',
          name: 'topic',
          message: 'Выбери пожалуйста тему',
          choices: topics,
        },
      ])
      .then((topics) => {
        console.log(topics)
        return topics['topic']
      });
  
    }

  async displayQestion(question, answers) {
    const card = await inquirer.prompt([
      {
        type: 'list',
        name: 'bonuses',
        message: question,
        choices: answers,
      },
    ]);
    console.log(card);
    if (card.bonuses === 10) {
      console.log('Ты умничка!');
    } else {
      console.log('у тебя все получится! Когда-нибудь');
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
