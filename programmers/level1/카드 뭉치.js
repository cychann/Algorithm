function solution(cards1, cards2, goal) {
  while (goal.length > 0) {
    const match = goal.shift();

    if (cards1[0] !== match && cards2[0] !== match) {
      goal.push(match);
      break;
    }

    if (cards1[0] === match) {
      cards1.shift();
    }

    if (cards2[0] === match) {
      cards2.shift();
    }
  }

  return goal.length === 0 ? "Yes" : "No";
}

class Queue {
  items = [];
  front = 0;
  rear = 0;

  constructor(array) {
    this.items = array;
    this.rear = array.length;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  first() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(cards1, cards2, goal) {
  cards1 = new Queue(cards1);
  cards2 = new Queue(cards2);
  goal = new Queue(goal);

  while (!goal.isEmpty()) {
    if (!cards1.isEmpty() && cards1.first() === goal.first()) {
      cards1.pop();
      goal.pop();
    } else if (!cards2.isEmpty() && cards2.first() === goal.first()) {
      cards2.pop();
      goal.pop();
    } else {
      break;
    }
  }

  return goal.isEmpty() ? "Yes" : "No";
}
