import styled, { keyframes } from 'styled-components'
import * as Accordion from '@radix-ui/react-accordion'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const QuestionsContainer = styled.section`
  background-color: ${(props) => props.theme.white};

  padding: 7rem 5rem;

  section {
    width: 100%;
    max-width: 1440px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    gap: 3rem;

    h2 {
      text-align: center;
      color: ${(props) => props.theme.gray};

      @media (max-width: 445px) {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 2.5rem;
  }

  @media (max-width: 595px) {
    padding: 2.5rem;
  }
`

const slideDown = keyframes`
    from { height: 0 }

    to { height: var(--radix-accordion-content-height) }
  `

const slideUp = keyframes`
    from { height: var(--radix-accordion-content-height) }
    to { height: 0 }
  `

export const AccordionRoot = styled(Accordion.Root)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`

export const AccordionItem = styled(Accordion.Item)`
  width: 75%;

  background-color: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.19);
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  padding: 1.5rem;

  overflow: hidden;

  @media (max-width: 585px) {
    width: 100%;
  }
`
export const AccordionHeader = styled(Accordion.Header)`
  margin-bottom: 1rem;
`
export const AccordionTrigger = styled(Accordion.Trigger)`
  background-color: transparent;
  color: ${(props) => props.theme.gray};

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-bottom: 1px solid #d9d9d9;

  h5 {
    text-align: start;
    font-size: 1rem;
    font-weight: 700;
    line-height: 155%;

    padding: 1rem 0;

    @media (max-width: 445px) {
      padding: 0;
    }
  }

  @media (max-width: 1115px) {
    gap: 2rem;
  }

  @media (max-width: 445px) {
    flex-direction: column;
    gap: 0;
  }
`

export const AccordionContent = styled(Accordion.Content)`
  width: 100%;

  line-height: 155%;
  font-size: 1rem;

  overflow: hidden;

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  h5 {
    @media (max-width: 425px) {
      font-size: 0.75rem;
    }
  }
`
export const Arrow = styled(KeyboardArrowDownIcon)`
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);

  [data-state='open'] & {
    transform: rotate(180deg);
  }

  @media (max-width: 445px) {
    margin: 1rem 0;
  }
`
