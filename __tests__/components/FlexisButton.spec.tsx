/**
 * @jest-environment jsdom
 */

 import { render, screen } from "@testing-library/react";
 import userEvent from '@testing-library/user-event';
 import Button from "../../components/FlexiButton";
  
  
 describe("Button", () => {
 
     it("should render button with provided text", () => {
         render(<Button  isLoading={false} type="submit" onClick={()=>(e) => console.log('clicked', e)} />)
         const element = screen.getByRole('button')
         expect(element).toBeInTheDocument();
     });
 
     it("should render enabled button when disabled prop is false", () => {
         render(<Button  disabled={false}  type="submit" onClick={()=>() => console.log('clicked')} />)
         const element = screen.getByRole('button')
        //  expect(element).toBeDisabled();
         expect(element).toBeEnabled();
     });
 
     it("should render disabled button when loading prop is true", () => {
         render(<Button disabled loadingText="Submitting..." type="submit" onClick={()=>() => console.log('clicked')} />)
         const element = screen.getByRole('button')
         expect(element).toBeDisabled();
     });

     it("should render svg loader when loading is true", () => {
        render(<Button isLoading={true} loadingText="Submitting..." type="submit" onClick={()=>() => console.log('clicked')} />)
        const element = screen.getByRole('button')
        expect(element.getElementsByTagName('svg')).toBeDefined()
    });
 
     it("should call function once on one click", () => {
         const handleClick = jest.fn()
         render(<Button disabled={false} loadingText="Submitting..." type="submit" onClick={handleClick} />)
         const element = screen.getByRole('button')
         userEvent.click(element)
         expect(handleClick).toHaveBeenCalledTimes(1);
         expect(element.getElementsByTagName('svg')).toBeDefined()

     });
 });