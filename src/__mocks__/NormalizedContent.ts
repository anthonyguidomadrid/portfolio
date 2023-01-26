import { NormalizedProject } from '~types/normalizedContentTypes'

export const projectsMock: NormalizedProject[] = [
  {
    creationDate: 'Mars 2023',
    codeSourceLink: '/project1',
    slug: 'project1',
    title: 'Project 1',
    subtitle: 'This is Project 1',
    description: 'Project 1 description',
    thumbnail: {
      url: '/thumbnail-link-project-2',
      description: 'thumbnail link Project 2'
    },
    images: [
      {
        url: '/project-1-image-1',
        description: 'project 1 image 1'
      },
      {
        url: '/project-1-image-2',
        description: 'project 1 image 2'
      }
    ],
    projectLink: '/project-link-project-1',
    tags: ['tag1 project 1', 'tag2 project 1']
  },
  {
    creationDate: 'October 2022',
    codeSourceLink: '/project2',
    slug: 'project2',
    title: 'Project 2',
    subtitle: 'This is Project 2',
    description: 'Project 2 description',
    thumbnail: {
      url: '/thumbnail-link-project-2',
      description: 'thumbnail link Project 2'
    },
    images: [
      {
        url: '/project-2-image-1',
        description: 'project 2 image 1'
      },
      {
        url: '/project-2-image-2',
        description: 'project 2 image 2'
      }
    ],
    projectLink: '/project-link-project-2',
    tags: ['tag1 project 2', 'tag2 project 2']
  }
]
