//ADD , DELETE , UPDATE , READ

type Todo = {
    id: number,
    title: string,
    description: string
}

const TODOS:Todo[] = [
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread, and fresh fruit from the market."
  },
  {
    "id": 2,
    "title": "Finish report",
    "description": "Complete the quarterly financial summary and send it to the team."
  },
  {
    "id": 3,
    "title": "Schedule dentist appointment",
    "description": "Call Dr. Smith's office for a routine checkup next Tuesday."
  }
]

export default TODOS