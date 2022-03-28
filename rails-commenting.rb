# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Naming convention of controllers in Rails favors pluralizations of the last word in the controller's name, using this convention allows you to use default route generators without needing to qualify each :path or :controller, also it helps with consistency with named routes. A controller is a Ruby class which inherits from ApplicationController and has methods like other classes. Upon request, the routing  will determine necessary controller and action to run, then Rails creates an instance of that controller and runs the method with the same name as the action.
class BlogPostsController < ApplicationController
  def index
    # ---2) The @posts = BlogPost.all tells Rails to search the posts table and store each row it finds in the @posts instance object.
    @posts = BlogPost.all
  end

  # ---3)The show method displays only further details on a single post. The show method's @post = BlogPost.find line tells Rails to find only the post that has the id defined in params [:id]
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)The new method will let Rails know that you will create a new object. This method will be called when you display a page to the user to take user input.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)Once you have taken user input it is time to create a record into the database. The 1st line creates a new instance variable called @post, that holds a blog object built from the data, the user submitted. The blog_post params method is used to collect all the fields from object :blogpost. The data was passed from the new method to create using the params object. The next line is a conditional statement that redirect the user to the post method if object is valid. If object is not valid, the user is sent back to the new method. The redirect_to method is similar to performing a meta refreshon a web page, meaning a user is automatically sent there.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)Note:this edit method is similar to the show method. Both methods are used to retieve a single object  based on its id and and display it on the a page. The only difference is this is used to modify. This method finds or displays data that needs to be modified by the user.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)This method will be called after edit method, when the user modifies a data and wants to update changes into database. The update method is similar to create method, and will be used to update existing position database
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)This second line redirect the user to @post method using a redirect_to call. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private method this is not accessible to outside of the class. A private method is defined by using a private keyword.
  private
  def blog_post_params
    # ---10)The blog_post_params method is used to collect all fields from objec :post. The data was passed from the new method to create using the params object.
    params.require(:blog_post).permit(:title, :content)
  end
end
