// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';
require('mutationobserver-shim');

expect.addSnapshotSerializer(createSerializer(emotion));
