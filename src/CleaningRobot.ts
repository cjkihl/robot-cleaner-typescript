import { Boundingbox, Position, Instructions, Movement } from './types';

/**
 * A Robot that can clean a floor grid given instructions
 * @class CleaningRobot
 */
export default class CleaningRobot {
  /**
   * Boundingbox for the floor
   */
  roomBoundaries: Boundingbox;
  /**
   * Cleaners current position
   */
  pos: Position = { x: 0, y: 0 };
  /**
   * The number of unique areas this cleaner has cleaned
   */
  uniqueCleanedAreas: Set<string> = new Set();

  constructor(roomBoundaries: Boundingbox = { x1: 0, y1: 0, x2: 100000, y2: 100000 }) {
    this.roomBoundaries = roomBoundaries;
  }

  /**
   * Runs the cleaner with the given instructions
   */
  run({ iterations, initialPos, movements }: Instructions) {
    this.pos = initialPos;
    this.uniqueCleanedAreas.add(`${this.pos.x}:${this.pos.y}`);

    for (const movement of movements.slice(0, iterations)) {
      this.move(movement);
    }
  }

  /**
   * Moves the cleaner according to the movement
   * @param param0 The movement (Directions and number of steps) to move the cleaner
   */
  move({ dir, steps }: Movement) {
    let { x, y } = this.pos;
    switch (dir) {
      case 'N': {
        y -= steps;
        if (y < this.roomBoundaries.y1) {
          y = this.roomBoundaries.y1;
        }
        for (let i = this.pos.y; i >= y; i--) {
          this.uniqueCleanedAreas.add(`${this.pos.x}:${i}`);
        }
        break;
      }
      case 'E': {
        x += steps;
        if (x > this.roomBoundaries.x2) {
          x = this.roomBoundaries.x2;
        }
        for (let i = this.pos.x; i <= x; i++) {
          this.uniqueCleanedAreas.add(`${i}:${this.pos.y}`);
        }
        break;
      }
      case 'S': {
        y += steps;
        if (y > this.roomBoundaries.y2) {
          y = this.roomBoundaries.y2;
        }
        for (let i = this.pos.y; i <= y; i++) {
          this.uniqueCleanedAreas.add(`${this.pos.x}:${i}`);
        }
        break;
      }
      case 'W': {
        x -= steps;
        if (x < this.roomBoundaries.x1) {
          x = this.roomBoundaries.x1;
        }
        for (let i = this.pos.x; i >= x; i--) {
          this.uniqueCleanedAreas.add(`${i}:${this.pos.y}`);
        }
        break;
      }
    }
    this.pos = { x, y };
  }
}
