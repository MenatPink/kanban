export interface State {
  sidebarStatus: boolean;
  darkMode: true;
  activeBoard: Boards[];
  boards: Boards[];
}

export interface Boards {
  title: string;
  columns?: Columns[];
}

export interface Columns {
  title: string;
  tasks: Tasks[];
}

export interface Tasks {
  title: string;
  subtitle: string;
}

export const initialState: State = {
  sidebarStatus: false,
  darkMode: true,
  activeBoard: [],
  boards: [
    {
      title: 'Platform Launch',
      columns: [
        {
          title: 'To-Do',
          tasks: [
            {
              title: 'Build UI for onboarding flow',
              subtitle: '0 for 6 subtasks'
            },
            {
              title: 'Build UI for search',
              subtitle: '0 for 1 subtasks'
            },
            {
              title: 'Build settings UI',
              subtitle: '0 for 6 subtasks'
            },
            {
              title: 'QA and test all major user journeys',
              subtitle: '0 for 6 subtasks'
            }
          ]
        },
        {
          title: 'Doing',
          tasks: [
            {
              title: 'Design settings and search pages',
              subtitle: '1 for 3 subtasks'
            }
          ]
        }
      ]
    },
    {
      title: 'Marketing Plan',
      columns: [
        {
          title: 'Initial Phase',
          tasks: [
            { title: 'Release online Content', subtitle: '2 of 5 subtasks' },
            { title: 'Release online Content', subtitle: '2 of 5 subtasks' },
            { title: 'Release online Content', subtitle: '2 of 5 subtasks' }
          ]
        },
        { title: 'Main Phase', tasks: [] },
        { title: 'Final Phase', tasks: [] },
        { title: 'Maintenence Phase', tasks: [] }
      ]
    },
    { title: 'Roadmap', columns: [] }
  ]
};
