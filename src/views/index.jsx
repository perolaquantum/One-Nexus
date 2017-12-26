import * as app from '../app';

const panels = [
    {title: 'foo', content: 'bar'},
    {title: 'fizz', content: 'buzz'},
];

export default function index() {
    ReactDOM.render(<app.Accordion panels={panels} />, document.getElementById('react'));
}