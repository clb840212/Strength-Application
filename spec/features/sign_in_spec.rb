# Sign In tests
require 'rails_helper'

feature 'sign in', %{
  As a account holder
  I want to sign in
  So that I can gain access to my account
} do
  let!(:user) { FactoryBot.create(:user) }

  scenario 'specify valid email and password' do
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'Password'
    click_button 'Sign In'

    expect(page).to have_content('Welcome Back!')
    expect(page).to have_content('Sign Out')
  end

  scenario 'required information is not supplied' do
    visit new_user_session_path
    click_link 'Sign In'
    fill_in 'Email', with: 'nobody@gmail.com'
    fill_in 'Password', with: 'password'
    click_button 'Sign In'

    expect(page).to_not have_content('Welcome Back!')
    expect(page).to_not have_content('Sign Out')
    expect(page).to have_content('Invalid Email or password')
  end

  scenario 'an existing email with the wrong password is denied access' do
    visit new_user_session_path
    click_link 'Sign In'
    fill_in 'Email', with: user.email
    fill_in 'Password', with: 'incorrectPassword'
    click_button 'Sign In'
    expect(page).to_not have_content('Sign Out')
    expect(page).to have_content('Invalid Email or password')
  end

  scenario 'an already authenticated user cannot re-sign in' do
    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Sign In'
    expect(page).to have_content('Sign Out')
    expect(page).to_not have_content('Sign In')

    visit new_user_session_path

    expect(page).to have_content('You are already signed in.')
  end
end
