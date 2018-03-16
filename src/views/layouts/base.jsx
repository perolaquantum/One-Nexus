import * as app from '../../app';

/**
 * Render Base layout
 */
export default class Base extends React.Component {
    render() {
        return (
            <main>
                <app.Header {...this.props.header} content={
                    <Component name='wrapper'>
                        <app.Logo {...this.props.logo} />
                        <app.Navigation {...this.props.navigation} />

                        <div className='sideNav_toggle button-icon-primary max-break-3'>
                            <i className='fa fa-bars'></i>
                        </div>
                    </Component>
                } />

                <div className="container">
                    <div>
                        <app.Link to='/'>Home</app.Link>
                        <app.Link to='/accordion'>Accordions</app.Link>
                        <app.Link to='/alert'>Alert</app.Link>
                        <app.Link to='/blockquote'>Blockquote</app.Link>
                    </div>

                    {this.props.children}
                </div>
            </main>
        )
    }
}