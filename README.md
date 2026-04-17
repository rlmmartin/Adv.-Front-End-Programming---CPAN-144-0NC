// Phase 2 readme file

Project overview
WordsMall is a application that allows curious users to roll
and get random words, see the definition of said word, and
also purchase and manage their favorate words that they coe
across in their cart system.

//Component Structure
Through phase 2, we used modular component archetecture to make
sure that our code is reuseable and that our code is clean

A. Layout and navigation
We have a wrapper component (layout.js) which makes sure that 
the navbar and footer stay consistent across all pages.
Navbar.js uses usePathname to ensure conditional styling
which is for the active links, based on what page the user is on

B. Modular Footer
Footer.js has the logic for the "back to the top" button.
FootLogo.js and FooterSocials.js can be described as sub- components that we had, for better organization

C. We have CardHeader, CardBody and CardFooter instead of one 
big file, for the WordCard, so that we can have better styling
and code updates




//Routes and navigation
Overall through our app, we wused file based routing
for example:
/ for home
/catalog which has the api generated words and a filted seach bar
/words/[id] which is dynamic and uses the useRouter hook whuch generates a profile page for every word




//State management
We have a global state management using the API react contect
CartContext is created in context/Cartcontext and provided in _app.js.
This permits any component like catalog or the cart page to acess and modify the cart array (adding or removing words)
Lastly as it relates to logic, it uses a useState hook to maintain the list of items and a .filter() method for removing items by the namr of the word



//Contributions for phase 2
Raymond: Dynamic routing 
Daniil: WordCard refactoring and search filtering logic
Jessica: Navbar active link logic and footer modularization
Samar: Global CartContext and "remove from cart" 
Azrael: Footer "back to top" button

// please see screenshots submitted on blackboard

