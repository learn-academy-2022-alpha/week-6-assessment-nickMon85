# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: Make an foreign key to the column student_id, reference the id colulmn from the table points

  Researched answer:Best answer I could find! 
  1. place has_many:orders in the Persons model, and belongs_to :person in the Order model.
  2. Generate a new migration, e.g. rails g migration migrationName
  
  (best guess!) 
  add_foreign_key :orders, :person

2. Which RESTful routes must always be passed params? Why?

  Your answer:All the CRUD action must be passed through params. REST= Representation State Transfer. RESTful routing allow developers to keep things simple and consistent for other developers or users to use.

  Researched answer: first what is Rest? Representational State Transfer, boils down to two main principles for our purposes: 
  1. Using resource identifiers
  2. Tranferring representations of the state of that resource between system components. 



3. Name three rails generator commands. What is created by each?

  Your answer: Rails generate Model. This allows us to make a schema or a table.
  Rails generate Migration, which give you a model field for the user table 
  Rails generat controller which gives you actions and some routes.

  Researched answer:Rails generate Model is a Ruby class that can add database records, find particular data you're looking for, update that data, or remove data. Rail generate Migration is a tool for changing an application's database schema. Rails generat controller which gives you actions and some routes.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?
@student.all Retrieve a resource index, search a table
action: "GET"    location: /students          

@student= studednt.find(params[:id]), a single student or criteria
action: "POST"   location: /students       

def new
@student = student.new
creating a new student object or student in database
action: "GET"    location: /students/new

def create 
@student = student.create(student_params)
a new instance variable has been created in the database
action: "GET"    location: /students/2  

def edit 
@student = student.find(params[:id])
This allows you to modify data that needs to be changed.
action: "GET"    location: /students/2/edit    

def update
@students = student.find(params[:id])
@student.update(student_params)
called after edit, it allow update to database. 
action: "PATCH"  location: /students/2      

def destroy
@student = student.find(params[:id])
@student.destroy
this delets the student object! That was created.
action: "DELETE" location: /students/2      



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
1.)As a User, I would like to see my private to do list. 
2.)As a User, I would like to see a calender due dates for my to do list.
3.)As a User, I would like to have a finished or done button, for once an item is accomplished
4.)As a User, I would like to have an option of a reminder.
5.) As a User, I would like to hold the list of finished items or delate.
6.)As a User, I would like to organize the list in level of importance. Maybe color code!
7.)As a User, I would like to organize a list as either routine or event.
8.)As a User, I would like to edit or update 
9.)As a User, I would like to add a list on an item for any necessary tools or equipment.
10.)As a User, I would like a small happy sound or song if everything has been accomplished.
