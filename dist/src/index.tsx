import { render } from './preact-shim';

const Test = () => <div>Hello World</div>;

render(Test, document.body);
