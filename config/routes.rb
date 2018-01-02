Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#index'
  resources :users, only: [:show, :index, :destroy, :edit]
  resources :exercises, only: [:show, :index]
  resources :workouts, only: [:show, :index, :destroy, :edit]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :exercises, only: [:index, :show, :create, :destroy] do
      end
    end
  end
end
