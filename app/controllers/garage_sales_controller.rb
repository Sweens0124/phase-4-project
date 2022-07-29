class GarageSalesController < ApplicationController

    def show
       garageSale = GarageSale.find(params[:id])
       render json: garageSale
    end
end
