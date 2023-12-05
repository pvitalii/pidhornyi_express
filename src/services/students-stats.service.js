class StudentsStatsService {
  #studentsStats = [
    {
      id: 1,
      name: 'Aimee Zank',
      scores: [
        {
          score: 1.463179736705023,
          type: 'exam' 
        },
        {
          score: 11.78273309957772,
          type: 'quiz'
        },
        {
          score: 35.8740349954354,
          type: 'homework'
        }
      ]
    },
    {
      id: 2,
      name: 'Vitalii Pidhornyi',
      scores: [
        {
          score: 2,
          type: 'exam'
        },
        {
          score: 13,
          type: 'quiz'
        },
        {
          score: 45,
          type: 'homework'
        }
      ]
    },
    {
      id: 3,
      name: 'Cristiano Ronaldo',
      scores: [
        {
          score: 3,
          type: 'exam'
        },
        {
          score: 12,
          type: 'quiz'
        },
        {
          score: 33.5,
          type: 'homework'
        }
      ]
    }
  ];

  getStudentStatsById(id) {
    return this.#studentsStats.find((studentStats) => studentStats.id === +id);
  }

  getWorstHomework() {
    return this.#studentsStats.reduce((prev, curr) => {
      const prevHomework = prev.scores.find((scores) => scores.type === 'homework').score;
      const currHomework = curr.scores.find((scores) => scores.type === 'homework').score;
      return currHomework < prevHomework ? curr : prev; 
    })
  }
}

export const studentsStatsService = new StudentsStatsService();
