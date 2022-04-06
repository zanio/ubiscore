/**
 * @jest-environment jsdom
 */

 import { render, screen, fireEvent, waitFor } from "@testing-library/react";
 import TextInput from "../../../components/input/TextInput";
 import {Formik} from 'formik';
 
 
 describe("TextInput", () => {
     let initialValues: Record<string, string>;
     let handleSubmit: jest.Mock
 
     beforeEach(() => {
         initialValues = { 
             email: '',
             password: ''
         };
         handleSubmit = jest.fn();
         render(
             <Formik
                 initialValues={initialValues}
                 onSubmit={handleSubmit}
             >
                 {() => (
                     <TextInput name='email' label='Email' type='text' />
                 )}
             </Formik>
         )
     })
 
     it("should render input text successfully", () => {
         const element = screen.getByRole('textbox');
         expect(element).toBeInTheDocument();
     });
 
     it("should render input with empty intial value", async() => {
         const element = screen.getByRole('textbox');
         expect(element).toHaveAttribute('value', '');
     });
 
     it("should change value as user inputs value", async() => {
         const element = screen.getByRole('textbox');
 
         fireEvent.change(element, {target: {value: 'ibk12mails@gmail.com'}});
         
         await waitFor(() => {
             expect(element).toHaveAttribute('value', 'ibk12mails@gmail.com');
         })
     });
 });