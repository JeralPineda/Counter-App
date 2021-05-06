// Para las pruebas en loc componentes de react <PrimeraApp />
// import '@testing-library/jest-dom/extend-expect';

// Enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
