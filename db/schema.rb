ActiveRecord::Schema.define(version: 2018_12_18_212747) do

  enable_extension "plpgsql"

  create_table "blogs", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.integer "claps"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
