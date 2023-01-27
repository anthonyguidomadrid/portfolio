import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {
  projectsMock,
  translationsMock
} from '../../__mocks__/NormalizedContent'
import { ProjectDetail, ProjectDetailProps } from './ProjectDetail'
import '../../__mocks__/matchMedia.mock'

describe(ProjectDetail, () => {
  const setup = (
    props: ProjectDetailProps = {
      projectContent: projectsMock[0],
      translations: translationsMock
    }
  ) => {
    render(<ProjectDetail {...props} />)
  }

  it('renders the ProjectDetail component', () => {
    setup()
    expect(screen.getByTestId('project-detail')).toBeInTheDocument()
  })
})
