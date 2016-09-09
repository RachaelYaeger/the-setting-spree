# ActionMailer::Base.smtp_settings = {
#   port:           587,
#   address:        'smtp.mandrillapp.com',
#   user_name:      ENV['MANDRILL_USERNAME'],
#   password:       ENV['MANDRILL_API_KEY'],
#   domain:         ENV['DOMAIN'],
#   authentication: 'login',
#   enable_starttls_auto: true
# }
# ActionMailer::Base.delivery_method = :smtp


Rails.application.configure do
  config.action_mailer.smtp_settings = {
    :address        => 'smtp.sendgrid.net',
    :port           => '587',
    :authentication => :plain,
    :user_name      => ENV['SENDGRID_USERNAME'],
    :password       => ENV['SENDGRID_PASSWORD'],
    :domain         => 'heroku.com',
    :enable_starttls_auto => true
  }
}
