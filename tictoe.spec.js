describe("TicTacToe", function() {
  var ticTacToe;

  beforeEach(function() {
    ticTacToe = new TicTacToe();
  });

  it("should change the symbol each turn", function() {
    ticTacToe.takeTurn(1);
    expect(ticTacToe.symbol()).toEqual('O');
  });

  it("should change the symbol correctly for a bunch of turns", function() {
    ticTacToe.takeTurn(1);
    expect(ticTacToe.symbol()).toEqual('O');
    ticTacToe.takeTurn(2);
    expect(ticTacToe.symbol()).toEqual('X');
    ticTacToe.takeTurn(3);
    expect(ticTacToe.symbol()).toEqual('O');
    ticTacToe.takeTurn(4);
    expect(ticTacToe.symbol()).toEqual('X');
  });

  it("should find a winner for the top row when all X", function() {
    ticTacToe.setTurns(["X","X","X",0,0,0,0,0,0]);
    expect(ticTacToe.findWinner()).toBe(true);
  });

  it("should not find a winner for the top row when not all X", function() {
    expect(ticTacToe.findWinner()).toBe(false);
  });

  it("should find a winner for the second row", function() {
    ticTacToe.setTurns([0, 0, 0,"X","X","X", 0, 0, 0]);
    expect(ticTacToe.findWinner()).toBe(true);
  });

  it("should find a winner for the last row", function() {
    ticTacToe.setTurns([0, 0, 0, 0 ,0 ,0 , "X", "X", "X"]);
    expect(ticTacToe.findWinner()).toBe(true);
  });

  it("should find a winner for top left diagonal", function() {
    ticTacToe.setTurns(["X", 0, 0, 0 ,"X" ,0 , 0, 0, "X"]);
    expect(ticTacToe.findWinner()).toBe(true);
  });

  it("should find a winner for top right diagonal", function() {
    ticTacToe.setTurns([0, 0, "X", 0, "X" , 0 , "X", 0, 0]);
    expect(ticTacToe.findWinner()).toBe(true);
  });

  it("should find a win for 1st column", function() {
    ticTacToe.setTurns(["O", 0, 0, "O", 0 , 0 , "O", 0, 0]);
    expect(ticTacToe.findWinner()).toBe(true);
  });

  it("should find a win for 2nd column", function() {
    ticTacToe.setTurns([0, "O", 0, 0, "O" , 0 , 0, "O", 0]);
    expect(ticTacToe.findWinner()).toBe(true);
  });

  it("should find a win for 3rd column", function() {
    ticTacToe.setTurns([0, 0, "O", 0, 0 , "O", 0, 0, "O"]);
    expect(ticTacToe.findWinner()).toBe(true);
  });

})
