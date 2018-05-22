import CleaningRobot from '../CleaningRobot';

test('Moving in South direction', () => {
  const cleaningRobot = new CleaningRobot();
  cleaningRobot.move({ dir: 'S', steps: 12 });
  expect(cleaningRobot.pos).toEqual({ x: 0, y: 12 });
});

test('Moving in North direction', () => {
  const cleaningRobot = new CleaningRobot();
  cleaningRobot.pos = { x: 100, y: 100 };
  cleaningRobot.move({ dir: 'N', steps: 37 });
  expect(cleaningRobot.pos).toEqual({ x: 100, y: 63 });
});

test('Moving in East direction', () => {
  const cleaningRobot = new CleaningRobot();
  cleaningRobot.move({ dir: 'E', steps: 15 });
  expect(cleaningRobot.pos).toEqual({ x: 15, y: 0 });
});

test('Moving in West direction', () => {
  const cleaningRobot = new CleaningRobot();
  cleaningRobot.pos = { x: 200, y: 200 };
  cleaningRobot.move({ dir: 'W', steps: 16 });
  expect(cleaningRobot.pos).toEqual({ x: 184, y: 200 });
});
