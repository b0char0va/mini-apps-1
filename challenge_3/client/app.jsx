var Checkout = (props) => (
    <button className="button" onClick = {props.clickHandler}>Checkout!!</button>
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

var Form3 = (props) => (
    <form className="forms">
        <label>
            CreditCard
            <input type="text"/>
        </label><br/>
        <label>
            Expiry Date
            <input type="text"/>
        </label><br/>
        <label>
            CVV
            <input type="text"/>
        </label>
        <label>
            Billing Zipcode
            <input type="text"/>
        </label>
        <input type="submit" value="Submit" onClick = {props.clickHandler}/>
    </form>
);

var ConfirmationPage = (props) => (
    <div>
        data
        <button className="button" onClick = {props.clickHandler}>Purchase!!</button>
    </div>
);


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            viewForm1 : false,
            viewForm2 : false,
            viewForm3 : false,
            viewConfirmation : false,
            viewCheckoutButton : true
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSecondSubmit = this.handleSecondSubmit.bind(this);
        this.handleThirdSubmit = this.handleThirdSubmit.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
        this.form = <Checkout clickHandler = {this.handleClick}/>;
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log('hi');
        switch(this.state.viewForm2) {
            case false:
                this.form = <Form2 clickHandler = {this.handleSecondSubmit}/>;
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

    handleSecondSubmit (e) {
        e.preventDefault();
        console.log('hey');
        switch(this.state.viewForm3) {
            case false:
                this.form = <Form3 clickHandler = {this.handleThirdSubmit}/>;
                break;
            default:
                this.form = <Checkout clickHandler = {this.handleClick}/>;
        }
        this.setState({
            viewForm3 : true,
            viewForm2 : false,
            viewForm1 : false,
            viewCheckoutButton : false
        })
    }

    handleThirdSubmit(e){
        e.preventDefault();
        console.log('hello');
        switch(this.state.viewConfirmation) {
            case false:
                this.form = <ConfirmationPage clickHandler = {this.handlePurchase} />;
                break;
            default:
                this.form = <Checkout clickHandler = {this.handleClick}/>;
        }
        this.setState({
            viewConfirmation : true,
            viewForm3 : false,
            viewForm2 : false,
            viewForm1 : false,
            viewCheckoutButton : false
        })
    }

    handlePurchase(e){
        e.preventDefault();
        switch(this.state.viewCheckoutButton) {
            case false:
                this.form = <Checkout clickHandler = {this.handleClick}/>;
                break;
            default:
                this.form = <Checkout clickHandler = {this.handleClick}/>;
        }
        this.setState({
            viewConfirmation : false,
            viewForm3 : false,
            viewForm2 : false,
            viewForm1 : false,
            viewCheckoutButton : true
        })

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
                {(this.state.viewForm3) ?
                    this.form : ''}
                {(this.state.viewCheckoutButton) ?
                    this.form : ''}
                {(this.state.viewConfirmation) ?
                    this.form : ''}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


