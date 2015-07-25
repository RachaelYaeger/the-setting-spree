# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Spree::Core::Engine.load_seed if defined?(Spree::Core)
Spree::Auth::Engine.load_seed if defined?(Spree::Auth)

SiteSetting.create(
  intro_text: "The Setting is a curated destination to explore &amp; purchase accents for the spaces in which we live, work, eat and entertain. To us, there is nothing more important than spending time with the people who matter most and no better way to do so than over a beautifully created setting.",
  studio_caption: "Our studio includes a test kitchen bustling with freshly baked goods and special fare for our private events, appointments, and spontaneous gatherings.",
  about_caption: "The Setting is the backdrop and the foundation of every experience",
  about_text_left: "The Setting is inspired by the memories shared while entertaining friends and family at home.",
  about_text_right: "Located in Soho, New York, The Setting’s studio hosts intimate gatherings to celebrate unique experiences alongside our one of a kind products."
)