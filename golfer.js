class Golfer {
  constructor(golferObj) {
    this.name = golferObj.name;
    this.handicap = golferObj.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg() {
    return `I usually shoot a ${72 + this.handicap} on average.`;
  }

  playRound(golfCourse) {
    if(golfCourse.difficulty === 'hard') {
      this.frustration = 500;
    } else if(golfCourse.difficulty === 'moderate') {
      this.frustration = 100;
    }
  }

  hitTheRange() {
    this.confidence = this.handicap + this.confidence;
  }

  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`;
  }

  whatYaShoot(score) {
    console.log(this.frustration);
    if(score < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!'
    } else if(score === 0) {
      this.frustration = 10;
      return 'Booyah!';
    } else if(score > 0) {
      this.frustration = 20;
      return 'Doh!';
    }
  }
}

module.exports = Golfer;
