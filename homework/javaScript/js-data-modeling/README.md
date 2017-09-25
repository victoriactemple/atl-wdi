[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

1. What does the app have:

User:
Username
Legal Name
Password
Date of Birth


Various Email Providers:
Gmail 
  -email address
  -password
Hotmail
  -email address
  -password
AOL
  -email address
  -password


Inbox:
Emails in date received order
Date displayed
Name of Email Provider displayed at top for easy identification

2. Data as Schema

const InboxSchema = new Schema {
  name of Email Provider: string,
  email: String,
  date received: String,

}

const EmailProvidersSchema = new Schema {
  provider: String,

  email addresss:{
    type: String,
  } 
  password: String,
  inbox: [InboxSchema]
}

const UserSchema = new Schema {
  username: {
    type: String, 
    unique: true,
  }
  first name: String,
  last name: String
  password: String,
  DOB: String,
  email provider 1: [EmailProvidersSchema]
  email provider 2: [EmailProvidersSchema]
  email provider 3: [EmailProvidersSchema]
}


3. Relationship of the model 


const EmailApp =  {
  username: {
    type: victoriactemple, 
    unique: true,
  }
  first name: victoria,
  last name: temple
  password: *^#,
  DOB: 2/27/89,
  email provider 1: {
 name of Email Provider: Gmail,
  email: victoriactemple@gmail.omc,
  date received: today,
  } 

}

-User has a signed in with the app specific log in, then have access to view one of their 3 or however many email address inboxes. Each inbox will display a unique inbox containing the emails for that specific inbox.  





### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.


1. What does the app have 

radio stations: 
songs - artist - album - rating(* Star Rating)
playlists
genre indicator
user-influenced popularity/rating
sponsors/celebrity endorsement 


2. Data as Schema

const songDetails = newSchema {
  artist: String,
  title: String,
  duration: Number,
  rating: String,
}

const radioStation = new Schema {
  station name: {
  type: String,
  unique: true
  }
  genre: String,
  song: [songDetails],
  rating: String,

}


3. Relationship of the modal:

const exampleRadio = {
  name: "Grassroots",
  genre: "Folk", 
  rating: "4 Stars"
  song: [{
    artist: "Father John Misty",
    title: "Now I'm Leaning",
    duration: 4:16,
    rating: "3 Stars"
  }]
}

Through random or another algorithm matching various styles or reurring bandmembers, the radio station will be compiled with a list of songs including song details and artist details. 



### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

1. What does the app have: 

artists
tour dates - built in calendar to display next shows
tickets:
price
where to buy


2. Schema


const ConcertCalendar = new Schema {
  date: String,
  location: String,
  venue: String
  time: Number,
  ticket price: Number,
  ticket seller: String,
}

const Favorite Bands = new Schema {
  bandname: String,
  albums: ["String"]
  touring schedule: [ConcertCalendar]
}


3. Relationship

const concertApp = {
  bandname: Cactus Blossoms,
  albums: ["Catcus Blossoms"]
  touring schedule: [{
    date: 9/18/17
    location: "Atlanta", 
    venue: "Eddie's Attic",
    time: 9,
    ticket price: 10,
    ticket seller: "TicketFly"
  }]
}



### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.

1. What does the app have                                                                                                                                                                                                                                                 

CoffeShops by location
Menu
Drinks, price, description, 
Cart - check out option


2. Data as Schema: 

const Menu = new Schema {
  item: String,
  item-id: Number, 
  price: Number,
  description: String, 
}

const Coffee Shop = new Schema {
  name: String,
  geo-location: Number, 
  menu: [Menu]
}

const Cart = new Schema{
  item: String, 
  quantity: Number, 
  price-with-tax: Number,
  order id: Number, 
}

3. Relationship

const Coffee-To-Go {
  CoffeeShop {
    name: "JavaVino",
    geo-location: 33.7701° N, 84.3523° W,
        menu {
        item: "Batty Breve",
        item-id: 7, 
        price: 4.43,
        description: "Like or hazelnut latte, but with half and half instead of milk, 
        }
  }
  cart: {
    item: "Batty Breve",
    quantity: 1,
    price-with-tax: 4.50,
    order id: 62529
  }
}


The usercan sort through various CoffeeShops and their specific menus...I think I got a little confused in my own thought process of howadding things to the cart would go..there's definitely some duplication here. 


### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

1. What the App will have:
Various Teams
Roster of Players
Team Schedule
Team stats
Team Placement/rank among other teams



2. Data as Schema

const Roster = new Schema {
  player-name: String,
  player-number: Number,
  batting-average: Number,
  age: Number,
  other-stats: [{}]  
}
const Schedule = new Schema {
  date: Number,
  playing against: String,
  location: String,
  score: Number,
}

const Team = new Schema {
  name: String,
  players [{Roster}]
  scheudle: [{Schedule}]
  current-game: {
    score: number,
  }
}

3. Relationships

const AtBat = {
  Team {
  name: Braves
  players: 
      [Roster{
      player-name: "Rex-Brothers",
      player-name: 57,
      bating-average: 7.29,
      age: 29,
      other-stats: [{}]
      }]      

schedule: [{
      date: 9/25,
      playing against: "NY Mets",
      location: "Home/Atlanta",
      score: 8-2,
}]
current-game[{
    score: 8-2,
}]

}


Looked to the AtBat App and tried to work back from it - there's a lot of way to set this up, but looking at the main screen, I can click on the players and see all the embedded details there, and then I can also see the calendar and current games from the main view. 

### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

I kept thinking about how everything is very interconnected or embedded. I think I began going into a bit of a rabbit whole when displaying the relationships, but reminding myself to go back to the main view was helpful and see which one of these items was the parent and which the child helped. 



### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add your Github link to Schoology along with your name and you comfort level with the homework.
