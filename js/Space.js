class Space {
  static get SPACE_WIDTH() {
    return 76;
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = `space-${x}-${y}`;
    this.token = null;
    this.diameter = Space.SPACE_WIDTH;
    this.radius = this.diameter / 2;
  }

  get owner() {
    if (this.token) {
      return this.token.owner;
    } else {
      return null;
    }
  }
  render() {
    const svgSpace = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    svgSpace.setAttributeNS(null, 'id', this.id);
    svgSpace.setAttributeNS(null, 'data-column', this.x);

    let tmpX = this.x * this.diameter;
    svgSpace.setAttributeNS(null, 'cx', tmpX + this.radius);

    let tmpY = this.y * this.diameter;
    svgSpace.setAttributeNS(null, 'cy', tmpY + this.radius);

    svgSpace.setAttributeNS(null, 'r', this.radius - 8);
    svgSpace.setAttributeNS(null, 'fill', 'black');
    svgSpace.setAttributeNS(null, 'stroke', 'none');

    document.getElementById('mask').appendChild(svgSpace);
  }

  mark(token) {
    this.token = token;
  }
}
