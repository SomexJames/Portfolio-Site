import P1BG from "../assets/p1bg.png";
import P2BG from "../assets/p2bg.png";
import P3BG from "../assets/p3bg.png";
import P4BG from "../assets/p4bg.png";
import P5BG from "../assets/p5bg.png";


const main = {
    name: "Brandon Kang",
    description: "Student at The University of Texas at Dallas",
    resume: "https://drive.google.com/drive/folders/1EA8Q90x39-hhLDh8QMd3e0qZAhSI2iY3?usp=sharing"
};


const projects = [
    {
        id: 1,
        title: "Tesla Site Clone",
        background: P1BG,
        description: "A clone of Tesla's official website, Tesla.com.",
        bullets: ["HTML5", "CSS3", "ReactJS", "Working Sidemenu", "Working Navbar", "Smooth Scrolling", "Up-to-date Impact Report", "Git Version Control"],
        live: "https://somexjames.github.io/tesla-site-project",
        github: "https://github.com/SomexJames/tesla-site-project",
        presentation: false,
        ext: ""
    },
    {
        id: 2,
        title: "3x3 Monte Dapp",
        background: P2BG,
        description: "A ReactJS App that connects to an Ethereum test network using a custom ERC20-standard token as the game's in-game currency.",
        bullets: ["ReactJS", "Solidity", "Decentralized App", "Connected to an Ethereum Test Network", "ERC20 Token", "HTML5", "CSS3", "Custom Hooks"],
        live: "https://somexjames.github.io/3x3-monte-dapp/",
        github: "https://github.com/SomexJames/3x3-monte-dapp",
        presentation: false,
        ext: ""
    },
    {
        id: 3,
        title: "BlackJack React",
        background: P3BG,
        description: "A functional ReactJS Webapp on the card game, BlackJack.",
        bullets: ["HTML5", "CSS3", "ReactJS", "Custom Hooks and Game Logic", "Bridge Design Pattern", "Betting Feature", "Functional Components", "Hosted on Github Pages"],
        live: "https://somexjames.github.io/BlackJackReact/",
        github: "https://github.com/SomexJames/BlackJackReact",
        presentation: false,
        ext: ""
    },
    {
        id: 4,
        title: "Trading Strategy in R",
        background: P4BG,
        description: "Backtesting a stock option trading strategy in R.",
        bullets: ["R", "Data Scraping", "Backtesting", "Stock Options", "Financial Mathematical Conversion Formulas", "Data Manipulation", "Technical Analysis Indicators"],
        live: false,
        github: "https://github.com/SomexJames/R_options_spread_strat",
        presentation: false,
        ext: ""
    },
    {
        id: 5,
        title: "Big Data Alpha Model",
        background: P5BG,
        description: "Big Data Alpha Model on various economic, technical, and sentiment factors to determine their significance in predicting future stock prices.",
        bullets: ["R", "Data Scraping", "Sentiment Analysis", "Big Data", "Natural Language Processing", "Multiple Regression Model", "Technical Analysis Indicators", "Fundamental Macroeconomic Data", ],
        live: false,
        github: "https://github.com/SomexJames/BigDataAlphaModel",
        presentation: "https://drive.google.com/file/d/1bntQV692MqeDa6wazA29zekWNKkf9WwM/view?usp=sharing",
        ext: ""
    }    
];


const about = [
    {
        id: 1,
        title: "Personal Executive Summary",
        description: "My name is Brandon Kang and I am currently a student at the University of Texas at Dallas. I am pursuing a Masters in Financial Technology mainly because this was the closest I could get to technology given that I graduated with a business-orientated Bachelor's Degree. Technology/Programming is my passion because most of the things that turn programmers into good programmers are things that I consider fun and find value in."
    }, 
    {
        id: 2,
        title: "Insight Into How I Think",
        description: 'While doing everyday tasks, I tend to catch myself taking a step back and wondering "How can I optimize this?". Whether that may be washing the dishes more efficiently, finding the optimal pathing for vacuuming, or more recently, arranging my bathroom items in order to reduce the amount of conscious effort needed during my morning routine. (I use the term "tend to catch myself" because this is something that I rarely have to plan for, it just naturally comes up as a thought in my mind)'
    }
]

export default { main, projects, about };