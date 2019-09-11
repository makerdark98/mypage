import React, { Component } from 'react';
import './Navbar.css';

interface Props {

}
interface State {

}

class Navbar extends Component<Props, State> {
    constructor(props : Props) {
        super(props);
    }

    componentWillMount(): void {
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (<nav className="Navbar">
            Navigation Bar
        </nav>);
    }

}

export default Navbar;