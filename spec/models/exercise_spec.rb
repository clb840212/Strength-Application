require 'rails_helper'

RSpec.describe Exercise, type: :model do
  it { should have_valid(:name).when('Bench Press') }
  it { should have_valid(:category).when('Chest') }
  it { should have_valid(:description).when('Lay down on bench with bar above chest') }
  it { should have_valid(:muscles).when('Pectoralis major') }
end
