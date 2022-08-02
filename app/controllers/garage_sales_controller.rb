class GarageSalesController < ApplicationController

    def index
       garageSale = GarageSale.all
       render json: garageSale
    end
end
