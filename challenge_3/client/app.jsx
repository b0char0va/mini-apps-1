var Checkout = (props) => (
    <button className="button" onClick={props.clickHandler}>Checkout!!</button>
);

var Form1 = (props) => (
    <form className="forms">
        <label>
            Name
            <input type="text" id="name"/>
        </label><br/>
        <label>
            Email
            <input type="text" id="email"/>
        </label><br/>
        <label>
            Password
            <input type="text" id="password"/>
        </label>
        <input type="submit" onClick={props.clickHandler}/>
    </form>
);

var Form2 = (props) => (
    <form className="forms">
        <label>
            Address
            <input type="text" id="address"/>
        </label><br/>
        <label>
            City
            <input type="text" id="city"/>
        </label><br/>
        <label>
            State
            <input type="text" id="state"/>
        </label>
        <label>
            ZipCode
            <input type="text" id="zipcode"/>
        </label>
        <label>
            Phone Number
            <input type="text" id="phonenumber"/>
        </label>
        <input type="submit" value="Submit" onClick={props.clickHandler}/>
    </form>
);

var Form3 = (props) => (
    <form className="forms">
        <label>
            CreditCard
            <input type="text" id="creditcard"/>
        </label><br/>
        <label>
            Expiry Date
            <input type="text" id="expirydate"/>
        </label><br/>
        <label>
            CVV
            <input type="text" id="cvv"/>
        </label>
        <label>
            Billing Zipcode
            <input type="text" id="billingzipcode"/>
        </label>
        <input type="submit" value="Submit" onClick={props.clickHandler}/>
    </form>
);

var ConfirmationPage = (props) => (
    <div>
        <p>{props.content}</p>
        <button className="button" onClick={props.clickHandler}>Purchase!!</button>
    </div>
);


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewForm1: false,
            viewForm2: false,
            viewForm3: false,
            viewConfirmation: false,
            viewCheckoutButton: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSecondSubmit = this.handleSecondSubmit.bind(this);
        this.handleThirdSubmit = this.handleThirdSubmit.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
        this.form = <Checkout clickHandler={this.handleClick}/>;
        this.f1Inputs = {};
        this.f2Inputs = {};
        this.f3Inputs = {};
        this.inputs = {};
    }

    handleSubmit(e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        this.f1Inputs['name'] = name;
        this.f1Inputs['email'] = email;
        this.f1Inputs['password'] = password;
        this.f2Inputs['email'] = email;
        this.f3Inputs['email'] = email;

        this.inputs = Object.assign(this.inputs, this.f1Inputs);
        serverMethods.create('http://localhost:3000/f1',this.f1Inputs);


        switch (this.state.viewForm2) {
            case false:
                this.form = <Form2 clickHandler={this.handleSecondSubmit}/>;
                break;
            default:
                this.form = <Checkout clickHandler={this.handleClick}/>;
        }
        this.setState({
            viewForm2: true,
            viewForm1: false,
            viewCheckoutButton: false
        })
    }

    handleSecondSubmit(e) {
        e.preventDefault();
        var address = document.getElementById('address').value;
        var city = document.getElementById('city').value;
        var state = document.getElementById('state').value;
        var zipcode = document.getElementById('zipcode').value;
        var phonenumber = document.getElementById('phonenumber').value;

        this.f2Inputs['address'] = address;
        this.f2Inputs['city'] = city;
        this.f2Inputs['state'] = state;
        this.f2Inputs['zipcode'] = zipcode;
        this.f2Inputs['phone_number'] = phonenumber;

        serverMethods.create('http://localhost:3000/f2',this.f2Inputs);
        delete this.f2Inputs['email'];
        this.inputs = Object.assign(this.inputs, this.f2Inputs);

        switch (this.state.viewForm3) {
            case false:
                this.form = <Form3 clickHandler={this.handleThirdSubmit}/>;
                break;
            default:
                this.form = <Checkout clickHandler={this.handleClick}/>;
        }
        this.setState({
            viewForm3: true,
            viewForm2: false,
            viewForm1: false,
            viewCheckoutButton: false
        })
    }

    handleThirdSubmit(e) {
        e.preventDefault();
        var creditcard = document.getElementById('creditcard').value;
        var expirydate = document.getElementById('expirydate').value;
        var cvv = document.getElementById('cvv').value;
        var billingzipcode = document.getElementById('billingzipcode').value;

        this.f3Inputs['credit_card'] = creditcard;
        this.f3Inputs['expiry_date'] = expirydate;
        this.f3Inputs['CVV'] = cvv;
        this.f3Inputs['billing_zip_code'] = billingzipcode;
        serverMethods.create('http://localhost:3000/f3', this.f3Inputs);

        delete this.f3Inputs['email'];
        this.inputs = Object.assign(this.inputs, this.f3Inputs);

        switch (this.state.viewConfirmation) {
            case false:
                this.form =
                    <ConfirmationPage content={JSON.stringify(this.inputs)} clickHandler={this.handlePurchase}/>;
                break;
            default:
                this.form = <Checkout clickHandler={this.handleClick}/>;
        }
        this.setState({
            viewConfirmation: true,
            viewForm3: false,
            viewForm2: false,
            viewForm1: false,
            viewCheckoutButton: false
        })
    }

    handlePurchase(e) {
        e.preventDefault();
        switch (this.state.viewCheckoutButton) {
            case false:
                this.form = <Checkout clickHandler={this.handleClick}/>;
                break;
            default:
                this.form = <Checkout clickHandler={this.handleClick}/>;
        }
        this.setState({
            viewConfirmation: false,
            viewForm3: false,
            viewForm2: false,
            viewForm1: false,
            viewCheckoutButton: true
        })

    }

    handleClick() {
        switch (this.state.viewForm1) {
            case false:
                this.form = <Form1 clickHandler={this.handleSubmit}/>;
                break;
            default:
                this.form = <Checkout clickHandler={this.handleClick}/>;
        }
        this.setState({
            viewForm1: true,
            viewCheckoutButton: false
        })
    }

    render() {
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

ReactDOM.render(<App/>, document.getElementById('app'));

var serverMethods = {

    // create: (obj) => {
    //     $.ajax({
    //         url: 'http://localhost:3000',
    //         method: 'POST',
    //         data: obj,
    //         contentType: 'application/json',
    //         success: (result) => {
    //             console.log(result);
    //         },
    //         error: (err) => {
    //             console.log(err);
    //         }
    //     });
    // }

    create: (url,obj) => {
        $.ajax({
            url: url,
            method: 'POST',
            data: JSON.stringify(obj),
            contentType: 'application/json',
            success: (result) => {
                console.log(result);
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
};





