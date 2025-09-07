import { PlanetConfig } from '../models/Planet'

export const marsConfig: PlanetConfig = {
  name: 'Skills',
  modelPath: '/assets/mars_planet.glb',
  meshName: 'LowpolyMars_lowpolymarsmat_0',
  materialName: 'lowpolymarsmat',
  scale: [5000,  5000.001, 5000],
  outlineScale: [5050, 5050.001, 5050],
  outlineSide: 'back',
  annotations : [
    {
      position: [50, 0, 0],
      title: "Olympus Mons",
      description: "Largest volcano in the solar system",
      extraInfo: "Standing 21.9 km high and 600 km in diameter, Olympus Mons is the largest known volcano in the solar system. To put this in perspective, it's about three times as tall as Mount Everest!"
    },
    {
      position: [0, 50, 0],
      title: "North Pole",
      description: "Ice caps containing water and CO2",
      extraInfo: "Mars' polar ice caps consist of both water ice and dry ice (frozen CO2). During winter, up to 30% of Mars' atmosphere freezes into these caps."
    },
    {
      position: [0, 0, 50],
      title: "Valles Marineris",
      description: "Largest canyon in the solar system",
      extraInfo: "At 4,000 km long and up to 7 km deep, Valles Marineris would stretch from New York to California if placed on Earth. It's believed to have formed by ancient tectonic activity."
    }
  ],
  hoverText: "Explore Skills",
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
      description: "The very site you're on right now!",
      customContent:(
        <div> 
          <p>
            This portfolio was made to showcase the projects that I've made and my development skills. In order to highlight my game development background, I wanted to make a site that incorporated 3D aspects with more interaction for the user.
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
      description: "Largest canyon in the solar system",
      extraInfo: "At 4,000 km long and up to 7 km deep, Valles Marineris would stretch from New York to California if placed on Earth. It's believed to have formed by ancient tectonic activity."
    },
    {
      position: [21.7, -37.5, 35.4],
      title: "Inventory Management System for Alchemetrics",
      description: "Largest canyon in the solar system",
      extraInfo: "At 4,000 km long and up to 7 km deep, Valles Marineris would stretch from New York to California if placed on Earth. It's believed to have formed by ancient tectonic activity."
    },
    {
      position: [-17.7, 35.4, -33.7],
      title: "Webpage API",
      description: "Largest canyon in the solar system",
      extraInfo: "At 4,000 km long and up to 7 km deep, Valles Marineris would stretch from New York to California if placed on Earth. It's believed to have formed by ancient tectonic activity."
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
           Hello! I'm Tyler Arroyo, a passionate software and game developer. I strive to learn as much as I can in any field that I'm in. I enjoy working with others to create amazing things, and I love a good challenge. Outside of coding, I'm usually rock climbing, working out, or playing video games! Welcome to my portfolio!

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