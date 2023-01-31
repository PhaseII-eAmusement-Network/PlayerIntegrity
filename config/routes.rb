Rails.application.routes.draw do
  devise_for :users
  # Main web pages
  root 'web#index'
end
