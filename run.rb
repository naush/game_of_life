require_relative 'game'

game = Game.new(20, 20, [])
game.world.each do |(column, row), state|
  state = [:dead, :dead, :dead, :dead, :live].sample
  game.world.set_state(column, row, state)
end
seed = game.world

150.times do
  system "clear"
  game.width.times do |column|
    game.height.times do |row|
      if game.world.state(column, row) == :dead
        print ' '
      else
        print '@'
      end
    end
    print "\n"
  end
  print "\n"
  game.tick
  sleep 0.1
end
