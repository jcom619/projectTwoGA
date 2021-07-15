---
# PROJECT TWO - *joke a day*
an app to tell you a joke, signup and save you favorites
## SQL schema

![frame1](/readme_imgs/erd.png)

*Sprints:*

- Create basic navigation and layout
- Tie in API
- Create database tables
- Create register and login forms
- Define routes in server and move into controllers
- Make it pretty

*Stretch:*

- Create function to check if joke is already archived
- Implement add joke
- Create content restrictions for added jokes
- Add text API

```sql

   GET/

```

##### this one is pretty basic. A title, joke and a date stamp with a button to recieve a text message of daily jokes...this option will be an extended goal

![frame1](/readme_imgs/home.png)

```sql

   GET/login

```

- ## login

```sql

   POST/user/id

```

##### first page you should see is a login page with the option to click a button and sign up

![frame1](/readme_imgs/login.png)

### Unless this is not yet a user, in that case

```sql

   GET/users/new

```

- ## sign up

```sql

   POST/users

```

##### this is the sign up page that you are directed to if you so choose to click the sign up button from frame one. In the case that you made a mistake by clicking the sign up, there is a button to direct you back to login

![frame1](/readme_imgs/signup.png)

```sql

   GET/archive

```

- ## joke archive

##### A history of past funnies. mostly just an excuse to create a database

![frame1](/readme_imgs/archive.png)

## vote on a joke and/or save a joke?

```sql

   GET/favorites
   POST/favorites/joke_id
   PUT/???

```

- ## favorites

![frame1](/readme_imgs/favorites.png)

- ## logout

#####

![frame1](/readme_imgs/logout.png)
