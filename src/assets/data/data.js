const data = new Map([
  ['start', {
    src: 'src/assets/videos/number2.mp4',
  }],
  ['beginning', {
    src: 'src/assets/videos/testing.mp4',
    option1Text: 'YES',
    option2Text: 'NO',
    option1Value: 'middleA',
    option2Value: 'middleB'
  }],
  ['middleA', {
    src: 'src/assets/videos/number2.mp4',
    option1Text: 'OKAY',
    option2Text: 'NOPE',
    option1Value: 'endingA',
    option2Value: 'endingB'
  }],
  ['middleB', {
    src: 'src/assets/videos/number2.mp4',
    option1Text: 'ACCEPT',
    option2Text: 'DECLINE',
    option1Value: 'endingC',
    option2Value: 'endingD'
  }],
  ['endingA', {
    src: 'src/assets/videos/testing.mp4',
  }],
  ['endingB', {
    src: 'src/assets/videos/testing.mp4',
  }],
  ['endingC', {
    src: 'src/assets/videos/testing.mp4',
  }],
  ['endingD', {
    src: 'src/assets/videos/testing.mp4',
  }]
]);

export default data;
