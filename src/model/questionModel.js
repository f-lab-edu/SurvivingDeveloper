export default class QuestionModel {
  constructor() {
    this.currentId = 'ab';
    this.userAnswer = '';
    this.isShowAnswer = false;
    this.questionList = [
      {
        id: 'ab',
        title: '쿠키와 세션의 차이는?',
        answer:
          '- 쿠키는 브라우저에 키와 값으로 저장되는 작은 텍스트 파일이다. 쿠키는 주로 사용자의 상태 정보를 브라우저에 저장했다가 http 요청할 때마다 쿠키를 보내서 사용자를 인증하는데 사용한다. \n - 세션은 브라우저가 종료되기 전까지 클라이언트의 요청을 유지하게 해주는 기술이다. 세션의 내용은 서버에 저장되기 때문에 서버에 부하를 줄 수 있다.',
        submitcount: 0,
        category: 'web',
      },
      {
        id: 'cd',
        title: '객체지향의 4가지 특징이란?',
        answer: `- 추상화 : 객체의 공통 속성을 정의하는 것\n- 캡슐화 : 실제 구현 내부를 외부에 감추는 것\n- 상속 : 상위 객체의 속성을 하위 객체에서 사용할 수 있는 것\n- 다형성 : 객체의 타입이 다양한 것. 자바스크립트는 오버라이딩을 통해 구현할 수 있다.`,
        submitcount: 0,
        category: 'cs',
      },
      {
        id: 'ef',
        title: '클로저란?',
        answer: '함수가 함수와 선언된 어휘적 환경의 조합.',
        submitcount: 0,
        category: 'javascript',
      },
    ];
  }

  get questionIdList() {
    return this.questionList?.map(question => question.id) || [];
  }
  get currentQuestion() {
    return this.questionList.find(question => question.id === this.currentId);
  }
  get isApplySubmit() {
    return this.userAnswer && !this.isShowAnswer;
  }

  suffleList() {
    this.questionList.sort(() => Math.random() - 0.5);
    this.currentId = this.questionIdList[0];
  }
  handleChangeQuestion(direction) {
    let index = this.questionIdList.findIndex(id => id === this.currentId);
    if (direction === 'prev') {
      index -= 1;
    }
    if (direction === 'next') {
      index += 1;
    }

    const { length } = this.questionIdList;
    index = (index + length) % length;
    this.currentId = this.questionIdList[index];
    this.userAnswer = '';
  }
  handleChangeShowAnswer(isShowAnswer) {
    this.isShowAnswer = isShowAnswer;
  }
  handleChangeUserAnswer(value) {
    this.userAnswer = value;
  }
  // addQuestionList (question) {
  //   this.questionList = [...this.questionList, question];
  // }
}
