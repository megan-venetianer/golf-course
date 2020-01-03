class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }
  checkInGroup(group) {
    if(this.openings > group.length) {
    this.openings = this.openings - group.length;
    group.forEach(player => this.currentlyPlaying.unshift(player.name));
  } return;
  }
  recommendTees(golfer) {
    // switch(true){
    //   case golfer.handicap < 11:
    //     return 'You should play from the Difficult Tees.';
    //     break;
    //   case golfer.handicap > 10 && golfer.handicap < 15:
    //     return 'You should play from the Middle Tees.';
    //     break;
    //   case golfer.handicap > 14:
    //     return 'You should play from the Forward Tees.';
    //     break;
    //   default:
    //   break;
    // }
    if(golfer.handicap < 11) {
      return 'You should play from the Difficult Tees.'
    } else if(golfer.handicap > 10 && golfer.handicap < 15) {
      return 'You should play from the Middle Tees.'
    } else {
      return 'You should play from the Forward Tees.';
    }
  }
}

module.exports = GolfCourse;
