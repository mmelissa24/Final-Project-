# CS208 Full Stack Final Project

Name: Melissa Valencia
GitHub: https://github.com/mmelissa24/Final-Project-
Term: Spring 2026
# Downtown Donuts Wbsite

## Setup Instructions

This project is a full stack website for a donut shop called Downtown Donuts. The site has a home page, menu page, About Us page, comments page, and an error page. It was built using the starter Express project. I added my own pages, styling, routes, and comment features.

To run the project:

1. clone the repository from GitHub.---> https://github.com/mmelissa24/Final-Project-
2. Open a terminal 
3. Navigate into the Final-Project folder
4. Start MariaDB database serivce.(If already installed) ---> sudo serive mariadb start 
5. Install the dependencies.---> npm install
6. Start the project. ---> npm start
7. Open the site in a browser

This project uses Express, Pug, CSS, javaScript, and a database for the comments.

DESIGN DECISIONS: 

One design choice I made was using the brand colors throughout the site. I used dark green, saffron yellow, and seasalt so the pages would look like they belonged to the same business. I also used CSS variables for the colors because it made the stylesheet easier to manage. 

Another choice I made was using dark green cards for the menu items and some of the content sections. I wanted the cards to stand out from the light background, and I thought the dark green with the yellow border matched the Downtown Donuts theme well.

I also kept the navigation simple. The header has links for Home, Menu, About Us, and Comments. I did  this because those were the main required pages, and I wanted users to be able to get to each page easily.

For the comments page, I used labels for the name and comment fields, I also added focus styles so it is easier to see when someone is tabbing through the page with a keyboard.

I added a small JavaScript feature for the comment form too. When someone submits a comment, the submit button changes to "Submiting..." and becomes disabled. I added this so users would know the form was working and so they would not accidentally submit the same comment more than once.

Another design decision I made was to make important action buttons larger and more noticeable. The Submit Comment, Load More, Order Onine, and View full Menu Pdf buttons were styled in yellow so they stand out from the rest of the page content. I wanted users to immediately know where to click when they want to interact with the site, leave a comment, place an order, or view the full menu. Making these buttons bigger and brighter helps guide the user's attention and makes the website easier to use.

EDGE CASES:

For the comments form, I handled the case where someone tries to submit the form without a name or without a comment. If one of those fields is missing, the page shows an error message instead of saving the comment.

I also added length limits. The name has to be 100 characters or fewer and the comment has to be 500 characters or fewer. I did this so someone cannot submit and extremely long name or comment.

I sanitized the user input before saving it. This was important because users could type characters that might be treated like HTML. Sanitizing the input helps keep the comments safer.

I also added a database error handling. If the comments cannot load or save correctly, the app sends an error response instead of just crashing.

Fo a pagination, I used a limit on the comments page. If the limit is too low, it resets to 10. The page also checks if there are more comments and shows a load more link when there are more to display.

The project also has an error page so the user has somewhere to go if something goes wrong.

CHALLENGES & LEARNINGS:

One challenge I had was figuring out the right layout for the website. I had to try different section placements and make changes until the page looked more organized and easy to follow. 

The sanitizing section was also a little challenging because I couldn't remember what code I needed to use to make sure comments were treated as text instead of being run as code. Eventually I was able to figure it out but It was definitely one of the most challenging parts of the project. I blame the lack of sleep. 

I also realized that being creative with design is not always easy for me because I am not the most artistic perosn. This project helped me get more practice with layout, organization, and making design decisions for a real website.

CITATIONS:
CS-208: Introduction to Full Stack Web Development." Zybooks, 2026

DataCamp. "Introduction to Relational Databases in SQL." 

Brown, Ethan. "Web Development with Node and Express: Leveraging the JavaScript stack". 2nd ed., O'Reilly Media, 2019.

Wexler, Jonathan. "Get Programming with Node.js". Manning, 2019.

Frain, Ben. "Responsive Web Design with HTML5 and CSS". 4th ed., Packet Publishing, 2022.

Matuzic, Manuel. "Web Accessibility CookBook: Creating Inclusive Experience". O'Reilly Media, 2024.

Pickering, Heydon. "Inclusive Design Patterns". Smashing Magazine GmbH, 2016.

