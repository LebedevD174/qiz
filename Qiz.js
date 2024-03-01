const Question = require('./Question.js');
const getInfo = require('./app.js');
const QizView = require('./View.js');

class Qiz {
  #themes;

  constructor(arr) {
    this.#themes = arr;
  }

  get themes() {
    return this.#themes.map((el) => ({ name: el.theme.replace('\r\n', '') }));
  }

  createQuest() {
    return this.#themes.map((theme) => {
      const quest = [];
      for (let i = 0; i < theme.questions.length; i += 1) {
        const qu = new Question(theme.questions[i]);
        quest.push(qu);
      }
      return quest;
    });
  }

  async start() {
    const start = this.createQuest();
    const view = new QizView()
    const select = await view.selectTopic(this.themes);
    if (select === 'Подслушано Bears') {
      for (let i = 0; i < 5; i += 1){
        await view.displayQestion(start[0][i].question, start[0][i].answers)
      }
    }
    else {
      for (let i = 0; i < 5; i += 1){
        await view.displayQestion(start[1][i].question, start[1][i].answers)
      }
    }
  }
}

const qizlog = new Qiz(getInfo());
qizlog.start().then(console.log);
