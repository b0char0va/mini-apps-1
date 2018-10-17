var Checkout = (props) => (
    <button id="checkout" onClick = {props.clickHandler}>Checkout!!</button>
);


var Form1 = (props) => (
    <form className="forms">
        <label>
            Name
    <input type="text"/>
        </label><br/>
        <label>
            Email
    <input type="text"/>
        </label><br/>
        <label>
            Password
    <input type="text"/>
        </label>
        <input type="submit" value="Submit" onClick = {props.clickHandler}/>
    </form>
);

var Form2 = (props) => (
    <form className="forms">
        <label>
            Address
            <input type="text"/>
        </label><br/>
        <label>
            City
            <input type="text"/>
        </label><br/>
        <label>
            State
            <input type="text"/>
        </label>
        <label>
            ZipCode
            <input type="text"/>
        </label>
        <input type="submit" value="Submit" onClick = {props.clickHandler}/>
    </form>
);


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            viewForm1 : false,
            viewForm2 : false,
            viewCheckoutButton : true
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFinalSubmit = this.handleFinalSubmit.bind(this);
        this.form = <Checkout clickHandler = {this.handleClick}/>;
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log('hi');
        switch(this.state.viewForm2) {
            case false:
                this.form = <Form2 clickHandler = {this.handleFinalSubmit}/>;
                break;
            default:
                this.form = <Checkout clickHandler = {this.handleClick}/>;
        }
        this.setState({
            viewForm2 : true,
            viewForm1 : false,
            viewCheckoutButton : false
        })
    }

    handleFinalSubmit (e) {
        e.preventDefault();
        console.log('hey');
    }

    handleClick (){
        switch(this.state.viewForm1) {
            case false:
                this.form = <Form1 clickHandler = {this.handleSubmit}/>;
                break;
            default:
                this.form = <Checkout clickHandler = {this.handleClick}/>;
        }
        this.setState({
            viewForm1 : true,
            viewCheckoutButton : false
        })
    }

    render(){
        return (
            <div>
                {(this.state.viewForm1) ?
                    this.form : ''}
                {(this.state.viewForm2) ?
                    this.form : ''}
                {(this.state.viewCheckoutButton) ?
                    this.form : ''}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


