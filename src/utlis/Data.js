import { FaReact, FaNode, FaCss3Alt, FaHtml5, FaBootstrap } from 'react-icons/fa';
import { 
    SiJavascript, SiMongodb, SiMongoose, SiFirebase, 
    SiPython, SiPostgresql, SiMysql, SiPostman, 
    SiRedis, SiRedux, SiExpress, SiVisualstudio, 
    SiGit, SiGithub, SiAndroid, SiPytorch, 
    SiTensorflow, SiReactquery, SiTypescript, SiTailwindcss, 
    SiJsonwebtokens, SiStyledcomponents, SiAntdesign } from 'react-icons/si'
import { DiJava } from 'react-icons/di'

import { TbBrandCSharp, TbBrandCpp, TbBrandCoinbase } from 'react-icons/tb'

import Project1 from '../assets/projects/Project1.png';
import Project2 from '../assets/projects/Project2.png';
import Project3 from '../assets/projects/Project3.png';
import Project4 from '../assets/projects/Project4.png';
import Project5 from '../assets/projects/Project5.png';
import Project6 from '../assets/projects/Project6.png';
import Project7 from '../assets/projects/Project7.png';
import Project8 from '../assets/projects/Project8.png';
import Project9 from '../assets/projects/Project9.png';
import Project10 from '../assets/projects/Project10.png';
import Project11 from '../assets/projects/Project11.png';
import Project12 from '../assets/projects/Project12.png';
import Project13 from '../assets/projects/Project13.png';
import Project14 from '../assets/projects/Project14.png';
import Project15 from '../assets/projects/Project15.png';
import Project16 from '../assets/projects/Project16.png';
import Project17 from '../assets/projects/Project17.png';
import Project18 from '../assets/projects/Project18.png';
import Project19 from '../assets/projects/Project19.png';
import Project20 from '../assets/projects/Project20.png';
import Project21 from '../assets/projects/Project21.png';
import Project22 from '../assets/projects/Project22.png';
import Project23 from '../assets/projects/Project23.png';
import Project24 from '../assets/projects/Project24.png';
import Project25 from '../assets/projects/Project25.png';
import Project26 from '../assets/projects/Project26.png';
import Project27 from '../assets/projects/Project27.png';



export const Skills = [
    {id: 0, tech: 'C', icon: <TbBrandCoinbase/> },
    {id: 1, tech: 'C++', icon: <TbBrandCpp/> },
    {id: 2, tech: 'C#', icon: <TbBrandCSharp/> },
    {id: 3, tech: 'JAVA', icon: <DiJava/> },
    {id: 4, tech: 'Python', icon: <SiPython/> },
    {id: 5, tech: 'JavaScript', icon: <SiJavascript/> },
    {id: 6, tech: 'TypeScript', icon: <SiTypescript/> },
    {id: 7, tech: 'MySQL', icon: <SiMysql/> },
    {id: 8, tech: 'PostgreSQL', icon: <SiPostgresql/> },
    {id: 9, tech: 'MongoDB', icon: <SiMongodb/> },
    {id: 10, tech: 'Mongoose', icon: <SiMongoose/> },
    {id: 11, tech: 'Firebase', icon: <SiFirebase/> },
    {id: 12, tech: 'Postman', icon: <SiPostman/> },
    {id: 13, tech: 'Redis', icon: <SiRedis/> },
    {id: 14, tech: 'HTML', icon: <FaHtml5/> },
    {id: 15, tech: 'CSS', icon: <FaCss3Alt/> },
    {id: 16, tech: 'Tailwind CSS', icon: <SiTailwindcss/> },
    {id: 17, tech: 'Bootstrap', icon: <FaBootstrap/> },
    {id: 18, tech: 'Express JS', icon: <SiExpress/> },
    {id: 19, tech: 'React JS', icon: <FaReact/> },
    {id: 20, tech: 'Redux', icon: <SiRedux/> },
    {id: 21, tech: 'React Query', icon: <SiReactquery/> },
    {id: 22, tech: 'Styled Components', icon: <SiStyledcomponents/> },
    {id: 23, tech: 'Ant Design', icon: <SiAntdesign/> },
    {id: 24, tech: 'Node JS', icon: <FaNode/> },
    {id: 25, tech: 'JSON Web Token', icon: <SiJsonwebtokens/> },  
    {id: 26, tech: 'Android', icon: <SiAndroid/> },
    {id: 27, tech: 'Pytorch', icon: <SiPytorch/> },
    {id: 28, tech: 'TensorFlow', icon: <SiTensorflow/> },
    {id: 29, tech: 'Git', icon: <SiGit/> },
    {id: 30, tech: 'Github', icon: <SiGithub/> },
    {id: 31, tech: 'Visual Studio', icon: <SiVisualstudio/> }    
]

