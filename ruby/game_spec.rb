require_relative 'game'

describe Game do
  context 'first generation' do
    it 'creates a new world' do
      game = Game.new(1, 1, [])
      game.world.state(0, 0).should == :dead
    end

    it 'seeds the world' do
      game = Game.new(1, 1, [[0, 0]])
      game.world.state(0, 0).should == :live
    end
  end

  context 'rules' do
    it 'is dead cell if has zero live neighbor' do
      game = Game.new(1, 1, [[0, 0]])
      game.tick
      game.world.state(0, 0).should == :dead
    end

    it 'is dead cell if only has one live neighbor' do
      game = Game.new(2, 2, [[0, 0], [0, 1]])
      game.tick
      game.world.state(0, 0).should == :dead
    end

    it 'is live cell if has two live neighbors' do
      game = Game.new(2, 2, [[0, 0], [0, 1], [1, 0]])
      game.tick
      game.world.state(0, 0).should == :live
    end

    it 'is live cell if has three live neighbors' do
      game = Game.new(2, 2, [[0, 0], [0, 1], [1, 0], [1, 1]])
      game.tick
      game.world.state(0, 0).should == :live
    end

    it 'is live cell if has more than three live neighbors' do
      game = Game.new(3, 3, [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0]])
      game.tick
      game.world.state(1, 1).should == :dead
    end

    it 'revives a dead cell if surrounded by three live neighbors' do
      game = Game.new(2, 2, [])
      game.world.set_state(0, 0, :dead)
      game.world.set_state(0, 1, :live)
      game.world.set_state(1, 0, :live)
      game.world.set_state(1, 1, :live)
      game.tick
      game.world.state(0, 0).should == :live
    end
  end

  context 'live_neighbors_count' do
    it 'has no live neighbors' do
      game = Game.new(1, 1, [[0, 0]])
      game.live_neighbors_count([0, 0]).should == 0
    end

    it 'has one live neighbor' do
      game = Game.new(2, 2, [[0, 0], [0, 1]])
      game.live_neighbors_count([0, 0]).should == 1
    end

    it 'has two live neighbors' do
      game = Game.new(2, 2, [[0, 0], [0, 1], [1, 0]])
      game.live_neighbors_count([0, 0]).should == 2
    end
  end
end
