import CleaningRobot from './CleaningRobot';
import { question, readInstructionsFromFile } from './utils';

/**
 * Simple probram that reads instructions from file and runs the Cleaning Robot
 */
const run = async () => {
  while (true) {
    try {
      const filename = await question('What is the name of the cleaners instruction-file?', 'cleaner-data.txt');
      const instructions = await readInstructionsFromFile(filename);
      const cleaningRobot = new CleaningRobot();
      cleaningRobot.run(instructions);
      process.stdout.write(`Cleaned: ${cleaningRobot.uniqueCleanedAreas.size} \n\n`);
    } catch (e) {
      // Supress all errors according to instructions
    }
  }
};

run();
