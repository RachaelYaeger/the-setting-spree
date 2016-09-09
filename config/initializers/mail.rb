ActionMailer::Base.smtp_settings = {
  port:           587,
  address:        'smtp.mandrillapp.com',
  user_name:      ENV['MANDRILL_USERNAME'],
  password:       ENV['MANDRILL_API_KEY'],
  domain:         ENV['DOMAIN'],
  authentication: 'login',
  enable_starttls_auto: true
}
ActionMailer::Base.delivery_method = :smtp