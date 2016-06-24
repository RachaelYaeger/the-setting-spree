class InquiryMailer < ApplicationMailer
  require 'mandrill'

  def new_inquiry(inquiry)
    m = Mandrill::API.new ENV['MANDRILL_API_KEY']
    message = {
      subject: "The Setting: New Inquiry from #{inquiry.name}",
      from_email: 'amanda@thesettingnyc.com',
      from_name: 'Amanda Shine',
      to: [
        {
          email: 'amanda@thesettingnyc.com',
          name: 'Amanda Shine'
        }
      ],
      html: "<html>
              <p>From: #{inquiry.name}</p>
              <p>Email: #{inquiry.email}</p>
              <p>Date: #{inquiry.datetime}</p>
              <p>Budget: #{inquiry.budget}</p>
              <p>Customer Type: #{inquiry.customer_type}</p>
              <p>Message: #{inquiry.message}</p>
            </html>"
    }
    sending = m.messages.send message
  end
end
