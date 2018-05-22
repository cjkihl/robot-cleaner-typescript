import CleaningRobot from '../CleaningRobot';

test('Moving against South boundary', () => {
  const cleaningRobot = new CleaningRobot({ x1: 0, y1: 0, x2: 100, y2: 100 });
  cleaningRobot.move({ dir: 'S', steps: 101 });
  expect(cleaningRobot.pos).toEqual({ x: 0, y: 100 });
});

test('Moving against North boundary', () => {
  const cleaningRobot = new CleaningRobot({ x1: -5000, y1: -5000, x2: 100, y2: 100 });
  cleaningRobot.move({ dir: 'N', steps: 5020 });
  expect(cleaningRobot.pos).toEqual({ x: 0, y: -5000 });
});

test('Moving against East boundary', () => {
  const cleaningRobot = new CleaningRobot({ x1: 0, y1: 0, x2: 200, y2: 200 });
  cleaningRobot.move({ dir: 'E', steps: 300 });
  expect(cleaningRobot.pos).toEqual({ x: 200, y: 0 });
});

test('Moving against West boundary', () => {
  const cleaningRobot = new CleaningRobot({ x1: -250, y1: -250, x2: 100, y2: 100 });
  cleaningRobot.move({ dir: 'W', steps: 400 });
  expect(cleaningRobot.pos).toEqual({ x: -250, y: 0 });
});
