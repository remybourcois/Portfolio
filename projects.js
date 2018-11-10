const projects = [
  {
    slug: 'air-conditioner',
    name: "Air Conditioner",
    media: 'Modeling experiment',
    category: 'Personal',
    year: '2017',
    type: '3D modeling and animation',
    comment: [
      "My first high detailed modeling and animation using Octane Renderer"
    ],
    technologies: [
      'Cinema 4D',
      'Photoshop',
      'After Effects'
    ]
  },
  {
    slug: 'lanterns',
    name: 'Chinese Lanterns',
    media: 'Lighting experiment',
    year: '2017',
    type: '3D modeling',
    comment: [
      "My first render ever using Octane Renderer"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'cristals',
    name: 'Scattering Cristals',
    media: 'Lighting experiment',
    year: '2017',
    type: '3D modeling',
    comment: [
      "Experimenting caustics in a natural environment"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'romeo-elvis',
    name: "L'amour avec des crocos",
    media: 'Title sequence',
    customer: 'Roméo Elvis',
    category: 'Professional',
    year: '2018',
    type: '3D modeling and animation',
    comment: [
      "Typographic work by my man <a href='https://www.instagram.com/nathan_almeras/?hl=fr'>Nathan Almeras</a>"
    ],
    technologies: [
      'Cinema 4D',
      'Photoshop',
      'After Effects'
    ]
  },
  {
    slug: 'magical-tower',
    name: 'Magical Tower',
    media: 'Concept Art',
    year: '2018',
    type: '3D modeling and lighting',
    comment: [
      "A scene I created thanks to <a href='https://kitbash3d.com/'>Kitbash3D's Victorian kit</a>"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'studio',
    name: 'Studio lighting',
    media: 'Lighting experiment',
    year: '2017',
    type: 'Lighting a scene',
    comment: [
      "Lighting projection experiment in a foggy environment"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'knife',
    name: 'Knife evidence',
    media: 'Cloth experiment',
    customer: 'Danslamercedesnacree',
    year: '2018',
    type: '3D dynamics and texturing',
    comment: [
      "Concept I realised for a future music video project"
    ],
    category: 'Professional',
    technologies: [
      'Cinema 4D',
      'Marvelous Designer',
      'Photoshop'
    ]
  },
  {
    slug: 'warzone',
    name: 'Warzone',
    media: 'Concept Art',
    year: '2018',
    type: '3D modeling and lighting',
    comment: [
      "A scene I created thanks to <a href='https://kitbash3d.com/'>Kitbash3D's Warzone kit</a>"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'motherboard',
    name: 'Motherboard',
    media: 'Texturing experiment',
    year: '2017',
    type: '3D modeling and texturing',
    comment: [
      "Experimenting around with a <a href='https://windmillart.net/?p=jsplacement'>JSplacement</a> displacement map"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'glass',
    name: 'Glass',
    media: 'Lighting experiment',
    year: '2017',
    type: '3D modeling and lighting',
    comment: [
      "Lighting experiment with light crossing layers of glass"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'butterfly',
    name: 'Butterfly',
    media: 'Rigging and animation experiment',
    customer: 'Nathan Almeras',
    year: '2018',
    type: '3D modeling and rigging',
    comment: [
      "I realised a serie of animated butterflies for a conceptual short film"
    ],
    category: 'Professional',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'wood',
    name: 'Translucid wood',
    media: 'Texturing and lighting experiment',
    year: '2017',
    type: '3D modeling',
    comment: [
      "I actually meant to create wood until it got crazy"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'flower',
    name: 'Flower',
    media: 'Procedural modeling experiment',
    year: '2018',
    type: '3D modeling',
    comment: [
      "Experiment around the capabilities of procedural modeling techniques"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'extinguisher',
    name: 'Extinguisher',
    media: 'Style frame',
    year: '2018',
    type: '3D modeling and lighting',
    comment: [
      "Inspired by the serie Altered Carbon"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'iridescent-cloth',
    name: 'Iridescent Cloth',
    media: 'Lighting experiment',
    year: '2017',
    type: 'Lighting compositing',
    comment: [
      "One of many iridescent textures experiment"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'sand',
    name: 'Sand',
    media: 'Procedural ground generation',
    year: '2017',
    type: '3D modeling',
    comment: [
      "Trying to recreate sand using procedural techniques"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'bulb',
    name: 'Iridescent Bulb',
    media: 'Lighting experiment',
    year: '2017',
    type: 'Lighting compositing',
    comment: [
      "Early training on how to work with lights in Octane Renderer"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'waves',
    name: 'Waves',
    media: 'Lighting experiment',
    year: '2017',
    type: 'Lighting compositing',
    comment: [
      "Misty waves with a displacement map"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'geometry',
    name: 'Geometry structure',
    media: 'Scattering experiment',
    year: '2017',
    type: '3D composition and lighting',
    comment: [
      "Working around the isometric camera view"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'window',
    name: 'Stained-glass window',
    media: 'Scattering experiment',
    year: '2017',
    type: 'Lighting experiment',
    comment: [
      "Experimenting with procedural fracture shapes"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
  {
    slug: 'playmobil',
    name: 'Playmobil',
    media: 'Prodecural composition',
    year: '2018',
    type: '3D modeling and composition',
    comment: [
      "Composition with something related to an iconic face of my childhood"
    ],
    category: 'Personal',
    technologies: [
      'Cinema 4D',
      'Photoshop'
    ]
  },
]
