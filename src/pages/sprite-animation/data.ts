const spriteHeight = 523
const spriteWidth = 575
export type TFrames = {
  loc: { x: number; y: number }[]
}
export type TSpriteAnimations = {
  [name: string]: TFrames
}

const spriteAnimations: TSpriteAnimations = {}
const animationStates = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'fall',
    frames: 7,
  },
  {
    name: 'run',
    frames: 9,
  },
  {
    name: 'dizzy',
    frames: 11,
  },
  {
    name: 'sit',
    frames: 5,
  },
  {
    name: 'roll',
    frames: 7,
  },
  {
    name: 'bite',
    frames: 7,
  },
  {
    name: 'ko',
    frames: 12,
  },
  {
    name: 'getHit',
    frames: 4,
  },
]

animationStates.forEach((state, index) => {
  const frames: TFrames = { loc: [] }

  for (let j = 0; j < state.frames; j++) {
    const posX = j * spriteWidth
    const posY = index * spriteHeight
    frames.loc.push({ x: posX, y: posY })
  }
  spriteAnimations[state.name] = frames
})

export { animationStates, spriteAnimations }
