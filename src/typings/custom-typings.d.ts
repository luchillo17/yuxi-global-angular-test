declare var global: any

// Basic types
interface ListStateByNumber<T> {
  [key: number]: T
}

interface ListStateByString<T> {
  [key: string]: T
}

// Chart types
interface ChartValue {
  name: string
  value: number
}

// App specific
interface ChallengeInstructions {
  presentationId: null
  challengeId: number
  order: number
  text: string
}

interface TeamEntries {
  completed: number;
  pending: number;
}

interface UserEntries extends TeamEntries {
  score: number;
}
