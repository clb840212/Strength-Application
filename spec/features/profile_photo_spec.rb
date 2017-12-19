# Add pic tests
require 'rails_helper'

feature 'upload profile photo' do
  let!(:user) { FactoryBot.create(:user) }

  scenario 'user uploads profile picture' do
    visit user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'Password'
    click_button 'Sign In'
    visit edit_user_registration_path
    fill_in 'Current password', with: 'Password'
    attach_file 'Profile Photo', "#{Rails.root}/spec/support/images/default_pic.jpeg"
    click_button 'Update'

    expect(page).to have_content('Your account has been updated successfully.')
  end
end
