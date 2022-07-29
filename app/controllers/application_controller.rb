class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  private

  def render_not_found(exception)
      render json: {error: "#{exception.model} not found"}, status: :not_found
  end

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end


  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  private
  def render_not_found(exception)
      render json: {error: “#{exception.model} not found”}, status: :not_found
  end
  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
