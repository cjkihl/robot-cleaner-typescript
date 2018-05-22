import CleaningRobot from '../CleaningRobot';
import { Instructions } from '../types';

test('Simple instruction', () => {
  const cleaningRobot = new CleaningRobot();
  const instructions: Instructions = {
    initialPos: { x: 10, y: 22 },
    iterations: 2,
    movements: [{ dir: 'E', steps: 2 }, { dir: 'N', steps: 1 }],
  };
  cleaningRobot.run(instructions);
  expect(cleaningRobot.uniqueCleanedAreas).toEqual(new Set<string>(['10:22', '11:22', '12:22', '12:21']));
});

test('Instruction that collides with boundaries', () => {
  const cleaningRobot = new CleaningRobot({ x1: 0, y1: 0, x2: 10, y2: 10 });
  const instructions: Instructions = {
    initialPos: { x: 8, y: 8 },
    iterations: 100,
    movements: [{ dir: 'S', steps: 3 }, { dir: 'E', steps: 4 }, { dir: 'N', steps: 1 }],
  };
  cleaningRobot.run(instructions);
  expect(cleaningRobot.uniqueCleanedAreas).toEqual(new Set<string>(['8:8', '8:9', '8:10', '9:10', '10:10', '10:9']));
});

test('Instruction with less iterations than instructions', () => {
  const cleaningRobot = new CleaningRobot({ x1: 0, y1: 0, x2: 10, y2: 10 });
  const instructions: Instructions = {
    initialPos: { x: 8, y: 8 },
    iterations: 2,
    movements: [{ dir: 'S', steps: 3 }, { dir: 'E', steps: 4 }, { dir: 'N', steps: 1 }],
  };
  cleaningRobot.run(instructions);
  expect(cleaningRobot.uniqueCleanedAreas).toEqual(new Set<string>(['8:8', '8:9', '8:10', '9:10', '10:10']));
});

test('Instruction with dublicate positions', () => {
  const cleaningRobot = new CleaningRobot({ x1: 0, y1: 0, x2: 20, y2: 20 });
  const instructions: Instructions = {
    initialPos: { x: 8, y: 8 },
    iterations: 100,
    movements: [{ dir: 'S', steps: 1 }, { dir: 'E', steps: 1 }, { dir: 'N', steps: 1 }, { dir: 'W', steps: 1 }],
  };
  cleaningRobot.run(instructions);
  expect(cleaningRobot.uniqueCleanedAreas).toEqual(new Set<string>(['8:8', '8:9', '9:9', '9:8']));
});
