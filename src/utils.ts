import * as rd from 'readline';
import * as fs from 'fs';
import { Instructions, Movement } from './types';

const ri = rd.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Outputs a question to stdout with a default answer
 * @param q The question to display
 * @param defaultAnswer Default answer
 */
export const question = (q: string, defaultAnswer: string): Promise<string> => {
  return new Promise(resolve =>
    ri.question(`${q} (${defaultAnswer})`, answer => {
      resolve(answer.length === 0 ? defaultAnswer : answer);
    }),
  );
};

/**
 * Helper for reading lines of a file async
 * @param filename
 */
const readFileLines = (filename: string): Promise<string[]> =>
  new Promise((resolve, reject) =>
    fs.readFile(filename, (err, data) => {
      if (err) {
        throw err;
      }
      resolve(data.toString().split('\n'));
    }),
  );

/**
 * Reads and parses instructions from file
 * @param filename The name of the file to read from
 */
export const readInstructionsFromFile = async (filename: string): Promise<Instructions> => {
  if (!fs.existsSync(filename)) {
    throw filename;
  }
  const lines = await readFileLines(filename);
  const iterations = parseInt(lines[0], 10);
  const [x, y] = lines[1].split(' ');
  const movements = lines.slice(2).map(line => {
    const [dir, steps] = line.split(' ');
    return { dir, steps: parseInt(steps, 10) } as Movement;
  });
  return { iterations, initialPos: { x: parseInt(x, 10), y: parseInt(y, 10) }, movements };
};
