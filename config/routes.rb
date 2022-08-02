Rails.application.routes.draw do
  
  resources :items, only: [:index, :show, :update, :create, :destroy]
  resources :users, only: [:index, :show, :create]
  resources :garage_sales, only: [:index]
  post "/login", to: "sessions#create" 
  delete '/logout', to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
