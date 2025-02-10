/**
* @jest-environment jsdom
*/
import { checkForCity } from '../src/client/js/cityChecker';
describe("Testing that input field is not Null", () => {
   test("Testing the checkForName() function", async () => {
           expect(checkForCity).toBeDefined();
})});