require_relative 'world'

class Game
  attr_reader :width
  attr_reader :height
  attr_reader :world

  def initialize(width, height, seed)
    @width = width
    @height = height
    @world = World.new(width, height)

    seed.each do |column, row|
      @world.set_state(column, row, :live)
    end
  end

  def tick
    new_world = World.new(@width, @height)
    @world.each do |(column, row), current_state|
      new_state = state([column, row], current_state)
      new_world.set_state(column, row, new_state)
    end
    @world = new_world
  end

  def state(cell, current_state)
    count = live_neighbors_count(cell)
    return current_state if count == 2
    return :live if count == 3
    return :dead
  end

  def live_neighbors_count(cell)
    column, row = cell
    column_min = [column - 1, 0].max
    column_max = [column + 1, @width].min
    row_min = [row - 1, 0].max
    row_max = [row + 1, @height].min

    count = 0
    (column_min..column_max).each do |column|
      (row_min..row_max).each do |row|
        next if [column, row] == cell
        count = count + 1 if @world.state(column, row) == :live
      end
    end
    count
  end
end
