export const explorer = {
  id: '1',
  name: 'root',
  isFolder: true,
  items: [
    {
      id: '2',
      name: 'public',
      isFolder: true,
      items: [
        {
          id: '3',
          name: 'public nested 1',
          isFolder: true,
          items: [
            {
              id: '4',
              name: 'index.html',
              isFolder: false,
              items: [],
            },
            {
              id: '5',
              name: 'index.css',
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: '6',
          name: 'public nested file',
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: '7',
      name: 'src',
      isFolder: true,
      items: [
        {
          id: '8',
          name: 'App.ts',
          isFolder: false,
          items: [],
        },
        {
          id: '9',
          name: 'index.ts',
          isFolder: false,
          items: [],
        },
        {
          id: '10',
          name: 'App.css',
          isFolder: false,
          items: [],
        },
      ],
    },
  ],
};
