# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create(
 first_name: "christina",
 last_name: "beauregard",
 email:"christina123@gmail.com",
 user_name: "christinab",
 password: "passwordchristina"
)


#
# exercises = HTTParty.get('https://wger.de/api/v2/exerciseinfo/?language=2&limit=500')
#
# Exercise.destroy_all
#
# exercises.parsed_response["results"].each do |exercise|
#   Exercise.create(
#     name: exercise['name'],
#     category: exercise['category']['name'],
#     equipment: exercise['equipment'],
#     description: exercise['description'],
#     muscles: exercise['muscles']
#   )
# end
Exercise.create(
name: 'hamstring curl',
category: 'legs,lower body',
equipment: 'hamstring machine',
description: 'lay down lift legs',
muscles: 'hamstring'

)
#
# exercise_images = HTTParty.get('https://wger.de/api/v2/exerciseimage/?is_main=True')
