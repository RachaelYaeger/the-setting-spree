module Spree
  module Admin
    class SiteSettingsController < BaseController
      before_action :set_site_setting, only: [:edit, :update]

      def edit
      end

      def update
        respond_to do |format|
          if @site_setting.update(site_setting_params)
            format.html { redirect_to edit_admin_site_settings_url, notice: 'Site setting was successfully updated.' }
            format.json { render :show, status: :ok, location: @site_setting }
          else
            format.html { redirect_to edit_admin_site_settings_url, notice: @site_setting.errors.full_messages }
            format.json { render json: @site_setting.errors, status: :unprocessable_entity }
          end
        end
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_site_setting
          @site_setting = SiteSetting.first
        end

        # Never trust parameters from the scary internet, only allow the white list through.
        def site_setting_params
          params.require(:site_setting).permit(:intro_text, :banner_image, :studio_caption, :about_image, :about_caption, :about_text_left, :about_text_right)
        end
    end
  end
end
