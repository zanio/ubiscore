/**
 * @jest-environment jsdom
 */

 import { render, screen } from "@testing-library/react";
 import userEvent from '@testing-library/user-event';
 import Button from "../../components/FlexiButton";
  
  
 describe("Button", () => {
 
     it("should render button with provided text", () => {
         render(<Button isValid={true} buttonText="Submit" type="submit" handleClick={() => console.log('clicked')} />)
         const element = screen.getByRole('button', { name: /submit/i })
         expect(element).toBeInTheDocument();
     });
 
     it("should render disabled button when isValid prop is false", () => {
         render(<Button isValid={false} buttonText="Submit" type="submit" handleClick={() => console.log('clicked')} />)
         const element = screen.getByRole('button', { name: /submit/i })
         expect(element).toBeDisabled();
     });
 
     it("should render enabled button when isValid prop is true", () => {
         render(<Button isValid={true} buttonText="Submit" type="submit" handleClick={() => console.log('clicked')} />)
         const element = screen.getByRole('button', { name: /submit/i })
         expect(element).toBeEnabled();
     });
 
     it("should call function once on one click", () => {
         const handleClick = jest.fn()
         render(<Button isValid={true} buttonText="Submit" type="submit" handleClick={handleClick} />)
         const element = screen.getByRole('button', { name: /submit/i })
         userEvent.click(element)
         expect(handleClick).toHaveBeenCalledTimes(1);
     });
 });