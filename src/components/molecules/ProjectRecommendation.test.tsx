import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
  projectsMock,
  translationsMock
} from '../../__mocks__/NormalizedContent'
import {
  ProjectRecommendations,
  ProjectRecommendationsProps
} from './ProjectRecommendations'
import '../../__mocks__/matchMedia.mock'

describe(ProjectRecommendations, () => {
  const setup = (
    props: ProjectRecommendationsProps = {
      translations: translationsMock,
      selectedProject: projectsMock[1],
      projectsContent: projectsMock,
      locale: 'es-es'
    }
  ) => {
    render(
      <BrowserRouter>
        <ProjectRecommendations {...props} />
      </BrowserRouter>
    )
  }

  const resizeWindow = (x: number, y: number) => {
    window.innerWidth = x
    window.innerHeight = y
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
  }

  it('renders the ProjectRecommendations component', () => {
    setup()
    expect(screen.getByTestId('project-recommendations')).toBeInTheDocument()
  })

  it('renders 1 slide per page on mobile', () => {
    setup()
    expect(screen.getByTestId('project-recommendations')).toContainHTML(
      'splide splide--slide splide--ltr splide--draggable is-active is-initialized'
    )
    resizeWindow(390, 844)
    expect(screen.getByTestId('project-recommendations')).toContainHTML(
      'splide is-initialized splide--slide splide--ltr splide--draggable is-active" id="splide02'
    )
  })

  it('displays a different link if the locale is falsy', () => {
    setup({
      translations: translationsMock,
      selectedProject: projectsMock[1],
      projectsContent: projectsMock,
      locale: ''
    })
    expect(screen.getByTestId('project-recommendations')).toContainHTML(
      '/projects/project1#top'
    )
  })
})
