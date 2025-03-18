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
  hoverText: "Explore Projects",
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
        title: "Olympus Mons",
        description: "Largest volcano in the solar system",
        extraInfo: "Standing 21.9 km high and 600 km in diameter, Olympus Mons is the largest known volcano in the solar system. To put this in perspective, it's about three times as tall as Mount Everest!"
      },
      {
        position: [0, 51, 0],
        title: "North Pole",
        description: "Ice caps containing water and CO2",
        extraInfo: "Mars' polar ice caps consist of both water ice and dry ice (frozen CO2). During winter, up to 30% of Mars' atmosphere freezes into these caps."
      },
      {
        position: [0, 0, 51],
        title: "Valles Marineris",
        description: "Largest canyon in the solar system",
        extraInfo: "At 4,000 km long and up to 7 km deep, Valles Marineris would stretch from New York to California if placed on Earth. It's believed to have formed by ancient tectonic activity."
      }
    ],
    hoverText: "Explore About Me",
  }