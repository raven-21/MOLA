import { useState, useEffect, useRef } from "react";
import useForm from "react-hook-form";

const useLoanApplication = (props) => {
	const elementRef = useRef();
	const [open, setOpen] = useState(false);

	const [loanAppValues, setLoanAppValues] = useState({
		product: '',
		interestType: '',
		purpose: '',
		term: '',
		amount: ''
	});
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const loanAppError = {
		productError: 'Please select loan product!',
		interestTypeError: 'Please select interest type!',
		purposeError: 'Please select a purpose!',
		termError: 'Please select term!',
	};

	const parser = new DOMParser();
	const toDecode = "Loan up to &#8369; 500,000";
	const textAmount = parser.parseFromString(`<!doctype html><body>${toDecode}`, 'text/html').body.textContent;

	const lessAmountMsg = "Amount must not be less than &#8369; 2,000!";
	const lessAmountErr = parser.parseFromString(`<!doctype html><body>${lessAmountMsg}`, 'text/html').body.textContent;

	const greaterAmountMsg = "Amount must not be more than &#8369; 500,000!";
	const greaterAmountErr = parser.parseFromString(`<!doctype html><body>${greaterAmountMsg}`, 'text/html').body.textContent;

	const loanAppText = {
		productText: 'Select loan product',
		interestText: 'Select interest type',
		purposeText: 'Select purpose',
		termText: 'Months',
		amountText: textAmount
	};

	const handleChange = (prop) => (event) => {
		setLoanAppValues({ ...loanAppValues, [prop]: event.target.value });

		if (prop === 'product') {
			delete formErrors.product;
		}
		if (prop === 'interestType') {
			delete formErrors.interestType;
		}
		if (prop === 'purpose') {
			delete formErrors.purpose;
		}
		if (prop === 'term') {
			delete formErrors.term;
		}
		if (prop === 'amount') {
			delete formErrors.amount;
			delete formErrors.message;
		}
	}

	const handleDialogClose = () => {
		props.setOpenDialog(false);
		setLoanAppValues({
			...loanAppValues,
			product: '',
			interestType: '',
			purpose: '',
			term: '',
			amount: ''
		});
		setFormErrors({});
	};

	//Submit
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(loanAppValues));
		setIsSubmit(true);
	};

	useEffect(() => {
		console.log(formErrors)
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			setOpen(true);
		}
		else {
			const divElement = elementRef.current;
			if (divElement) {
				divElement.scrollTop = 0;
			}
		}
	}, [formErrors]);

	//Validate Form
	const validate = (values) => {
		const errors = {};
		if (!values.product) {
			errors.product = true;
		}
		if (!values.interestType) {
			errors.interestType = true;
		}
		if (!values.purpose) {
			errors.purpose = true;
		}
		if (!values.term) {
			errors.term = true;
		}
		if (!values.amount) {
			errors.amount = true;
			errors.message = 'Please specify an amount!';
		} else if (values.amount < 2000) {
			errors.amount = true;
			errors.message = lessAmountErr;
		} else if (values.amount > 500000) {
			errors.amount = true;
			errors.message = greaterAmountErr;
		}
		return errors;
	}

	return {
		loanAppValues,
		loanAppError,
		loanAppText,
		formErrors,
		elementRef,
		open,
		handleChange,
		handleSubmit,
		handleDialogClose
	}
}

export default useLoanApplication;