import { PlanetConfig } from '../models/Planet'

export const marsConfig: PlanetConfig = {
  name: 'Experience',
  modelPath: '/assets/mars_planet.glb',
  meshName: 'LowpolyMars_lowpolymarsmat_0',
  materialName: 'lowpolymarsmat',
  scale: [5000,  5000.001, 5000],
  outlineScale: [5050, 5050.001, 5050],
  outlineSide: 'back',
  annotations : [
    {
      position: [50, 0, 0],
      title: "Jobs / Prior Work Experience",
      description: "A list of the places that I&apos;ve worked at and my role there.",
      customContent:(
        <div>
          <p><strong>Production Metals                            June 2023</strong><br />        
            <strong>Inventory Facilitator | Full-Time</strong> <br />
            Used a SQL database to properly manage thousands of pounds of metal and process it through their warehouses.
            Worked and communicated with both upper warehouse management and the team of manufacturers to keep the metal organized and accounted for.
          </p>
        </div>
      )
    },
    {
      position: [0, 50, 0],
      title: "Clubs / Extracurricular Activities",
      description: "A list of clubs and extracurricular activities that I&apos;ve participated in.",
      customContent:(
        <div>
          <p>RIT VALORANT Esports <strong>Fall 2023</strong></p>
          <br />
          <p><a href="https://www.rit.edu/esports/valorant" target="_blank" rel="noopener noreferrer">https://www.rit.edu/esports/valorant</a></p>
          <br />
          <img src="/assets/RIT_Valorant.png" alt="RIT Valorant Esports" className="w-full h-auto mt-4" />
        </div>
      )
    },
    {
      position: [0, 0, 50],
      title: "Resume / Skills",
      description: "A list of my skills and qualifications.",
      customContent:(
        <div>
          <p>Resume : <a href="/assets/Tyler_Arroyo_Resume.pdf" target="_blank" rel="pdf">Download Resume</a></p>
          <br />
          <img src="/assets/tyler_arroyo_resume.png" alt="Resume" className="w-full h-auto mt-4" />
        </div>
      )
    }
  ],
  hoverText: "Explore Experience",
  hoverPosition: [160, -75, 0]
}

