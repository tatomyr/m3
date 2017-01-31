class M3 extends Array {
  constructor(matrix = 3) {
    super();

    if (typeof matrix === 'object') {
      matrix.forEach((item, i) => this[i] = item);
    }

    if (typeof matrix === 'number') {
      Array(matrix).fill().forEach((_, i) =>
        this[i] = Array(matrix).fill().map((_, j) =>
          j === i && 1 || 0
        )
      );
    }
  }

  multiply(rightMatrix) {
    return this.map((row) =>
      row.map((_, j) =>
        row.reduce((sum, item, k) => sum + item * rightMatrix[k][j], 0)
      )
    );
  }
}

module.exports = M3;
