class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  createSpaces() {
    let spaces = [];
    for (let x = 0; x < this.columns; x++) {
      const col = [];

      for (let y = 0; y < this.rows; y++) {
        col.push(new Space(x, y));
      }
      spaces.push(col);
    }
    return spaces;
  }

  render() {
    for (let column of this.spaces) {
      for (let space of column) {
        space.render();
      }
    }
  }
}
