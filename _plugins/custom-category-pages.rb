# # If category is with blog...
# if self.categories[index.data['category']].select { |post| post.categories[0] == 'blog' }.length != 0

#   # Specify a unique folder for /categories based on post type. In this case, /blog/categories
#   target_dir = '/' + GenerateCategories.category_dir(self.config['category_blog_dir'], category)
 
#   # Use a unique layout file for this post type. In this case, blog-post.html
#   index = CategoryIndex.new(self, self.source, target_dir, category, 'blog.html')

#   # Add category page to queue for export
#   if index.render?
#     self.pages << index
#   end       

# end