# def write_category_indexes
#   if self.layouts.key? 'blog-post'
#     self.categories.keys.each do |category|
#       next if RESTRICTED_CATEGORIES.include? category
#       self.write_category_index(category)
#     end
 
#   # Throw an exception if the layout couldn't be found.
#   else
#     throw "No 'category_index' layout found."
#   end
# end