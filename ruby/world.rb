class World
  def initialize(width, height)
    @grid = {}
    width.times do |column|
      height.times do |row|
        @grid[[column, row]] = :dead
      end
    end
  end

  def state(column, row)
    @grid[[column, row]]
  end

  def set_state(column, row, state)
    @grid[[column, row]] = state
  end

  def each
    @grid.each do |values|
      yield(values)
    end
  end
end
