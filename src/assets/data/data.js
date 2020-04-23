import start from '../videos/start.mp4';
import beginning from '../videos/beginning.mp4';
import middle1 from '../videos/middle1.mp4';
import middle2 from '../videos/middle2.mp4';
import ending1 from '../videos/ending1.mp4';
import ending2 from '../videos/ending2.mp4';
import ending3 from '../videos/ending3.mp4';
import ending4 from '../videos/ending4.mp4';

const data = new Map([
  ['start', {
    src: start
  }],
  ['beginning', {
    src: beginning,
    option1Text: 'HARRY',
    option2Text: 'RON',
    option1Value: 'middleA',
    option2Value: 'middleB'
  }],
  ['middleA', {
    src: middle1,
    option1Text: 'FIGHT',
    option2Text: 'RUN',
    option1Value: 'endingA',
    option2Value: 'endingB'
  }],
  ['middleB', {
    src: middle2,
    option1Text: 'A PEAK INSIDE',
    option2Text: 'A JOYRIDE',
    option1Value: 'endingC',
    option2Value: 'endingD'
  }],
  ['endingA', {
    src: ending1,
  }],
  ['endingB', {
    src: ending2,
  }],
  ['endingC', {
    src: ending3,
  }],
  ['endingD', {
    src: ending4,
  }]
]);

export default data;