export const moonConfig: PlanetConfig = {
  name: 'Projects',
  modelPath: '/assets/the_moon.glb',
  meshName: 'defaultMaterial',
  materialName: 'Material__50',
  scale: [5000, 5000.001, 5000],
  outlineScale: [5050, 5050.001, 5050],
  outlineSide: 'back',
  annotations : [
    {
      position: [42.3, 24.0, 19.0],
      title: "Web Portfolio",
      description: "The very site you&apos;re on right now!",
      customContent:(
        <div> 
          <p>
            This portfolio was made to showcase the projects that I&apos;ve made and my development skills. In order to highlight my game development background, I wanted to make a site that incorporated 3D aspects with more interaction for the user.
          </p>
          <br className="padding-10"></br>
          <p>
            The 3D planets were made using React Three Fiber, a powerful library that allows for easy integration of Three.js with React. The rest of the site was built using Next.js and Tailwind CSS to ensure a fast and responsive experience.
          </p>
          <br />
          <p> 
            Skills Used: React, Next.js, Tailwind CSS, Three.js, React Three Fiber, Github, Vercel, and more! 
          </p>
          <br />
          <p>
            Github: <a href="https://github.com/tarroyo0907/Portfolio" target="_blank" rel="github">https://github.com/tarroyo0907/Portfolio</a>
          </p>
        </div>
      )
    },
    {
      position: [-42.3, 24, 19.0],
      title: "Warcry Duel",
      description: "My personal multiplayer Unity game project!",
      customContent: (
        <div>
          <p> Warcry Duel is an online multiplayer game that I developed by myself using Unity. Players fight in one-on-one matches on a board where their goal is to get one of their units to the other side of the board. Along the way, players will engage in combat between their units and utilize their unique abilities to outsmart the enemy opponent in this thrilling strategy game!</p>
          <br/>
          <p><strong>Skills Used:</strong> Unity, C#, Github, Networking for Game Objects, Blender</p>
          <br/>
          <p><strong>Github:</strong> <a href="https://github.com/tarroyo0907/WarcryDuel" target="_blank" rel="github">https://github.com/tarroyo0907/WarcryDuel</a></p>
          <video 
            src="../assets/WarcryVerticalDemo.mp4" 
            controls 
            className="w-full h-auto mt-4"
            poster="../assets/warcry_duel.png"
          />
        </div>
      )
    },
    {
      position: [0, -54, 0],
      title: "The Trail",
      description: "Personal Indie Game made using Unreal Engine",
      customContent: (
        <div>
          <p>The Trail is a game that I made in order to learn about Unreal Engine as I didn&apos;t have any classes that were teaching it. I wanted to create a small indie game to explore the capabilities of the engine and improve my skills. This game was quite simple as Unreal Engine was definitely overwhelming to begin with. The player traveled along a predetermined path and was able to pick up items along the path. These items included sticks, fur, acorns, and rocks to just name a few. At the end of the path, the player could craft more complex objects and sell them in order to make money and progress through the game.</p>
          <br/>
          <p>Through this project, I learned a lot about the Unreal Engine and how to use its various tools and features. I also gained experience in level design, game mechanics, and user interface design. Overall, it was a great learning experience that helped me grow as a game developer.</p>
          <br/>
          <p><strong>Skills Used:</strong> Unreal Engine, Blueprints, 3D Modeling, Texturing, Level Design</p>
          <br/>
        </div>
      )
    },
    {
      position: [21.7, -37.5, 35.4],
      title: "ERP System for Scalibly",
      description: "An Enterprise Resource Planning system made for small businesses.",
      customContent: (
        <div>
          <p>I started working on this project to help my family members who owned small businesses to better handle their assets and inventory as well as help with any administrative work that the business might need. My brother and I created our business Scalibly to do just that. We found an open source ERP system and customized it to fit our needs for our business. As we learned how to use this system, we had to learn Python in order to make our own scripts to automate workflows and tasks within the ERP system.</p>
          <br/>
          <p>Aside from Python, I needed to understand system infrastructure and how to deploy applications for scale. We already knew 4-5 businesses that would need a system like this, so we had to learn how to setup virtual machines to host the docker containers necessary to run the ERP system. These docker containers contained all of the necessary services to run the ERP system, including the database, web server, and any background workers. The database ran using MySQL which was yet another technology we had to learn about.</p>
          <br/>
          <p>Through this project, I gained valuable experience in full-stack development, cloud computing, and project management. It was a challenging but rewarding experience that taught me the importance of adaptability and continuous learning in the ever-evolving tech landscape.</p>
          <br/>
          <p><strong>Skills Used:</strong> Python, Docker, MySQL, Linux, Virtual Machines, ERP Systems, TailScale, SSH</p>
          <br/>
        </div>
      )
    },
    {
      position: [-17.7, 35.4, -33.7],
      title: "Webpage API",
      description: "Academic Project using APIs to fetch data from webpages.",
      customContent:(
        <div>
          <p>This project involved using an API to fetch data and then display that JSON data onto a webpage. In my case, I used a Rick and Morty API to get information about the characters and episodes. I would then display that information in a user-friendly way on the webpage. This included filters and search functionality to help users find the information they were looking for.</p>
          <br/>
          <p>This project helped me learn how to work with APIs and how to manipulate JSON data. I also learned how to use JavaScript to dynamically update the webpage based on user input. Overall, it was a great learning experience that helped me understand the basics of web development and API integration.</p>
          <br/>
          <p><strong>Skills Used:</strong> HTML, CSS, JavaScript, APIs, JSON</p>
          <br/>
          <p><strong>Github:</strong> <a href="https://github.com/tja9674/235WebTechSpring/tree/main/Project2" target="_blank" className="text-blue-400 underline">https://github.com/tja9674/235WebTechSpring/tree/main/Project2</a></p>
        </div>
      )
    },
  ],
  hoverText: "Explore Projects",
  hoverPosition: [0, -75, 0]
}

export const earthConfig: PlanetConfig = {
    name: 'About Me',
    modelPath: '/assets/planet_earth.glb',
    meshName: 'Earth_Diffuse_6K_Earth_Diffuse_6Kmain_0',
    materialName: 'Earth_Diffuse_6K.main',
    scale: [16000, 16000.001, 16000],
    outlineScale: [16050, 16050, 16050],
    outlineSide: 'front',
    annotations : [
      {
        position: [51, 0, 0],
        title: "Biography",
        description: "Learn a little bit about who I am!",
        customContent: (
          <div className="space-y-4"> 
          <p className="text-white/90">
           Hello! I&apos;m Tyler Arroyo, a passionate software and game developer. I strive to learn as much as I can in any field that I&apos;m in. I enjoy working with others to create amazing things, and I love a good challenge. Outside of coding, I&apos;m usually rock climbing, working out, or playing video games! Welcome to my portfolio!

           <br/>
           <hr/>
           <br/>

           Education : Rochester Institute of Technology

            <br/>
           <hr/>
           <br/>

            <strong>Golisano College of Computing Information</strong> B.S. in Game Design and Development
          </p>
          <img src="/assets/selfie.jpg" alt="Profile Picture" className="w-32 h-32 rounded-full mx-auto object-cover"/>
          </div>
        ),
      },
      {
        position: [-51, 0, 0],
        title: "Contact Information",
        description: "A list of ways to reach me!",
        customContent: (
          <p>
            Email : tarroyo0907@gmail.com <br/>
            LinkedIn : <a href="https://www.linkedin.com/in/tyler-arroyo-03206b256/" target="_blank" className="text-blue-400 underline">linkedin.com/in/tyler-arroyo/</a>
          </p>
        ),
      },
    ],
    hoverText: "Explore About Me",
    hoverPosition: [-160, -75, 0]
  }