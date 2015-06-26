Spree::OrdersController.class_eval do
  before_filter :check_for_duplicate_product, :only => :populate

  def update
    if @order.contents.update_cart(order_params)
      respond_with(@order) do |format|
        format.html do
          if params.has_key?(:checkout)
            @order.next if @order.cart?
            redirect_to checkout_state_path(@order.checkout_steps.first)
          else
            # Redirects to home page. Required as mobile goes to cart path
            redirect_to '/'
          end
        end
      end
    else
      respond_with(@order)
    end
  end

  # Adds a new item to the order (creating a new order if none already exists)   
  def populate   
    order    = current_order(create_order_if_necessary: true)    
    variant  = Spree::Variant.find(params[:variant_id])    
    quantity = params[:quantity].to_i    
    options  = (params[:options] || {}).merge(currency: current_currency)    
 
    # 2,147,483,647 is crazy. See issue #2695.   
    if quantity.between?(1, 2_147_483_647)   
      begin    
        order.contents.add(variant, quantity, options)   
      rescue ActiveRecord::RecordInvalid => e    
        error = e.record.errors.full_messages.join(", ")   
      end    
    else   
      error = Spree.t(:please_enter_reasonable_quantity)   
    end    
 
    if error   
      flash[:error] = error    
      redirect_back_or_default(spree.root_path)    
    else   
      respond_with(order) do |format|  
        # Redirects to home page. Required as mobile goes to cart path 
        format.html { redirect_to "/" }    
      end    
    end    
  end    
 
  def empty    
    if @order = current_order    
      @order.empty!    
    end    
    # Redirects to home page. Required as mobile goes to cart path
    redirect_to "/"    
  end

  def check_for_duplicate_product
    p "check_for_duplicate_product..."
  end
end
