class UsersController < ApplicationController
    def index
        render json: User.all
    end
    def show
        user = User.find(params[:id])
        render json: user, serializer: UserWithItemsSerializer
    end

end
