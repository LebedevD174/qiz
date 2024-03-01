const Question = require('./Question.js');
const getInfo = require('./app.js');

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
        let qu = new Question(theme.questions[i])
        quest.push(qu);
      }
      return quest;
    });
  }

  async start() {
    // return this.#createQuest();
  }
}

const qizlog = new Qiz(getInfo());
console.log(qizlog.createQuest()[0][1].answers);