export const Projects =[
    { id:1, name: "Spotify Ninja Player", desc: "Pure HTML, CSS, and Responsive design of Spotify alike static website", techStacks: [ "HTML", "CSS" ], img: Project1, url: "https://spotify-ninja.netlify.app/", reverse: false },

    { id:2, name: "Github Users App", desc: "Github Users Web App using React", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project2, url: "https://github-users-api-react-app.netlify.app/", reverse: true },

    { id:3, name: "Birthday Reminder App", desc: "In this project, we have a list of birthdays and upon the top, we have the text that tells how long is the list. Each and every person has the image, the text, and as well as how old they are. At the bottom we have the clear button which is used to clear the list.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project3, url: "https://birthday-reminder-react-app-anubhav.netlify.app/", reverse: false },

    { id:4, name: "Accordion Project", desc: "We have a list of questions. We can toggle the answers. Toggling will also change the icon of the toggle button.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project4, url: "https://accordion-react-web-app.netlify.app/", reverse: true },

    { id:5, name: "Amazon Most Selling Books App", desc: "Amazon Most Selling Books app using React", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project5, url: "https://amazon-most-selling-books-react-web-app.netlify.app/", reverse: false },

    { id:6, name: "Grocery Bud Project", desc: "We have a form using which we can add the grocery items. For each item, we edit the item button and remove the item button. Once we have grocery items on the list we can edit or remove the item using the edit and remove buttons. We also have a clear button using which we can clear the whole list.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project6, url: "https://react-grocery-web.netlify.app/", reverse: true },

    { id:7, name: "Navbar Project", desc: "We have the navbar. When we make the screen size smaller, we can toggle the length of navbar.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project7, url: "https://react-navbar-web.netlify.app/", reverse: false },

    { id:8, name: "Stripe Submenus Sidebar Project", desc: "Stripe Submenus Sidebar Project made using react", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project8, url: "https://stripe-submenus-sidebar.netlify.app/", reverse: true },

    { id:9, name: "Cocktails Project", desc: "We will fetch cocktail data from an API and display them nicely in the cards. We are also implementing react router dom, so we have a separate page for each cocktail that gives more details about the particular cocktail. We have also set up search functionality where if we start typing it will refresh our cocktails' home page.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project9, url: "https://cocktails-react-web.netlify.app/", reverse: false },

    { id:10, name: "Github Users Pagination Project", desc: "We will fetch Github followers' data from an external API. We will paginate that data.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project10, url: "https://github-users-pagination-react-web.netlify.app/", reverse: true },

    { id:11, name: "Dark Mode Project", desc: "Dark Mode Project made using react", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project11, url: "https://dark-mode-project-react-web.netlify.app/", reverse: false },

    { id:12, name: "Markdown Project", desc: "In this project, we type the plain text using the markdown syntax and in return, we get the HTML formatted text.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project12, url: "https://markdown-react-web-project.netlify.app/", reverse: true },

    { id:13, name: "Tours App", desc: "We are going to fetch tours data from an API. For every tour, we have an image, name of the tour, price of the tour, and options to read more and show less. Using the conditional rendering, we can toggle the description of the tour between read more and show less options. If we are not interested in the tour we can remove it. Once we remove all the tours, we can display no tours left text and refresh button. The refresh button can be used to refresh the list of tours.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project13, url: "https://tours-react-app-anubhav.netlify.app/", reverse: false },

    { id:14, name: "Reviews App", desc: "We have a list of reviews. we want to set up the functionality where users can navigate through the reviews whether that is forward or backward. We can also show the random review.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project14, url: "https://react-reviews-web-app.netlify.app/", reverse: true },

    { id:15, name: "Meals Menu Project", desc: "We have a list of menu items. we also have the buttons that allow us to filter the list. Filter buttons are added dynamically.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project15, url: "https://react-meals-menu-app.netlify.app/", reverse: false },

    { id:16, name: "Job Experience Project", desc: "We fetch the jobs data from an API. We have info about our previous and current job. Only one job gets displayed. We have buttons for each job. Once we click that button, the info of that specific job will be displayed.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project16, url: "https://job-experience-tabs-react-web.netlify.app/", reverse: true },

    { id:17, name: "Sidebar Modal Project", desc: "We have a sidebar and a modal. We can toggle the sidebar as well as the modal.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project17, url: "https://sidebar-modal-react-web.netlify.app/", reverse: false },

    { id:18, name: "Cart Project", desc: "We will fetch cart data from an API. We have the ability to increase or decrease the number of items in the cart. For each item, we have a remove button that removes the item from our cart. We also have the ability to clear the cart using a clear cart button.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project18, url: "https://react-web-cart.netlify.app/", reverse: true },

    { id:19, name: "Generate Random Person Project", desc: "We will fetch user data from an API and generate a random user. We will showcase the specific info about the user. We have a random user button. If we want another random user, we can click it.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project19, url: "https://generate-random-person-react-web.netlify.app/", reverse: false },

    { id:20, name: "Stock Photos Project", desc: "We will fetch stock photos data from unsplash using an external API. Once we load the images, we get some images but as we keep on scrolling, we keep on getting more images. So relatively we create the infinite scroll functionality. We also have a search bar where we can search specific types of images.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project27, url: "https://stock-photos-react-web-project.netlify.app/", reverse: true },

    { id:21, name: "OMDb API Search Movies", desc: "We will fetch movies data from omDB using an external API. Once we load the movies, we get some movies. We also have a search bar where we can search for a specific movie.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project20, url: "https://omdb-movies-api.netlify.app/", reverse: false },

    { id:22, name: "Search Hacker News Project", desc: "We will fetch news data from an external API. We have a search form to fetch stories that reference the search form input. For each story, we have a remove button that is used to remove the story from UI and a read more link that is used to navigate that specific story. We also have implemented server-side pagination. for this, we have the next and the previous buttons and when we click on these buttons, we fetch a new page from the server again.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project21, url: "https://hacker-news-search-react-web.netlify.app/", reverse: true },

    { id:23, name: "Quiz React App", desc: "We will fetch quiz data from an external API. We set up the quiz and answers the questions. Initially, we can pick the number of questions, category of questions, and difficulty level of the questions to start the quiz.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project22, url: "https://quiz-react-web.netlify.app/", reverse: false },

    { id:24, name: "Search Github Users", desc: "This app allows visitors to search Github users and display data on UI. Data is dynamically fetched from an API and displayed using professional fusion charts. For, sign-up and login, this app uses Auth0 which includes Google and Twitter authentication. This app also tracks the number of requests the visitor still has. By default, it is 60 requests per hour. If the limit of requests exceeds, this app also makes sure that a visitor can not do any more searches.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project23, url: "https://react-web-search-github-users.netlify.app/", reverse: true },

    { id:25, name: "My Blogs App", desc: "In this app blogs are fetched from some api and as we keep scrolling, this app shows us more and more blogs. We can also filter the search results using the search input.", techStacks: [ "HTML", "CSS", "REACT JS" ], img: Project24, url: "https://blogs-and-filter-blogs-with-inifinite-loop-app.netlify.app/", reverse: false },

    { id:26, name: "Music Player App", desc: "This app is made using pure HTML, CSS and Javascript", techStacks: [ "HTML", "CSS", "JavaScript" ], img: Project25, url: "https://music-player-app-javascript.netlify.app/", reverse: true },

    { id:27, name: "Landing Page App", desc: "This app implements the modal and slider functionality. This app is made using ReactJS.", techStacks: [ "HTML", "CSS" ], img: Project26, url: "https://modal-slider-app-javascript.netlify.app/", reverse: false }

]

export const ProjectIcon = "https://files.codingninjas.in/group-2950-7879.svg";

export const NavLinks = [
    {id: 1, name: "Home", href: "#Home" },
    {id: 2, name: "My Skills", href: "#Skills" },
    {id: 3, name: "My Projects", href: "#Projects" },
    {id: 4, name: "Contact Me", href: "#Contact" }
]