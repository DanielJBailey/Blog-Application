# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

20.times do
    Blog.create(
       title: Faker::Book.title,
       body: Faker::Lovecraft.paragraph + Faker::Lovecraft.paragraph + "\n\n" + Faker::Lovecraft.paragraph + Faker::Lovecraft.paragraph + "\n\n" + Faker::Lovecraft.paragraph + Faker::Lovecraft.paragraph + "\n\n" + Faker::Lovecraft.paragraph + Faker::Lovecraft.paragraph + "\n\n" + Faker::Lovecraft.paragraph + Faker::Lovecraft.paragraph + "\n\n" + Faker::Lovecraft.paragraph + Faker::Lovecraft.paragraph + "\n\n" + Faker::Lovecraft.paragraph + Faker::Lovecraft.paragraph + "\n\n" + Faker::Lovecraft.paragraph + Faker::Lovecraft.paragraph + "\n\n" + Faker::Lovecraft.paragraph + Faker::Lovecraft.paragraph + "\n\n" + Faker::Lovecraft.paragraph + Faker::Lovecraft.paragraph + "\n\n",
       claps: Faker::Number.between(0, 1000)
    )
end
puts "successfully seeded"
