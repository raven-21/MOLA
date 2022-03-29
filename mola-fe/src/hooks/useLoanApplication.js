import { useState } from "react"

const useLoanApplication = (props) => {
	//Loan Product
	const [product, setProduct] = useState('');
	const [productError, setProductError] = useState(false);
	const textProduct = 'Select loan product';
	const [productText, setProductText] = useState(textProduct);
	const handleChangeProduct = (event) => {
		setProduct(event.target.value);
		setProductError(false);
		setProductText(textProduct);
	};
	//Interest Type
	const [interestType, setInterestType] = useState('');
	const [interestTypeError, setInterestTypeError] = useState(false);
	const textInterest = 'Select interest type';
	const [interestTypeText, setInterestTypeText] = useState(textInterest);
	const handleChangeInterest = (event) => {
		setInterestType(event.target.value);
		setInterestTypeError(false);
		setInterestTypeText(textInterest);
	};
	//Purpose
	const [purpose, setPurpose] = useState('');
	const [purposeError, setPurposeError] = useState(false);
	const textPurpose = 'Select purpose';
	const [purposeText, setPurposeText] = useState(textPurpose);
	const handleChangePurpose = (event) => {
		setPurpose(event.target.value);
		setPurposeError(false);
		setPurposeText(textPurpose);
	};
	//Class
	const [loanClass, setClass] = useState('');
	const [loanClassError, setClassError] = useState(false);
	const handleChangeClass = (event) => {
		setClass(event.target.value);
		setClassError(false);
	};
	//Terms
	const [term, setTerm] = useState('');
	const [termError, setTermError] = useState(false);
	const textTerm = 'Months';
	const [termText, setTermText] = useState(textTerm);
	const handleChangeTerm = (event) => {
		setTerm(event.target.value);
		setTermError(false);
		setTermText(textInterest);
	};
	//Amount
	const [amount, setAmount] = useState('');
	const [amountError, setAmountError] = useState(false);
	const parser = new DOMParser();
	const strToDecode = "Loan up to &#8369; 500,000";
	const decodedString = parser.parseFromString(`<!doctype html><body>${strToDecode}`, 'text/html').body.textContent;
	const [amountText, setAmountText] = useState(decodedString);
	const handleChangeAmount = (event) => {
		setAmount(event.target.value);
		setAmountError(false);
		setAmountText(decodedString);
	};

	const handleDialogClose = () => {
		props.setOpenDialog(false);
		document.getElementById("loan-app-form").reset();
		setProduct('');
		setInterestType('');
		setPurpose('');
		setClass('');
		setTerm('');
	};

	//Submit
	const handleSubmit = (e) => {
		e.preventDefault();

		if (product === '') {
			setProductError(true);
			setProductText('Please select a loan product!');
		}
		if (interestType === '') {
			setInterestTypeError(true);
			setInterestTypeText('Please select interest type!')
		}
		if (purpose === '') {
			setPurposeError(true);
			setPurposeText('Please select purpose!');
		}
		if (loanClass === '') {
			setClassError(true)
		}
		if (term === '') {
			setTermError(true);
			setTermText('Please select term!');
		}
		if (amount === '') {
			setAmountError(true);
			setAmountText('Please enter an amount!');
		}
	}

	return {
		product,
		productError,
		productText,
		interestType,
		interestTypeError,
		interestTypeText,
		purpose,
		purposeError,
		purposeText,
		loanClass,
		loanClassError,
		term,
		termError,
		termText,
		amount,
		amountError,
		amountText,
		handleChangeProduct,
		handleChangeInterest,
		handleChangePurpose,
		handleChangeClass,
		handleChangeAmount,
		handleChangeTerm,
		handleSubmit,
		handleDialogClose
	}
}

export default useLoanApplication;