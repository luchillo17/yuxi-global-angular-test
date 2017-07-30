declare var global: any

// Basic types
interface ListStateByNumber<T> {
  [key: number]: T
}

interface ListStateByString<T> {
  [key: string]: T
}

// App specific
interface ChallengeInstructions {
  presentationId: null
  challengeId: number
  order: number
  text: string
}
